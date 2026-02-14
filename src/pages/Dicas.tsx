import ElefinLogo from "@/components/ElefinLogo";
import MobileLayout from "@/components/MobileLayout";

const Dicas = () => {
  return (
    <MobileLayout>
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 px-5 pt-5 pb-3">
          <ElefinLogo />
          <span className="text-base font-bold text-foreground">Dicas & Especialista</span>
        </div>

        <div className="px-5 flex-1 space-y-5">
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
            <button className="mt-2 w-full py-3 rounded-xl font-bold text-primary-foreground bg-foreground hover:opacity-90 transition-all">
              Falar com um Especialista
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Dicas;
