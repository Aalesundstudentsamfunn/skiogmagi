/* eslint-env browser */

// Helper to get elements by id.
const getEl = (id) => document.getElementById(id);

let selectsInitialized = false;

// Apply value + label to a custom select and update option states.
function setSelectValue(select, value, labelText, fireChange = true) {
  const input = select.querySelector("[data-select-value]");
  const label = select.querySelector("[data-select-label]");
  const options = Array.from(select.querySelectorAll("[data-select-option]"));
  if (input) input.value = value || "";
  if (label) label.textContent = labelText || select.dataset.placeholder || "";
  options.forEach((opt) => {
    opt.setAttribute("aria-selected", opt.dataset.value === value ? "true" : "false");
  });
  if (fireChange && input) input.dispatchEvent(new Event("change", { bubbles: true }));
}

// Sync the select UI to the current hidden input value or default.
function syncSelectToValue(select, fireChange = false) {
  const input = select.querySelector("[data-select-value]");
  const options = Array.from(select.querySelectorAll("[data-select-option]"));
  const value = input?.value || select.dataset.default || "";
  const match = options.find((opt) => opt.dataset.value === value);
  if (match) {
    const labelText = match.dataset.label || match.textContent?.trim() || value;
    setSelectValue(select, value, labelText, fireChange);
  } else {
    const label = select.querySelector("[data-select-label]");
    if (label) label.textContent = select.dataset.placeholder || "Velg";
  }
}

// Close a custom select dropdown.
function closeSelect(select) {
  const trigger = select.querySelector("[data-select-trigger]");
  const menu = select.querySelector("[data-select-menu]");
  const chevron = select.querySelector("[data-select-chevron]");
  if (menu) menu.hidden = true;
  select.dataset.open = "false";
  if (trigger) trigger.setAttribute("aria-expanded", "false");
  if (chevron) chevron.style.transform = "";
}

// Close all selects except the provided one.
function closeAllSelects(selects, except) {
  selects.forEach((select) => {
    if (select !== except) closeSelect(select);
  });
}

// Open a select dropdown and rotate its chevron.
function openSelect(select, selects) {
  const trigger = select.querySelector("[data-select-trigger]");
  const menu = select.querySelector("[data-select-menu]");
  const chevron = select.querySelector("[data-select-chevron]");
  if (!menu) return;
  closeAllSelects(selects, select);
  menu.hidden = false;
  select.dataset.open = "true";
  if (trigger) trigger.setAttribute("aria-expanded", "true");
  if (chevron) chevron.style.transform = "rotate(180deg)";
}

// Initialize lightweight custom selects used in the ticket transfer dialog.
function initCustomSelects() {
  if (selectsInitialized) return;
  const selects = Array.from(document.querySelectorAll("[data-select]"));
  if (!selects.length) return;
  selectsInitialized = true;

  selects.forEach((select) => {
    const trigger = select.querySelector("[data-select-trigger]");
    const menu = select.querySelector("[data-select-menu]");
    const options = Array.from(select.querySelectorAll("[data-select-option]"));
    syncSelectToValue(select, false);

    if (trigger) {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const isOpen = select.dataset.open === "true";
        if (isOpen) {
          closeSelect(select);
        } else {
          openSelect(select, selects);
        }
      });
    }

    options.forEach((opt) => {
      opt.addEventListener("click", (event) => {
        event.preventDefault();
        const value = opt.dataset.value || "";
        const labelText = opt.dataset.label || opt.textContent?.trim() || value;
        setSelectValue(select, value, labelText, true);
        closeSelect(select);
        trigger?.focus();
      });
    });

    menu?.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSelect(select);
        trigger?.focus();
      }
    });
  });

  document.addEventListener("click", (event) => {
    selects.forEach((select) => {
      if (!select.contains(event.target)) closeSelect(select);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllSelects(selects);
  });
}

// Reset all custom selects to their current values after form resets.
function syncAllSelects() {
  document.querySelectorAll("[data-select]").forEach((select) => syncSelectToValue(select, false));
}

// Show status text above the ticket box.
export function setStatus(msg, tone = "info") {
  const el = getEl("status");
  if (!el) return;
  if (!msg) {
    el.textContent = "";
    el.className = "mb-3 text-sm text-white/85";
    return;
  }

  const toneClass =
    tone === "error"
      ? "mb-3 rounded-lg border border-rose-300/30 bg-rose-500/15 px-3 py-2 text-sm text-rose-100"
      : tone === "success"
        ? "mb-3 rounded-lg border border-emerald-300/30 bg-emerald-500/15 px-3 py-2 text-sm text-emerald-100"
        : "mb-3 text-sm text-white/85";

  el.textContent = msg;
  el.className = toneClass;
}

// Render ticket data into the DOM and prep the transfer form.
export function renderTicket(ticket) {
  const productEl = getEl("ticket-product");
  const idEl = getEl("ticket-id");
  const ownerEl = getEl("ticket-owner");
  const emailEl = getEl("ticket-email");
  const transferIdInput = getEl("transferTicketId");

  if (productEl) productEl.textContent = ticket.product || "Billett";
  if (idEl) idEl.textContent = ticket.id || "";
  if (ownerEl) ownerEl.textContent = ticket.ownerName || "";
  if (emailEl) emailEl.textContent = ticket.email || "";
  if (transferIdInput && "value" in transferIdInput) {
    const ticketDbId = ticket?.ticket_id || ticket?.ticket?.ticket_id || ticket?.ticketId || ticket?.ticket?.id || "";
    transferIdInput.value = String(ticketDbId || ticket.id || ticket.ref_id || "");
  }

  // Phone row
  const phoneRow = getEl("row-phone");
  if (ticket.phone) {
    const phoneEl = getEl("ticket-phone");
    if (phoneEl) phoneEl.textContent = ticket.phone;
    if (phoneRow) phoneRow.classList.remove("hidden");
  } else if (phoneRow) {
    phoneRow.classList.add("hidden");
  }

  // Original owner row
  const origRow = getEl("row-original");
  if (ticket.originalOwner) {
    const origEl = getEl("ticket-original");
    if (origEl) origEl.textContent = ticket.originalOwner;
    if (origRow) origRow.classList.remove("hidden");
  } else if (origRow) {
    origRow.classList.add("hidden");
  }

  // Status badge
  const status = (ticket.status || "").toUpperCase();
  const badge = getEl("ticket-status");
  if (badge) {
    const label = status || "ACTIVE";
    badge.textContent = label;
    badge.className = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium " + (label === "ACTIVE" ? "bg-emerald-100 text-emerald-800" : label === "USED" ? "bg-amber-100 text-amber-800" : "bg-neutral-100 text-neutral-800");
  }

  // QR generation
  const qr = getEl("ticket-qr");
  if (qr && qr instanceof HTMLImageElement) {
    const payload = encodeURIComponent(ticket.id || "");
    // Optional: set window.CLOUDINARY_CLOUD_NAME in a small inline script if you want Cloudinary fetch
    const cloudName = (typeof window !== "undefined" && window.CLOUDINARY_CLOUD_NAME) || "";
    const qrRemote = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${payload}`;
    const cldFetch = cloudName ? `https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto/${encodeURIComponent(qrRemote)}` : qrRemote;

    qr.src = cldFetch;
    qr.alt = `QR-kode for billett ${ticket.id}`;
  }

  // Show result, hide placeholder
  const resultEl = getEl("result");
  const placeholderEl = getEl("placeholder");
  if (resultEl) resultEl.classList.remove("hidden");
  if (placeholderEl) placeholderEl.classList.add("hidden");

  // Copy button
  const copyBtn = getEl("copy-id");
  if (copyBtn) {
    copyBtn.addEventListener(
      "click",
      async () => {
        try {
          await navigator.clipboard.writeText(ticket.id || "");
          copyBtn.textContent = "Kopiert!";
          setTimeout(() => {
            copyBtn.textContent = "Kopier";
          }, 1200);
        } catch (err) {
          console.warn("Could not copy ticket id", err);
        }
      },
      { once: true }
    );
  }
}

// Small helper for dialog close animation.
function animateClose(dlg) {
  if (!dlg || !dlg.hasAttribute("open")) return;
  dlg.classList.add("closing");
  setTimeout(() => {
    try {
      dlg.close();
    } catch {
      dlg.removeAttribute("open");
    }
    dlg.classList.remove("closing");
  }, 150);
}

// QR dialog + transfer dialog
export function initTicketDialogs(setStatusFn) {
  const qrSmall = document.getElementById("ticket-qr");
  const qrDlg = document.getElementById("qr-dialog");
  const qrBig = document.getElementById("qr-big");
  const transferBtn = document.getElementById("btn-transfer");
  const transferDlg = document.getElementById("transfer-dialog");
  const transferForm = document.getElementById("transfer-form");

  initCustomSelects();

  // QR enlarge dialog
  if (qrSmall) {
    qrSmall.addEventListener("click", () => {
      if (!qrDlg || !qrBig) return;
      if (qrBig instanceof HTMLImageElement && qrSmall instanceof HTMLImageElement) {
        qrBig.src = qrSmall.getAttribute("src") || "";
      }
      try {
        qrDlg.showModal();
      } catch {
        qrDlg.setAttribute("open", "");
      }
    });
  }

  // Close when clicking outside the modal panel
  if (qrDlg) {
    qrDlg.addEventListener("click", (event) => {
      const panel = qrDlg.querySelector(".modal-panel");
      if (!panel) return;
      const target = event.target;
      if (target instanceof Node && !panel.contains(target)) {
        animateClose(qrDlg);
      }
    });

  // Close on explicit "Lukk" button
    qrDlg.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => animateClose(qrDlg)));

  // Prevent ESC default flash
    qrDlg.addEventListener("cancel", (event) => {
      event.preventDefault();
      animateClose(qrDlg);
    });
  }

  // Transfer dialog open/close
  if (transferBtn) {
    transferBtn.addEventListener("click", () => {
      if (!transferDlg) return;
      try {
        transferDlg.showModal();
      } catch {
        transferDlg.setAttribute("open", "");
      }
    });
  }

  if (transferDlg) {
    transferDlg.addEventListener("click", (event) => {
      const panel = transferDlg.querySelector(".modal-panel");
      if (!panel) return;
      const target = event.target;
      if (target instanceof Node && !panel.contains(target)) {
        animateClose(transferDlg);
      }
    });

    transferDlg.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => animateClose(transferDlg)));

    transferDlg.addEventListener("cancel", (event) => {
      event.preventDefault();
      animateClose(transferDlg);
    });
  }

  // Transfer form submit (Netlify form post).
  if (transferForm) {
    transferForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!transferForm.checkValidity()) {
        transferForm.reportValidity();
        if (typeof setStatusFn === "function") {
          setStatusFn("Fyll ut alle felter korrekt.", "error");
        }
        return;
      }
      const nameEl = document.getElementById("newName");
      const emailEl = document.getElementById("newEmail");
      const phoneElInput = document.getElementById("newPhone");
      const submitBtn = transferForm.querySelector("[data-transfer-submit]");

      const name = nameEl && "value" in nameEl ? String(nameEl.value || "").trim() : "";
      const email = emailEl && "value" in emailEl ? String(emailEl.value || "").trim() : "";
      const phone = phoneElInput && "value" in phoneElInput ? String(phoneElInput.value || "").trim() : "";

      if (!name || !email || !phone) {
        if (typeof setStatusFn === "function") {
          setStatusFn("Fyll ut fullt navn, e-post og telefonnummer.", "error");
        }
        return;
      }

      if (submitBtn) {
        submitBtn.setAttribute("disabled", "true");
        submitBtn.classList.add("opacity-70", "cursor-not-allowed");
      }

      const origRow = document.getElementById("row-original");
      const origEl = document.getElementById("ticket-original");
      const currentOwner = document.getElementById("ticket-owner")?.textContent || "";
      const ticketIdInput = document.getElementById("transferTicketId");
      const ticketId = (ticketIdInput && "value" in ticketIdInput ? ticketIdInput.value : "") || document.getElementById("ticket-id")?.textContent || "";

      try {
        const formData = new FormData(transferForm);
        formData.set("form-name", "ticket-transfer");
        if (ticketId) formData.set("ticketId", ticketId);

        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        if (currentOwner && origEl && origRow && !origEl.textContent) {
          origEl.textContent = currentOwner;
          origRow.classList.remove("hidden");
        }

        const ownerEl = document.getElementById("ticket-owner");
        const phoneRow2 = document.getElementById("row-phone");
        const phoneEl = document.getElementById("ticket-phone");

        if (ownerEl) ownerEl.textContent = name;
        if (phone) {
          if (phoneEl) phoneEl.textContent = phone;
          if (phoneRow2) phoneRow2.classList.remove("hidden");
        }

      animateClose(transferDlg);
      transferForm.reset();
      syncAllSelects();
      if (typeof setStatusFn === "function") {
        setStatusFn("Takk! Vi har mottatt informasjon om ny eier.", "success");
      }

        const resultEl = document.getElementById("result");
        if (resultEl) resultEl.classList.add("hidden");
      } catch (err) {
        if (typeof setStatusFn === "function") {
          setStatusFn("Kunne ikke sende inn skjemaet akkurat nå.", "error");
        }
      } finally {
        if (submitBtn) {
          submitBtn.removeAttribute("disabled");
          submitBtn.classList.remove("opacity-70", "cursor-not-allowed");
        }
      }
    });
  }
}
