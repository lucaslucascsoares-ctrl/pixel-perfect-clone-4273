import elefinLogo from "@/assets/elefin-logo.png";

const ElefinLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <img src={elefinLogo} alt="Elefin" style={{ height: '65px' }} className="object-contain" />
  </div>
);

export default ElefinLogo;
