const ElefinLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="hsl(var(--elefin-light-blue))" />
      <path d="M10 20C10 15.5 13 12 18 12C23 12 26 15.5 26 20C26 22 25 23 24 23.5" stroke="hsl(var(--elefin-blue))" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="17" r="1.5" fill="hsl(var(--elefin-blue))" />
      <path d="M10 20C9 22 8 24 8 25" stroke="hsl(var(--elefin-blue))" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 22C16 23 20 23 21 22" stroke="hsl(var(--elefin-blue))" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
    <span className="text-xl font-extrabold text-foreground">Elefin</span>
  </div>
);

export default ElefinLogo;
