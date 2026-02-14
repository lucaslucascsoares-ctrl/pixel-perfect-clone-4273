import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import ElefinLogo from "@/components/ElefinLogo";
import MobileLayout from "@/components/MobileLayout";
import pessoaFisicaImg from "@/assets/pessoa-fisica.png";
import pessoaJuridicaImg from "@/assets/pessoa-juridica.png";

type UserType = "pf" | "pj" | null;

const Onboarding = () => {
  const [selected, setSelected] = useState<UserType>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selected) navigate("/dashboard");
  };

  return (
    <MobileLayout>
      <div className="flex flex-col items-center px-6 pt-8 pb-6 flex-1">
        <ElefinLogo />

        <div className="mt-6 text-center">
          <p className="text-2xl">👋</p>
          <h1 className="text-lg font-bold text-foreground mt-1">Bem-vindo ao Elefin</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Para personalizar sua experiência, nos diga:
          </p>
        </div>

        <div className="mt-5 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="font-bold text-foreground">Você é:</span>
        </div>

        <div className="mt-4 w-full space-y-3 flex-1">
          <OptionCard
            selected={selected === "pf"}
            onClick={() => setSelected("pf")}
            image={pessoaFisicaImg}
            title="Pessoa Física"
            description="Para uso pessoal, familiar ou autônomo."
          />
          <OptionCard
            selected={selected === "pj"}
            onClick={() => setSelected("pj")}
            image={pessoaJuridicaImg}
            title="Pessoa Jurídica"
            description="Para empresas, comércios ou prestadores de serviço"
          />
        </div>

        <button
          onClick={handleContinue}
          disabled={!selected}
          className="mt-6 w-full py-3.5 rounded-xl font-bold text-primary-foreground bg-primary disabled:opacity-40 transition-all hover:opacity-90"
        >
          Continuar
        </button>
      </div>
    </MobileLayout>
  );
};

const OptionCard = ({
  selected, onClick, image, title, description,
}: {
  selected: boolean; onClick: () => void; image: string; title: string; description: string;
}) => (
  <button
    onClick={onClick}
    className={`relative w-full rounded-xl border-2 p-4 text-left transition-all ${
      selected ? "border-primary bg-accent" : "border-border bg-card hover:border-primary/40"
    }`}
  >
    {selected && (
      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <Check className="w-4 h-4 text-primary-foreground" />
      </div>
    )}
    <div className="flex items-center gap-4">
      <img src={image} alt={title} className="w-20 h-20 object-contain rounded-lg" />
      <div className="flex-1">
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground" />
    </div>
  </button>
);

export default Onboarding;
