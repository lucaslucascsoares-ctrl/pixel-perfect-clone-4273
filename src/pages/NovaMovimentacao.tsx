import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";

const NovaMovimentacao = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<"entrada" | "saida">("saida");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pagoPara, setPagoPara] = useState("");

  return (
    <MobileLayout>
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-5 pb-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-base font-bold text-foreground">Nova Movimentação</h1>
        </div>

        <div className="px-5 flex-1 space-y-5">
          {/* Toggle */}
          <div className="flex rounded-full border overflow-hidden">
            <button
              onClick={() => setTipo("entrada")}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                tipo === "entrada" ? "bg-foreground text-primary-foreground" : "bg-card text-muted-foreground"
              }`}
            >
              Entrada
            </button>
            <button
              onClick={() => setTipo("saida")}
              className={`flex-1 py-2.5 text-sm font-bold transition-colors ${
                tipo === "saida" ? "bg-foreground text-primary-foreground" : "bg-card text-muted-foreground"
              }`}
            >
              Saída
            </button>
          </div>

          {/* Fields */}
          <Field label="Valor" value={valor} onChange={setValor} placeholder="R$ 0,00" />
          
          <div className="flex items-center gap-3">
            <label className="text-sm font-semibold text-foreground w-24">Categoria</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="flex-1 rounded-lg border bg-card px-3 py-2.5 text-sm text-foreground"
            >
              <option value="">Selecionar</option>
              <option value="alimentacao">Alimentação</option>
              <option value="moradia">Moradia</option>
              <option value="transporte">Transporte</option>
              <option value="lazer">Lazer</option>
              <option value="saude">Saúde</option>
              <option value="educacao">Educação</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <Field label="Descrição" value={descricao} onChange={setDescricao} placeholder="Opcional" />
          <Field label="Pago para" value={pagoPara} onChange={setPagoPara} placeholder="Opcional" />

          <button className="w-full py-3.5 rounded-xl font-bold text-primary-foreground bg-foreground hover:opacity-90 transition-all">
            Salvar
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

const Field = ({ label, value, onChange, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string;
}) => (
  <div className="flex items-center gap-3">
    <label className="text-sm font-semibold text-foreground w-24">{label}</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="flex-1 rounded-lg border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
    />
  </div>
);

export default NovaMovimentacao;
