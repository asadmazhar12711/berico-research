"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function getLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("BeriCo_leads");
    return raw ? (JSON.parse(raw) as Lead[]) : [];
  } catch {
    return [];
  }
}

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selected, setSelected] = useState<Lead | null>(null);
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  const load = useCallback(() => {
    const all = getLeads().sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    setLeads(all);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("BeriCo_admin_auth") !== "1") {
        router.replace("/admin");
        return;
      }
      setMounted(true);
      load();
    }
  }, [router, load]);

  function logout() {
    sessionStorage.removeItem("BeriCo_admin_auth");
    router.push("/admin");
  }

  function deleteLead(id: string) {
    const updated = leads.filter((l) => l.id !== id);
    localStorage.setItem("BeriCo_leads", JSON.stringify(updated));
    setLeads(updated);
    if (selected?.id === id) setSelected(null);
  }

  function clearAll() {
    if (confirm("Delete all leads? This cannot be undone.")) {
      localStorage.removeItem("BeriCo_leads");
      setLeads([]);
      setSelected(null);
    }
  }

  const filtered = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.subject?.toLowerCase().includes(search.toLowerCase())
  );

  const today = new Date().toDateString();
  const todayCount = leads.filter((l) => new Date(l.timestamp).toDateString() === today).length;

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="site-header sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="container-content flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-center gap-4">
            <Image
              src="/logo.png"
              alt="BeriCo Research LLP"
              width={200}
              height={72}
              className="h-12 w-auto shrink-0 object-contain sm:h-14"
            />
            <span className="hidden border-l border-[var(--border)] pl-4 font-body text-sm font-medium text-[var(--text-secondary)] sm:block">
              Admin Dashboard
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={logout}
              className="flex items-center gap-1.5 font-body text-sm font-medium text-[var(--text-secondary)] transition hover:text-red-500"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container-content space-y-6 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">
              Total Leads
            </p>
            <p className="font-heading text-3xl font-semibold text-[var(--accent)]">{leads.length}</p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">
              Today
            </p>
            <p className="font-heading text-3xl font-semibold text-[var(--accent)]">{todayCount}</p>
          </div>
          <div className="col-span-2 border border-[var(--border)] bg-[var(--surface)] p-5 sm:col-span-1">
            <p className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">
              Latest
            </p>
            <p className="truncate font-body text-sm font-semibold text-[var(--text-primary)]">
              {leads[0]?.name ?? "—"}
            </p>
            {leads[0] && (
              <p className="mt-0.5 font-body text-xs text-[var(--text-secondary)]">
                {formatDate(leads[0].timestamp)}
              </p>
            )}
          </div>
        </div>

        <div className="overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
          <div className="flex flex-col gap-3 border-b border-[var(--border)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
              Contact Enquiries
            </h2>
            <div className="flex w-full items-center gap-3 sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <svg
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name, email, subject…"
                  className="w-full border border-[var(--border)] bg-[var(--background)] py-2 pl-9 pr-4 font-body text-sm text-[var(--text-primary)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 sm:w-64"
                />
              </div>
              <button
                onClick={load}
                className="border border-[var(--border)] p-2 transition hover:bg-[var(--background)]"
                title="Refresh"
              >
                <svg className="h-4 w-4 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              {leads.length > 0 && (
                <button
                  onClick={clearAll}
                  className="whitespace-nowrap font-body text-xs font-medium text-red-500 transition hover:text-red-400"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
              <svg className="mb-4 h-12 w-12 text-[var(--border)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4m8-9v9" />
              </svg>
              <p className="font-body font-medium text-[var(--text-secondary)]">
                {search ? "No results found" : "No leads yet"}
              </p>
              <p className="mt-1 font-body text-sm text-[var(--text-secondary)]">
                {search ? "Try a different search term" : "Contact form submissions will appear here"}
              </p>
            </div>
          ) : (
            <div className="flex h-full flex-col lg:flex-row">
              <div
                className={`${selected ? "hidden lg:flex" : "flex"} max-h-[520px] flex-col divide-y divide-[var(--border)] overflow-y-auto lg:w-2/5 lg:border-r lg:border-[var(--border)]`}
              >
                {filtered.map((lead) => (
                  <button
                    key={lead.id}
                    onClick={() => setSelected(lead)}
                    className={`px-5 py-4 text-left transition-colors hover:bg-[var(--background)] ${
                      selected?.id === lead.id
                        ? "border-l-2 border-[var(--accent)] bg-[var(--background)]"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-body text-sm font-semibold text-[var(--text-primary)]">
                          {lead.name}
                        </p>
                        <p className="truncate font-body text-xs text-[var(--text-secondary)]">
                          {lead.email}
                        </p>
                        {lead.subject && (
                          <p className="mt-1 truncate font-body text-xs text-[var(--text-secondary)]">
                            {lead.subject}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 pt-0.5 font-body text-[10px] whitespace-nowrap text-[var(--text-secondary)]">
                        {formatDate(lead.timestamp).split(",")[0]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {selected ? (
                <div className="max-h-[520px] flex-1 overflow-y-auto p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                      {selected.name}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelected(null)}
                        className="font-body text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] lg:hidden"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => deleteLead(selected.id)}
                        className="font-body text-sm font-medium text-red-500 transition hover:text-red-400"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <dl className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="col-span-1 font-body text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                        Email
                      </dt>
                      <dd className="col-span-2 font-body text-sm text-[var(--text-primary)]">
                        <a href={`mailto:${selected.email}`} className="text-[var(--accent)] hover:underline">
                          {selected.email}
                        </a>
                      </dd>
                    </div>
                    {selected.phone && (
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="col-span-1 font-body text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                          Phone
                        </dt>
                        <dd className="col-span-2 font-body text-sm text-[var(--text-primary)]">
                          <a href={`tel:${selected.phone}`} className="text-[var(--accent)] hover:underline">
                            {selected.phone}
                          </a>
                        </dd>
                      </div>
                    )}
                    {selected.subject && (
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="col-span-1 font-body text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                          Subject
                        </dt>
                        <dd className="col-span-2 font-body text-sm text-[var(--text-primary)]">
                          {selected.subject}
                        </dd>
                      </div>
                    )}
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="col-span-1 font-body text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                        Received
                      </dt>
                      <dd className="col-span-2 font-body text-sm text-[var(--text-primary)]">
                        {formatDate(selected.timestamp)}
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-2 font-body text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                        Message
                      </dt>
                      <dd className="whitespace-pre-wrap border border-[var(--border)] bg-[var(--background)] p-4 font-body text-sm leading-relaxed text-[var(--text-primary)]">
                        {selected.message}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject || "Your Enquiry — BeriCo Research LLP")}`}
                      className="flex-1 bg-[var(--accent)] py-2 text-center font-body text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Reply via Email
                    </a>
                    {selected.phone && (
                      <a
                        href={`tel:${selected.phone}`}
                        className="border border-[var(--accent)] px-4 py-2 font-body text-sm font-medium text-[var(--accent)] transition hover:bg-[var(--background)]"
                      >
                        Call
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="hidden flex-1 items-center justify-center py-20 lg:flex">
                  <p className="font-body text-sm text-[var(--text-secondary)]">
                    Select a lead to view details
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-center font-body text-xs text-[var(--text-secondary)]">
          Leads are stored in this browser. They also arrive in your inbox via Web3Forms.
        </p>
      </main>
    </div>
  );
}
