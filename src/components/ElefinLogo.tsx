const ElefinLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div
      className="flex items-center justify-center rounded-2xl"
      style={{
        width: 52,
        height: 52,
        background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
        boxShadow: "0 4px 14px rgba(124, 58, 237, 0.35)",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Elephant icon */}
        <path
          d="M48 20c-2-6-8-10-16-10s-14 4-16 10c-4 2-8 8-8 14 0 8 4 14 10 16l2-4c-4-2-6-6-6-12 0-8 8-16 18-16s18 8 18 16c0 6-2 10-6 12l2 4c6-2 10-8 10-16 0-6-4-12-8-14z"
          fill="white"
        />
        <circle cx="24" cy="30" r="3" fill="white" />
        <path
          d="M20 40c0 4 4 8 12 8s12-4 12-8"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 32c-2 2-4 6-4 10 0 2 1 4 3 4s3-2 3-6"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
    <span
      className="font-extrabold text-2xl tracking-tight"
      style={{ color: "#1E2A5E" }}
    >
      Elefin
    </span>
  </div>
);

export default ElefinLogo;
