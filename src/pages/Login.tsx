import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", senha: "" });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <div className="flex flex-col items-center pt-16 pb-8">
        <div className="flex items-center gap-2.5">
          <span className="text-4xl">🐘</span>
          <span className="text-3xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
            Elefin
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1 px-6 pb-6">
        <h1 className="text-2xl font-bold mb-8 text-[hsl(var(--foreground))]">
          Entrar na sua conta
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-xl border-2 border-[hsl(var(--border))] bg-white text-base text-[hsl(var(--foreground))] outline-none transition-colors focus:border-[hsl(var(--primary))]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-muted-foreground">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.senha}
                onChange={(e) => handleChange("senha", e.target.value)}
                placeholder="Sua senha"
                className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-[hsl(var(--border))] bg-white text-base text-[hsl(var(--foreground))] outline-none transition-colors focus:border-[hsl(var(--primary))]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex flex-col items-center gap-4">
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-base font-bold bg-primary text-primary-foreground transition-opacity hover:opacity-90"
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => navigate("/onboarding/cpf")}
            className="text-sm text-muted-foreground"
          >
            Não tem conta?{" "}
            <span className="font-semibold text-primary">Criar conta</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
