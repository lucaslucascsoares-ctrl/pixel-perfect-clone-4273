import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const inputStyle = {
  backgroundColor: "#ffffff",
  borderColor: "#dce3ea",
  color: "#1a2e4a",
};

const CadastroFamiliar = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [segundoAcesso, setSegundoAcesso] = useState(false);
  const [form, setForm] = useState({
    nomeFamilia: "",
    usuario: "",
    telefone: "",
    email: "",
    senha: "",
    nomeSegundo: "",
    emailSegundo: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f0f6fb" }}>
      {/* Progress bar */}
      <div className="px-6 pt-4">
        <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#dce3ea" }}>
          <div className="h-2 rounded-full w-full" style={{ backgroundColor: "#5ba8d4" }} />
        </div>
      </div>

      {/* Header */}
      <div className="pt-4 px-6">
        <button
          onClick={() => navigate("/onboarding/organizar")}
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ color: "#3a4a5c" }}
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-2.5 mt-4 justify-center">
          <span className="text-3xl">🐘</span>
          <span className="text-2xl font-extrabold tracking-tight" style={{ color: "#1a2e4a" }}>
            Elefin
          </span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col flex-1 px-6 pt-8 pb-6">
        <h1 className="text-2xl font-bold mb-6" style={{ color: "#1a2e4a" }}>
          Crie sua conta
        </h1>

        <div className="flex flex-col gap-4">
          {/* Nome da Família */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "#9caab8" }}>
              Nome da Família
            </label>
            <input
              type="text"
              value={form.nomeFamilia}
              onChange={(e) => handleChange("nomeFamilia", e.target.value)}
              placeholder="Ex: Família Silva"
              className="bg-white w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors focus:border-[#5ba8d4]"
              style={inputStyle}
            />
          </div>

          {/* Usuário */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "#9caab8" }}>
              Usuário
            </label>
            <input
              type="text"
              value={form.usuario}
              onChange={(e) => handleChange("usuario", e.target.value)}
              placeholder="Escolha um usuário"
              className="bg-white w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors focus:border-[#5ba8d4]"
              style={inputStyle}
            />
          </div>

          {/* Tel / Whats */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "#9caab8" }}>
              Tel / Whats
            </label>
            <input
              type="tel"
              value={form.telefone}
              onChange={(e) => handleChange("telefone", e.target.value)}
              placeholder="(00) 00000-0000"
              className="bg-white w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors focus:border-[#5ba8d4]"
              style={inputStyle}
            />
          </div>

          {/* Email / Login */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "#9caab8" }}>
              Email / Login
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="seu@email.com"
              className="bg-white w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors focus:border-[#5ba8d4]"
              style={inputStyle}
            />
          </div>

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
                className="bg-white w-full px-4 py-3 pr-12 rounded-xl border-2 text-base outline-none transition-colors focus:border-[#5ba8d4]"
                style={inputStyle}
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

        {/* Divider */}
        <div className="my-6 border-t" style={{ borderColor: "#dce3ea" }} />

        {/* Toggle row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-semibold" style={{ color: "#1a2e4a" }}>
              Adicionar 2° Acesso?
            </span>
            <span className="text-xs" style={{ color: "#9caab8" }}>
              Convidar outro membro à conta
            </span>
          </div>
          <button
            type="button"
            onClick={() => setSegundoAcesso((prev) => !prev)}
            className="relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200"
            style={{ backgroundColor: segundoAcesso ? "#5ba8d4" : "#dce3ea" }}
            aria-pressed={segundoAcesso}
          >
            <span
              className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200"
              style={{ transform: segundoAcesso ? "translateX(24px)" : "translateX(0)" }}
            />
          </button>
        </div>

        {/* Second access expanded box */}
        {segundoAcesso && (
          <div
            className="mt-4 p-4 rounded-xl border flex flex-col gap-4"
            style={{ backgroundColor: "#f0f6fb", borderColor: "#dce3ea" }}
          >
            <span className="text-sm font-semibold" style={{ color: "#1a2e4a" }}>
              Dados do 2° membro
            </span>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "#9caab8" }}>
                Nome completo
              </label>
              <input
                type="text"
                value={form.nomeSegundo}
                onChange={(e) => handleChange("nomeSegundo", e.target.value)}
                placeholder="Nome do 2° membro"
                className="bg-white w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors focus:border-[#5ba8d4]"
                style={inputStyle}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "#9caab8" }}>
                Email
              </label>
              <input
                type="email"
                value={form.emailSegundo}
                onChange={(e) => handleChange("emailSegundo", e.target.value)}
                placeholder="email@exemplo.com"
                className="bg-white w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors focus:border-[#5ba8d4]"
                style={inputStyle}
              />
            </div>
          </div>
        )}

        {/* Actions */}
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
            className="text-sm"
            style={{ color: "#9caab8" }}
          >
            Já tenho conta?{" "}
            <span className="font-semibold" style={{ color: "#5ba8d4" }}>
              Fazer login
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroFamiliar;
