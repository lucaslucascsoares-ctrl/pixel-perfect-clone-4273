import elefinLogo from "@/assets/elefin-logo.png";

const ElefinLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <img src={elefinLogo} alt="Elefin" className="h-14 object-contain" />
  </div>
);

export default ElefinLogo;
