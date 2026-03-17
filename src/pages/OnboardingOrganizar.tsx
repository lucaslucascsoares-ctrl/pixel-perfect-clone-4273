import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Users } from "lucide-react";
import OnboardingProgress from "@/components/OnboardingProgress";

const OnboardingOrganizar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f0f6fb" }}
    >
      <div className="px-6 pt-4">
        <OnboardingProgress currentStep={2} totalSteps={2} />
      </div>
      {/* Header with back button */}
      <div className="pt-4 px-6">
        <button
          onClick={() => navigate("/onboarding/cpf")}
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ color: "#3a4a5c" }}
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-2.5 mt-4 justify-center">
          <span className="text-3xl">🐘</span>
          <span
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: "#1a2e4a" }}
          >
            Elefin
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col px-6 pt-8">
        <h1
          className="text-2xl font-bold mb-8"
          style={{ color: "#1a2e4a" }}
        >
          O que você quer organizar?
        </h1>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {/* Card Pessoal */}
          <button
            className="flex items-center gap-4 w-full p-5 rounded-2xl border-2 text-left transition-all hover:border-[#5ba8d4]"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#dce3ea",
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{ backgroundColor: "#e8f4fd" }}
            >
              <User size={24} style={{ color: "#5ba8d4" }} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm" style={{ color: "#9caab8" }}>
                Vida financeira
              </span>
              <span className="text-lg font-bold" style={{ color: "#1a2e4a" }}>
                pessoal
              </span>
            </div>
          </button>

          {/* Card Familiar */}
          <button
            className="flex items-center gap-4 w-full p-5 rounded-2xl border-2 text-left transition-all hover:border-[#5ba8d4]"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#dce3ea",
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{ backgroundColor: "#e8f4fd" }}
            >
              <Users size={24} style={{ color: "#5ba8d4" }} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm" style={{ color: "#9caab8" }}>
                Vida financeira
              </span>
              <span className="text-lg font-bold" style={{ color: "#1a2e4a" }}>
                familiar
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingOrganizar;
