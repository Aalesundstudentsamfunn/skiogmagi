import { fetchTicketByRefId } from "./api";
import { setStatus, renderTicket, initTicketDialogs } from "./ui";

function initTicketPage() {
  const form = document.getElementById("ticket-form") as HTMLFormElement | null;
  const input = document.getElementById("ticketId") as HTMLInputElement | null;
  const submitBtn = document.getElementById("ticket-submit"); 

  if (!input) return;

  const handleSubmit = async (event?: Event) => {
    event?.preventDefault();

    const id = input.value.trim();
    if (!id) {
      setStatus("Skriv inn en billett-ID.", "error");
      return;
    }

    document.getElementById("result")?.classList.add("hidden");
    document.getElementById("placeholder")?.classList.remove("hidden");

    try {
      const ticket = await fetchTicketByRefId(id);
      setStatus("");
      renderTicket(ticket);
    } catch (err: any) {
      const code = err?.code || 0;
      if (code === 404 || err?.message === "NOT_FOUND") {
        setStatus("Fant ikke billett med denne ID-en.", "error");
      } else {
        setStatus("Kunne ikke hente billetten akkurat nå.", "error");
      }
      document.getElementById("placeholder")?.classList.add("hidden");
    }
  };

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    void handleSubmit(event);
  });

  submitBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    void handleSubmit(event);
  });

  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery =
      (params.get("ticketId") || params.get("ref") || "").trim();

    if (fromQuery) {
      input.value = fromQuery;
      void handleSubmit();

      const url = new URL(window.location.href);
      url.searchParams.delete("ticketId");
      url.searchParams.delete("ref");
      window.history.replaceState({}, "", url.toString());
    }
  } catch {}

  initTicketDialogs(setStatus);
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTicketPage, { once: true });
  } else {
    initTicketPage();
  }
}