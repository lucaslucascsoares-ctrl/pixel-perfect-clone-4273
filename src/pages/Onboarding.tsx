import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Store } from "lucide-react";
import OnboardingProgress from "@/components/OnboardingProgress";

type ProfileType = "cpf" | "cnpj";

const Onboarding = () => {
  const [selected, setSelected] = useState<ProfileType>("cpf");
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#f0f6fb" }}
    >
      <div className="flex flex-col items-center w-full max-w-[380px] px-6">
        {/* Progress Bar */}
        <div className="w-full mb-8">
          <OnboardingProgress currentStep={1} totalSteps={2} />
        </div>
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-10">
          <span className="text-3xl">🐘</span>
          <span
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: "#1a2e4a" }}
          >
            Elefin
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-xl font-bold text-center mb-8"
          style={{ color: "#1a2e4a" }}
        >
          Você é CPF ou CNPJ?
        </h1>

        {/* Selection Cards */}
        <div className="flex gap-4 w-full justify-center mb-12">
          <button
            onClick={() => setSelected("cpf")}
            className="flex flex-col items-center justify-center gap-3 w-36 h-36 rounded-2xl border-2 transition-all"
            style={{
              backgroundColor: selected === "cpf" ? "#e8f4fd" : "#ffffff",
              borderColor: selected === "cpf" ? "#5ba8d4" : "#dce3ea",
            }}
          >
            <Users
              size={36}
              style={{
                color: selected === "cpf" ? "#5ba8d4" : "#9caab8",
              }}
            />
            <span
              className="text-base font-bold"
              style={{
                color: selected === "cpf" ? "#1a2e4a" : "#7a8a9a",
              }}
            >
              CPF
            </span>
          </button>

          <button
            onClick={() => setSelected("cnpj")}
            className="flex flex-col items-center justify-center gap-3 w-36 h-36 rounded-2xl border-2 transition-all"
            style={{
              backgroundColor: selected === "cnpj" ? "#e8f4fd" : "#ffffff",
              borderColor: selected === "cnpj" ? "#5ba8d4" : "#dce3ea",
            }}
          >
            <Store
              size={36}
              style={{
                color: selected === "cnpj" ? "#5ba8d4" : "#9caab8",
              }}
            />
            <span
              className="text-base font-bold"
              style={{
                color: selected === "cnpj" ? "#1a2e4a" : "#7a8a9a",
              }}
            >
              CNPJ
            </span>
          </button>
        </div>

        {/* Continue Button */}
        <button
          onClick={() => {
            if (selected === "cpf") {
              navigate("/onboarding/organizar");
            }
          }}
          className="w-full py-3 rounded-xl text-white font-bold text-base mb-8 transition-all"
          style={{ backgroundColor: "#5ba8d4" }}
        >
          Continuar
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#c8d6e0" }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#5ba8d4" }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#c8d6e0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
