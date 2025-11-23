/* eslint-env browser */

import { fetchTicketByRefId } from "/scripts/ticket/api.js";
import { setStatus, renderTicket, initTicketDialogs } from "/scripts/ticket/ui.js";

function initTicketPage() {
  const form = document.getElementById("ticket-form");
  const input = document.getElementById("ticketId");
  const submitBtn = document.getElementById("ticket-submit"); // optional

  if (!input) return;

  const handleSubmit = async (event) => {
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }

    const id = String(input.value || "").trim();
    if (!id) {
      setStatus("Skriv inn en billett-ID.", "error");
      return;
    }

    // reset view
    const resultEl = document.getElementById("result");
    const placeholderEl = document.getElementById("placeholder");
    if (resultEl) resultEl.classList.add("hidden");
    if (placeholderEl) placeholderEl.classList.remove("hidden");

    try {
      const ticket = await fetchTicketByRefId(id);
      setStatus("");
      renderTicket(ticket);
    } catch (err) {
      const code = err && err.code ? err.code : 0;
      if (code === 404 || err?.message === "NOT_FOUND") {
        setStatus("Fant ikke billett med denne ID-en.", "error");
      } else if (code === 400 || err?.message === "EMPTY_ID") {
        setStatus("Ugyldig billett-ID.", "error");
      } else {
        setStatus("Kunne ikke hente billetten akkurat nå.", "error");
      }
      const ph = document.getElementById("placeholder");
      if (ph) ph.classList.add("hidden");
    }
  };

  // Normal form submit
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void handleSubmit(event);
    });
  }

  // Optional explicit submit button outside form
  if (submitBtn) {
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      void handleSubmit(event);
    });
  }

  // Support links like /billett/?ticketId=D91DE9E1
  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = (params.get("ticketId") || params.get("ref") || "").trim();

    if (fromQuery) {
      input.value = fromQuery;
      void handleSubmit(); // auto-fetch

      // Clean URL so ID isn't left in the address bar
      const url = new URL(window.location.href);
      url.searchParams.delete("ticketId");
      url.searchParams.delete("ref");
      window.history.replaceState({}, "", url.toString());
    }
  } catch {
    // ignore URLSearchParams issues
  }

  // Wire dialogs (QR + overføring)
  initTicketDialogs(setStatus);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTicketPage, { once: true });
} else {
  initTicketPage();
}
