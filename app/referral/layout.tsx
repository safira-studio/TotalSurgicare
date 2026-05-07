export default function ReferralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F1EC] text-[#0B1220]">
      <main className="mx-auto w-full max-w-lg px-4 py-10">{children}</main>
    </div>
  );
}
