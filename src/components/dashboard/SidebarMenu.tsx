const menuItems = [
  "Configurações",
  "Painel do Mês",
  "Nova Movimentação",
  "Régua de Gastos",
  "Planejamento",
  "Ajuda",
];

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMenu = ({ isOpen, onClose }: SidebarMenuProps) => (
  <>
    {isOpen && (
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(15, 23, 42, 0.25)",
          zIndex: 40,
        }}
        onClick={onClose}
        aria-hidden="true"
      />
    )}

    <div
      className="bg-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "78%",
        maxWidth: "300px",
        height: "100%",
        zIndex: 50,
        transform: isOpen ? "translateX(0)" : "translateX(-104%)",
        transition: "transform 0.28s ease",
        boxShadow: "2px 0 14px rgba(15, 23, 42, 0.12)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "12px 14px 6px" }}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar menu"
          className="bg-background text-foreground"
          style={{
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      </div>

      <nav style={{ display: "flex", flexDirection: "column" }}>
        {menuItems.map((item) => (
          <button
            key={item}
            type="button"
            className="bg-background text-foreground"
            style={{
              width: "100%",
              textAlign: "left",
              border: "none",
              borderBottom: "1px solid hsl(var(--border))",
              padding: "12px 16px",
              fontSize: "13px",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  </>
);

export default SidebarMenu;
