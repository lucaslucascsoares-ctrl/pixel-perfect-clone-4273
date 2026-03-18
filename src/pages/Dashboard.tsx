import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";

const yAxisLabels = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

const barData = [
  { label: "Necess. Essenciais", height: 74, color: "#1a2e4a", text: "62%" },
  { label: "Estilo de Vida", height: 2, color: "#5ba8d4", text: "2%" },
  { label: "Prioridades Financeiras", height: 17, color: "#9caab8", text: "14%" },
];

const menuItems = ["Configurações", "Painel do Mês", "Nova Movimentação", "Régua de Gastos", "Planejamento", "Ajuda"];

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const gridLines = useMemo(() => Array.from({ length: 10 }, (_, i) => (i / 10) * 120), []);

  return (
    <MobileLayout>
      <div style={{ backgroundColor: "#ffffff", position: "relative", minHeight: "100%" }}>
        {isMenuOpen && <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(15,23,42,0.25)", zIndex: 40 }} onClick={() => setIsMenuOpen(false)} />}
        <div style={{ position: "fixed", top: 0, left: 0, width: "78%", maxWidth: "300px", height: "100%", backgroundColor: "#ffffff", zIndex: 50, transform: isMenuOpen ? "translateX(0)" : "translateX(-104%)", transition: "transform 0.28s ease", boxShadow: "2px 0 14px rgba(15,23,42,0.12)", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "12px 14px" }}>
            <button onClick={() => setIsMenuOpen(false)} style={{ border: "none", background: "#fff", fontSize: "20px", cursor: "pointer", color: "#1a2e4a" }}>✕</button>
          </div>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {menuItems.map(item => (
              <button key={item} onClick={() => setIsMenuOpen(false)} style={{ textAlign: "left", border: "none", borderBottom: "1px solid #f1f5f9", background: "#fff", padding: "12px 16px", color: "#1a2e4a", fontSize: "13px", cursor: "pointer" }}>{item}</button>
            ))}
          </nav>
        </div>
        <div style={{ backgroundColor: "#ffffff", paddingBottom: "20px" }}>
          <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 10px", borderBottom: "1px solid #f1f5f9", backgroundColor: "#ffffff" }}>
            <button onClick={() => navigate(-1)} style={{ border: "none", background: "#fff", color: "#9caab8", fontSize: "20px", cursor: "pointer" }}>←</button>
            <h1 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#1a2e4a" }}>Abril</h1>
            <button onClick={() => setIsMenuOpen(true)} style={{ border: "none", background: "#fff", color: "#5ba8d4", fontSize: "20px", cursor: "pointer" }}>≡</button>
          </header>
          <main style={{ padding: "14px 12px 0", backgroundColor: "#ffffff" }}>
            <section style={{ border: "1px solid #e8f4fd", borderRadius: "12px", padding: "12px 14px", backgroundColor: "#ffffff" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "10px", fontWeight: 600, color: "#1a2e4a" }}>Caixa do mês</span>
                <button style={{ border: "none", background: "#fff", color: "#5ba8d4", fontSize: "9px", cursor: "pointer", padding: 0 }}>Ver contas ›</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#3a4a5c" }}><span>Caixa inicial</span><span>R$ 3.200,00</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#3a4a5c" }}><span>Entradas</span><span style={{ display: "flex", alignItems: "center", gap: "6px" }}><span>R$ 4.500,00</span><button onClick={() => navigate("/detalhamento-entradas")} style={{ border: "none", background: "#fff", color: "#5ba8d4", fontSize: "11px", cursor: "pointer", padding: 0 }}>✓</button></span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#3a4a5c" }}><span>Saídas</span><span style={{ display: "flex", alignItems: "center", gap: "6px" }}><span>- R$ 4.200,00</span><button onClick={() => navigate("/detalhamento-saidas")} style={{ border: "none", background: "#fff", color: "#5ba8d4", fontSize: "11px", cursor: "pointer", padding: 0 }}>✓</button></span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", borderTop: "1px solid #f1f5f9", paddingTop: "8px" }}><span style={{ fontWeight: 700, color: "#1a2e4a" }}>Saldo atual</span><span style={{ fontWeight: 700, color: "#22c55e" }}>R$ 3.500,00</span></div>
              </div>
            </section>
            <button onClick={() => navigate("/nova-movimentacao")} style={{ width: "100%", marginTop: "12px", border: "none", borderRadius: "12px", backgroundColor: "#1a2e4a", color: "#fff", padding: "10px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}>+ Nova Movimentação</button>
            <section style={{ marginTop: "16px", backgroundColor: "#ffffff" }}>
              <h2 style={{ margin: "0 0 8px", textAlign: "center", fontSize: "10px", fontWeight: 600, color: "#1a2e4a" }}>Seu mês comparado ao ideal</h2>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ height: "120px", width: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "right" }}>
                  {yAxisLabels.map(l => <span key={l} style={{ fontSize: "7px", color: "#9caab8", lineHeight: 1 }}>{l}%</span>)}
                </div>
                <div style={{ flex: 1, position: "relative", height: "120px" }}>
                  {gridLines.map((t, i) => <div key={i} style={{ position: "absolute", top: `${t}px`, left: 0, right: 0, borderTop: "1px dashed #f1f5f9" }} />)}
                  <div style={{ position: "relative", zIndex: 1, height: "120px", display: "flex", alignItems: "flex-end", gap: "6px" }}>
                    {barData.map(bar => (
                      <div key={bar.label} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                        <span style={{ fontSize: "8px", fontWeight: 700, color: bar.color, textAlign: "center", marginBottom: "2px" }}>{bar.text}</span>
                        <div style={{ height: `${bar.height}px`, backgroundColor: bar.color, borderRadius: "3px 3px 0 0" }} />
                        <span style={{ marginTop: "6px", fontSize: "7px", color: "#9caab8", textAlign: "center", lineHeight: 1.2 }}>{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section style={{ marginTop: "10px", borderRadius: "10px", backgroundColor: "#fef9ec", padding: "8px 10px", display: "flex", gap: "8px" }}>
              <span style={{ fontSize: "12px" }}>🌟</span>
              <p style={{ margin: 0, fontSize: "8px", color: "#92400e", lineHeight: 1.5 }}>Necessidades Essenciais estão em 62%, o ideal é até 50%. Reduza sua margem de gastos.</p>
            </section>
          </main>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;
