import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Heart, Store } from "lucide-react";
import ElefinLogo from "@/components/ElefinLogo";
import MobileLayout from "@/components/MobileLayout";

type ProfileType = "familia" | "autonomo" | "negocio" | null;

const profiles = [
  { key: "familia" as const, icon: Home, label: "Família" },
  { key: "autonomo" as const, icon: Heart, label: "Autônomo" },
  { key: "negocio" as const, icon: Store, label: "Negócio" },
];

const Onboarding = () => {
  const [selected, setSelected] = useState<ProfileType>(null);
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col px-6 pt-10 pb-6 flex-1">
        <ElefinLogo className="mb-8" />

        <h1 className="text-lg font-bold text-foreground">Bem-vindo ao Elefin</h1>

        <p className="text-sm font-semibold text-foreground mt-6">Escolha o seu perfil:</p>

        <div className="mt-4 border rounded-xl p-5 flex justify-around">
          {profiles.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`flex flex-col items-center gap-2 transition-all ${
                selected === key ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all ${
                selected === key ? "border-foreground bg-muted" : "border-border"
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold">{label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <button
            onClick={() => selected && navigate("/dashboard")}
            disabled={!selected}
            className="w-full py-3.5 rounded-xl font-bold text-primary-foreground bg-foreground disabled:opacity-40 transition-all hover:opacity-90"
          >
            Começar
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Onboarding;
