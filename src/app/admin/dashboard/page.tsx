"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div className="min-h-screen bg-[#F5F4EF]">
      {/* Top bar */}
      <header className="bg-white border-b border-[#E5E5E5] px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="BeriCo Research LLP"
            width={120}
            height={42}
            className="h-10 w-auto object-contain"
          />
          <span className="hidden sm:block text-sm font-semibold text-[#555] border-l border-[#E5E5E5] pl-4">
            Admin Dashboard
          </span>
        </div>
        <button
          onClick={logout}
          className="text-sm text-[#555] hover:text-red-500 font-medium transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 shadow-sm">
            <p className="text-xs text-[#888] font-medium uppercase tracking-wider mb-1">Total Leads</p>
            <p className="text-3xl font-bold text-[#0EA5E9]">{leads.length}</p>
          </div>
          <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 shadow-sm">
            <p className="text-xs text-[#888] font-medium uppercase tracking-wider mb-1">Today</p>
            <p className="text-3xl font-bold text-[#0EA5E9]">{todayCount}</p>
          </div>
          <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 shadow-sm col-span-2 sm:col-span-1">
            <p className="text-xs text-[#888] font-medium uppercase tracking-wider mb-1">Latest</p>
            <p className="text-sm font-semibold text-[#000] truncate">
              {leads[0]?.name ?? "—"}
            </p>
            {leads[0] && (
              <p className="text-xs text-[#777] mt-0.5">{formatDate(leads[0].timestamp)}</p>
            )}
          </div>
        </div>

        {/* Leads panel */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm overflow-hidden">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-4 border-b border-[#E5E5E5]">
            <h2 className="text-base font-semibold text-[#000]">Contact Enquiries</h2>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name, email, subject…"
                  className="pl-9 pr-4 py-2 text-sm border border-[#E5E5E5] rounded-lg bg-[#F9F9F9] text-[#000] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] w-full sm:w-64 transition"
                />
              </div>
              <button onClick={load} className="p-2 rounded-lg border border-[#E5E5E5] hover:bg-[#F0F9FF] transition" title="Refresh">
                <svg className="w-4 h-4 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              {leads.length > 0 && (
                <button onClick={clearAll} className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors whitespace-nowrap">
                  Clear All
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4">
              <svg className="w-12 h-12 text-[#DDD] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4m8-9v9" />
              </svg>
              <p className="text-[#999] font-medium">
                {search ? "No results found" : "No leads yet"}
              </p>
              <p className="text-sm text-[#BBB] mt-1">
                {search ? "Try a different search term" : "Contact form submissions will appear here"}
              </p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row h-full">
              {/* Lead list */}
              <div className={`${selected ? "hidden lg:flex" : "flex"} flex-col divide-y divide-[#F0F0F0] lg:w-2/5 lg:border-r lg:border-[#E5E5E5] overflow-y-auto max-h-[520px]`}>
                {filtered.map((lead) => (
                  <button
                    key={lead.id}
                    onClick={() => setSelected(lead)}
                    className={`text-left px-5 py-4 hover:bg-[#F0F9FF] transition-colors ${selected?.id === lead.id ? "bg-[#EBF8FF] border-l-2 border-[#0EA5E9]" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#000] truncate">{lead.name}</p>
                        <p className="text-xs text-[#666] truncate">{lead.email}</p>
                        {lead.subject && (
                          <p className="text-xs text-[#999] mt-1 truncate">{lead.subject}</p>
                        )}
                      </div>
                      <span className="text-[10px] text-[#AAA] whitespace-nowrap shrink-0 pt-0.5">
                        {formatDate(lead.timestamp).split(",")[0]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detail pane */}
              {selected ? (
                <div className="flex-1 p-6 overflow-y-auto max-h-[520px]">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-[#000]">{selected.name}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelected(null)}
                        className="lg:hidden text-sm text-[#555] hover:text-[#000] font-medium"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => deleteLead(selected.id)}
                        className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <dl className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-xs font-semibold text-[#888] uppercase tracking-wider col-span-1">Email</dt>
                      <dd className="text-sm text-[#000] col-span-2">
                        <a href={`mailto:${selected.email}`} className="text-[#0EA5E9] hover:underline">
                          {selected.email}
                        </a>
                      </dd>
                    </div>
                    {selected.phone && (
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-xs font-semibold text-[#888] uppercase tracking-wider col-span-1">Phone</dt>
                        <dd className="text-sm text-[#000] col-span-2">
                          <a href={`tel:${selected.phone}`} className="text-[#0EA5E9] hover:underline">
                            {selected.phone}
                          </a>
                        </dd>
                      </div>
                    )}
                    {selected.subject && (
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-xs font-semibold text-[#888] uppercase tracking-wider col-span-1">Subject</dt>
                        <dd className="text-sm text-[#000] col-span-2">{selected.subject}</dd>
                      </div>
                    )}
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-xs font-semibold text-[#888] uppercase tracking-wider col-span-1">Received</dt>
                      <dd className="text-sm text-[#000] col-span-2">{formatDate(selected.timestamp)}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Message</dt>
                      <dd className="text-sm text-[#000] bg-[#F9F9F9] border border-[#E5E5E5] rounded-lg p-4 leading-relaxed whitespace-pre-wrap">
                        {selected.message}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject || "Your Enquiry — BeriCo Research LLP")}`}
                      className="flex-1 text-center py-2 rounded-lg bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm font-semibold transition-colors"
                    >
                      Reply via Email
                    </a>
                    {selected.phone && (
                      <a
                        href={`tel:${selected.phone}`}
                        className="px-4 py-2 rounded-lg border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#EBF8FF] text-sm font-semibold transition-colors"
                      >
                        Call
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="hidden lg:flex flex-1 items-center justify-center text-[#CCC] py-20">
                  <p className="text-sm">Select a lead to view details</p>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-[#AAA]">
          Leads are stored in this browser. They also arrive in your inbox via Web3Forms.
        </p>
      </main>
    </div>
  );
}
