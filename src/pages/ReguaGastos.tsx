import { useNavigate } from "react-router-dom";
import { AlertTriangle, Check } from "lucide-react";
import ElefinLogo from "@/components/ElefinLogo";
import MobileLayout from "@/components/MobileLayout";
import { BottomNav } from "@/pages/Dashboard";

const rules = [
  { label: "Essenciais", actual: 52, ideal: 50, ok: false },
  { label: "Desejos", actual: 28, ideal: 30, ok: true },
  { label: "Prioridades", actual: 20, ideal: 20, ok: true },
];

const ReguaGastos = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 px-5 pt-5 pb-3">
          <ElefinLogo />
          <h1 className="text-base font-bold text-foreground">Régua de Gastos</h1>
        </div>

        <div className="px-5 flex-1 space-y-3">
          <div className="border rounded-xl p-4 space-y-3">
            {rules.map((r) => (
              <div key={r.label} className="flex items-center justify-between text-sm">
                <span className="font-semibold text-foreground">
                  {r.label}: <strong>{r.actual}%</strong>
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  Ideal {r.ideal}%
                  {r.ok ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-warning" />
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-foreground">
              Você gastou mais com essenciais.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Que tal rever pequenos gastos? 👍
            </p>
          </div>
        </div>

        <BottomNav navigate={navigate} active="regua" />
      </div>
    </MobileLayout>
  );
};

export default ReguaGastos;
