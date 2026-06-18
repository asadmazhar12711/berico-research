"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import { validateAdminLogin } from "@/lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("BeriCo_admin_auth") === "1") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (validateAdminLogin(id, password)) {
        sessionStorage.setItem("BeriCo_admin_auth", "1");
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
        setLoading(false);
      }
    }, 400);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[var(--background)] px-4 py-12">
      <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <div className="border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 shadow-sm">
          <div className="mb-8 flex flex-col items-center gap-2">
            <Image
              src="/logo.png"
              alt="BeriCo Research LLP"
              width={280}
              height={100}
              className="h-20 w-auto object-contain sm:h-24"
              priority
            />
            <span className="font-body text-[10px] tracking-[0.18em] uppercase text-[var(--text-secondary)]">
              Building Wealth for Generations
            </span>
          </div>

          <h1 className="font-heading text-2xl font-semibold text-center text-[var(--text-primary)] mb-1">
            Admin Panel
          </h1>
          <p className="font-body text-sm text-center text-[var(--text-secondary)] mb-8">
            Sign in to view leads and enquiries
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="admin-id"
                className="font-body mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)]"
              >
                Email / ID
              </label>
              <input
                id="admin-id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="you@berico.co.in"
                required
                autoComplete="username"
                className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-body text-sm text-[var(--text-primary)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
              />
            </div>
            <div>
              <label
                htmlFor="admin-password"
                className="font-body mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)]"
              >
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-body text-sm text-[var(--text-primary)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="border border-red-500/30 bg-red-500/10 px-3 py-2 font-body text-sm text-red-500"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--accent)] py-3 font-body text-sm font-medium tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center font-body text-xs text-[var(--text-secondary)]">
          BeriCo Research LLP · Private Admin Access
        </p>
      </div>
    </div>
  );
}
