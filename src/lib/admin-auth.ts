export function getAdminIds(): string[] {
  return (process.env.NEXT_PUBLIC_ADMIN_ID ?? "")
    .split(",")
    .map((id) => id.trim().toLowerCase())
    .filter(Boolean);
}

export function validateAdminLogin(id: string, password: string): boolean {
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "";
  if (!adminPassword) return false;
  return getAdminIds().includes(id.trim().toLowerCase()) && password === adminPassword;
}
