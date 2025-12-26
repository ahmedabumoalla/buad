export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <h1 className="text-xl font-bold tracking-wide">
          Theatre<span className="gold-text">AI</span>
        </h1>
        <p className="text-xs text-[var(--theatre-muted)]">
          منصة ذكاء اصطناعي لدعم صناعة المسرح
        </p>
      </div>
      <span className="text-xs opacity-60">MVP – Masrahthon</span>
    </header>
  );
}
