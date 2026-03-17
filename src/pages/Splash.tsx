import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding/cpf"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#f0f6fb" }}
    >
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <span className="text-6xl">🐘</span>
        <span
          className="text-3xl font-extrabold tracking-tight"
          style={{ color: "#1a2e4a" }}
        >
          Elefin
        </span>
        <p
          className="text-base text-center max-w-[260px] mt-2"
          style={{ color: "#5ba8d4" }}
        >
          Bem-vindo ao Elefin, seu assistente financeiro
        </p>
      </div>
    </div>
  );
};

export default Splash;
