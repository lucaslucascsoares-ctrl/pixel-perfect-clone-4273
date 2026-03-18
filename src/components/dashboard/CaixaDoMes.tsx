import { useNavigate } from "react-router-dom";

const CaixaDoMes = () => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-background"
      style={{
        border: "1px solid hsl(var(--border))",
        borderRadius: "12px",
        padding: "12px 14px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span className="text-foreground" style={{ fontSize: "10px", fontWeight: 600 }}>
          Caixa do mês
        </span>
        <button
          type="button"
          className="bg-background text-primary"
          style={{ border: "none", fontSize: "9px", cursor: "pointer", padding: 0 }}
        >
          Ver contas ›
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        <Row label="Caixa inicial" value="R$ 3.200,00" />
        <Row
          label="Entradas"
          value="R$ 4.500,00"
          onCheck={() => navigate("/detalhamento-entradas")}
        />
        <Row
          label="Saídas"
          value="- R$ 4.200,00"
          onCheck={() => navigate("/detalhamento-saidas")}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "10px",
            borderTop: "1px solid hsl(var(--border))",
            paddingTop: "8px",
          }}
        >
          <span className="text-foreground" style={{ fontWeight: 700 }}>
            Saldo atual
          </span>
          <span className="text-success" style={{ fontWeight: 700 }}>
            R$ 3.500,00
          </span>
        </div>
      </div>
    </section>
  );
};

interface RowProps {
  label: string;
  value: string;
  onCheck?: () => void;
}

const Row = ({ label, value, onCheck }: RowProps) => (
  <div
    className="text-muted-foreground"
    style={{ display: "flex", justifyContent: "space-between", fontSize: "10px" }}
  >
    <span>{label}</span>
    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <span>{value}</span>
      {onCheck && (
        <button
          type="button"
          onClick={onCheck}
          aria-label={`Ver detalhamento de ${label.toLowerCase()}`}
          className="bg-background text-primary"
          style={{
            border: "none",
            fontSize: "11px",
            cursor: "pointer",
            padding: 0,
            lineHeight: 1,
          }}
        >
          ✓
        </button>
      )}
    </span>
  </div>
);

export default CaixaDoMes;
