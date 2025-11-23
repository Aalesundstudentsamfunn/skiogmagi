/* eslint-env browser */

import type { Ticket } from "./api";

export type StatusTone = "info" | "error";

// Allow using window.CLOUDINARY_CLOUD_NAME safely
declare global {
  interface Window {
    CLOUDINARY_CLOUD_NAME?: string;
  }
}

// Helper to get elements by id
const getEl = (id: string): HTMLElement | null =>
  document.getElementById(id);

// Show status text above the ticket box
export function setStatus(msg: string, tone: StatusTone = "info"): void {
  const el = getEl("status");
  if (!el) return;
  el.textContent = msg || "";
  el.className = `mb-4 text-sm ${
    tone === "error" ? "text-red-600" : "text-neutral-600"
  }`;
}

// Render ticket data into the DOM
export function renderTicket(ticket: Ticket): void {
  const productEl = getEl("ticket-product");
  const idEl = getEl("ticket-id");
  const ownerEl = getEl("ticket-owner");
  const emailEl = getEl("ticket-email");

  if (productEl) productEl.textContent = ticket.product || "Billett";
  if (idEl) idEl.textContent = ticket.id || "";
  if (ownerEl) ownerEl.textContent = ticket.ownerName || "";
  if (emailEl) emailEl.textContent = ticket.email || "";

  // Phone row
  const phoneRow = getEl("row-phone");
  if (ticket.phone) {
    const phoneEl = getEl("ticket-phone");
    if (phoneEl) phoneEl.textContent = ticket.phone;
    phoneRow?.classList.remove("hidden");
  } else {
    phoneRow?.classList.add("hidden");
  }

  // Original owner row
  const origRow = getEl("row-original");
  if (ticket.originalOwner) {
    const origEl = getEl("ticket-original");
    if (origEl) origEl.textContent = ticket.originalOwner;
    origRow?.classList.remove("hidden");
  } else {
    origRow?.classList.add("hidden");
  }

  // Status badge
  const status = (ticket.status || "").toUpperCase();
  const badge = getEl("ticket-status");
  if (badge) {
    const label = status || "ACTIVE";
    badge.textContent = label;
    badge.className =
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium " +
      (label === "ACTIVE"
        ? "bg-emerald-100 text-emerald-800"
        : label === "USED"
        ? "bg-amber-100 text-amber-800"
        : "bg-neutral-100 text-neutral-800");
  }

  // QR generation
  const qr = getEl("ticket-qr");
  if (qr && qr instanceof HTMLImageElement) {
    const payload = encodeURIComponent(ticket.id || "");
    const cloudName = window.CLOUDINARY_CLOUD_NAME || "";
    const qrRemote = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${payload}`;
    const cldFetch = cloudName
      ? `https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto/${encodeURIComponent(
          qrRemote
        )}`
      : qrRemote;

    qr.src = cldFetch;
    qr.alt = `QR-kode for billett ${ticket.id}`;
  }

  // Show result, hide placeholder
  const resultEl = getEl("result");
  const placeholderEl = getEl("placeholder");
  resultEl?.classList.remove("hidden");
  placeholderEl?.classList.add("hidden");

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

// Small helper for dialog close animation
function animateClose(dlg: HTMLDialogElement | null): void {
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
export function initTicketDialogs(
  setStatusFn: (msg: string, tone?: StatusTone) => void
): void {
  const qrSmall = document.getElementById("ticket-qr") as
    | HTMLImageElement
    | null;
  const qrDlg = document.getElementById("qr-dialog") as
    | HTMLDialogElement
    | null;
  const qrBig = document.getElementById("qr-big") as HTMLImageElement | null;

  const transferBtn = document.getElementById(
    "btn-transfer"
  ) as HTMLButtonElement | null;
  const transferDlg = document.getElementById("transfer-dialog") as
    | HTMLDialogElement
    | null;
  const transferForm = document.getElementById("transfer-form") as
    | HTMLFormElement
    | null;

  // QR enlarge dialog
  if (qrSmall) {
    qrSmall.addEventListener("click", () => {
      if (!qrDlg || !qrBig) return;
      qrBig.src = qrSmall.getAttribute("src") || "";
      try {
        qrDlg.showModal();
      } catch {
        qrDlg.setAttribute("open", "");
      }
    });
  }

  // Close when clicking outside the modal panel
  if (qrDlg) {
    qrDlg.addEventListener("click", (event: MouseEvent) => {
      const panel = qrDlg.querySelector(".modal-panel") as
        | HTMLElement
        | null;
      if (!panel) return;

      const target = event.target as Node;
      if (!panel.contains(target)) {
        animateClose(qrDlg);
      }
    });

    // Close on explicit "Lukk" button
    qrDlg
      .querySelectorAll("[data-close]")
      .forEach((btn) =>
        btn.addEventListener("click", () => animateClose(qrDlg))
      );

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
      if (event.target === transferDlg) animateClose(transferDlg);
    });

    transferDlg
      .querySelectorAll("[data-close]")
      .forEach((btn) =>
        btn.addEventListener("click", () => animateClose(transferDlg))
      );

    transferDlg.addEventListener("cancel", (event) => {
      event.preventDefault();
      animateClose(transferDlg);
    });
  }

  // Transfer form submit (demo only – frontend-side)
  if (transferForm) {
    transferForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameEl = document.getElementById(
        "newName"
      ) as HTMLInputElement | null;
      const emailEl = document.getElementById(
        "newEmail"
      ) as HTMLInputElement | null;
      const phoneElInput = document.getElementById(
        "newPhone"
      ) as HTMLInputElement | null;

      const name = nameEl?.value.trim() || "";
      const email = emailEl?.value.trim() || "";
      const phone = phoneElInput?.value.trim() || "";

      if (!name || !email) return;

      const origRow = document.getElementById("row-original");
      const origEl = document.getElementById("ticket-original");
      const currentOwner =
        document.getElementById("ticket-owner")?.textContent || "";

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
        phoneRow2?.classList.remove("hidden");
      }

      animateClose(transferDlg);
      setStatusFn("Billetten er overført (demo).", "info");
    });
  }
}