"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ADMIN_ID = process.env.NEXT_PUBLIC_ADMIN_ID ?? "";
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "";

export default function AdminLoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("berico_admin_auth") === "1") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (id.trim() === ADMIN_ID && password === ADMIN_PASSWORD) {
        sessionStorage.setItem("berico_admin_auth", "1");
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
        setLoading(false);
      }
    }, 600);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F4EF] px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-lg border border-[#E5E5E5] p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="BERICO Research LLP"
              width={160}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>

          <h1 className="text-xl font-semibold text-center text-[#000] mb-1">Admin Panel</h1>
          <p className="text-sm text-center text-[#555] mb-6">Sign in to view leads & enquiries</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#000] mb-1.5">Email / ID</label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="admin@example.com"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-[#F9F9F9] text-sm text-[#000] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#000] mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-[#F9F9F9] text-sm text-[#000] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#888] mt-6">
          BERICO Research LLP · Private Admin Access
        </p>
      </div>
    </div>
  );
}
