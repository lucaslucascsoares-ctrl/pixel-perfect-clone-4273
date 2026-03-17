import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import OnboardingProgress from "@/components/OnboardingProgress";

const CadastroPessoal = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    usuario: "",
    telefone: "",
    email: "",
    senha: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <div className="px-6 pt-4">
        <OnboardingProgress currentStep={3} totalSteps={3} />
      </div>

      <div className="pt-4 px-6">
        <button
          onClick={() => navigate("/onboarding/organizar")}
          className="flex items-center justify-center w-10 h-10 rounded-full text-[hsl(var(--foreground))]"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-2.5 mt-4 justify-center">
          <span className="text-3xl">🐘</span>
          <span className="text-2xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
            Elefin
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1 px-6 pt-8 pb-6">
        <h1 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
          Crie sua conta
        </h1>

        <div className="flex flex-col gap-4">
          {[
            { label: "Nome completo", field: "nome", type: "text", placeholder: "Seu nome completo" },
            { label: "Usuário", field: "usuario", type: "text", placeholder: "Escolha um usuário" },
            { label: "Tel / Whats", field: "telefone", type: "tel", placeholder: "(00) 00000-0000" },
            { label: "Email / Login", field: "email", type: "email", placeholder: "seu@email.com" },
          ].map(({ label, field, type, placeholder }) => (
            <div key={field} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "#9caab8" }}>
                {label}
              </label>
              <input
                type={type}
                value={form[field as keyof typeof form]}
                onChange={(e) => handleChange(field, e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors focus:border-[hsl(var(--primary))]"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#dce3ea",
                  color: "#1a2e4a",
                }}
              />
            </div>
          ))}

          {/* Senha */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "#9caab8" }}>
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.senha}
                onChange={(e) => handleChange("senha", e.target.value)}
                placeholder="Crie uma senha"
                className="w-full px-4 py-3 pr-12 rounded-xl border-2 text-base outline-none transition-colors focus:border-[hsl(var(--primary))]"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#dce3ea",
                  color: "#1a2e4a",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                style={{ color: "#9caab8" }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex flex-col items-center gap-4">
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-base font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#5ba8d4" }}
          >
            Criar conta
          </button>
          <button
            type="button"
            onClick={() => {/* login futuro */}}
            className="text-sm"
            style={{ color: "#9caab8" }}
          >
            Já tenho conta? <span className="font-semibold" style={{ color: "#5ba8d4" }}>Fazer login</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroPessoal;
