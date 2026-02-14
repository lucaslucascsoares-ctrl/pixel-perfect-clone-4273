import { useNavigate } from "react-router-dom";
import ElefinLogo from "@/components/ElefinLogo";
import MobileLayout from "@/components/MobileLayout";
import { BottomNav } from "@/pages/Dashboard";

const Dicas = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 px-5 pt-5 pb-3">
          <ElefinLogo />
          <h1 className="text-base font-bold text-foreground">Dicas & Especialista</h1>
        </div>

        <div className="px-5 flex-1 space-y-4">
          <div>
            <h2 className="text-sm font-bold text-foreground">Hoje você pode:</h2>
            <div className="mt-2 border rounded-xl p-4">
              <p className="text-sm text-foreground text-center">
                Cortar 1 delivery por semana pode liberar <strong>R$ 240 por mês</strong>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-foreground">Precisa de ajuda?</h2>
            <button className="mt-2 w-full py-3 rounded-xl font-bold bg-secondary text-secondary-foreground border hover:bg-muted transition-all">
              Falar com um Especialista
            </button>
          </div>
        </div>

        <BottomNav navigate={navigate} active="dicas" />
      </div>
    </MobileLayout>
  );
};

export default Dicas;
