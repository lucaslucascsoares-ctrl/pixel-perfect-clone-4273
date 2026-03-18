import { useNavigate } from "react-router-dom";

interface DashboardHeaderProps {
  onMenuOpen: () => void;
}

const DashboardHeader = ({ onMenuOpen }: DashboardHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header
      className="bg-background"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px 10px",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <button
        type="button"
        onClick={() => navigate(-1)}
        aria-label="Voltar"
        className="bg-background text-muted-foreground"
        style={{
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        ←
      </button>

      <h1
        className="text-foreground"
        style={{ margin: 0, fontSize: "16px", fontWeight: 700 }}
      >
        Abril
      </h1>

      <button
        type="button"
        onClick={onMenuOpen}
        aria-label="Abrir menu"
        className="bg-background text-primary"
        style={{
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        ≡
      </button>
    </header>
  );
};

export default DashboardHeader;
