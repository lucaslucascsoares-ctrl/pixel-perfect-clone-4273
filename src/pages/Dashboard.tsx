import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";

const yAxisLabels = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

const barData = [
  {
    label: "Necess. Essenciais",
    percentage: 62,
    height: 74,
    color: "#1a2e4a",
    text: "62%",
  },
  {
    label: "Estilo de Vida",
    percentage: 2,
    height: 2,
    color: "#5ba8d4",
    text: "2%",
  },
  {
    label: "Prioridades Financeiras",
    percentage: 14,
    height: 17,
    color: "#9caab8",
    text: "14%",
  },
];

const menuItems = [
  "Configurações",
  "Painel do Mês",
  "Nova Movimentação",
  "Régua de Gastos",
  "Planejamento",
  "Ajuda",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const gridLinePositions = useMemo(() => {
    const maxHeight = 120;
    return Array.from({ length: 10 }, (_, index) => (index / 10) * maxHeight);
  }, []);

  return (
    <MobileLayout>
      <div
        className="bg-white"
        style={{
          minHeight: "100%",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        {isMenuOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(15, 23, 42, 0.25)",
              zIndex: 40,
            }}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <div
          className="bg-white"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "78%",
            maxWidth: "300px",
            height: "100%",
            backgroundColor: "#ffffff",
            zIndex: 50,
            transform: isMenuOpen ? "translateX(0)" : "translateX(-104%)",
            transition: "transform 0.28s ease",
            boxShadow: "2px 0 14px rgba(15, 23, 42, 0.12)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "12px 14px 6px",
            }}
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
              className="bg-white"
              style={{
                border: "none",
                backgroundColor: "#ffffff",
                color: "#1a2e4a",
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
                className="bg-white"
                style={{
                  width: "100%",
                  textAlign: "left",
                  border: "none",
                  borderBottom: "1px solid #f1f5f9",
                  backgroundColor: "#ffffff",
                  padding: "12px 16px",
                  color: "#1a2e4a",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div
          className="bg-white"
          style={{ backgroundColor: "#ffffff", paddingBottom: "20px" }}
        >
          <header
            className="bg-white"
            style={{
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px 10px",
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Voltar"
              className="bg-white"
              style={{
                border: "none",
                backgroundColor: "#ffffff",
                color: "#9caab8",
                fontSize: "20px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ←
            </button>

            <h1
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 700,
                color: "#1a2e4a",
              }}
            >
              Abril
            </h1>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
              className="bg-white"
              style={{
                border: "none",
                backgroundColor: "#ffffff",
                color: "#5ba8d4",
                fontSize: "20px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ≡
            </button>
          </header>

          <main
            className="bg-white"
            style={{ backgroundColor: "#ffffff", padding: "14px 12px 0" }}
          >
            <section
              className="bg-white"
              style={{
                border: "1px solid #e8f4fd",
                borderRadius: "12px",
                padding: "12px 14px",
                backgroundColor: "#ffffff",
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
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "#1a2e4a",
                  }}
                >
                  Caixa do mês
                </span>
                <button
                  type="button"
                  className="bg-white"
                  style={{
                    border: "none",
                    backgroundColor: "#ffffff",
                    color: "#5ba8d4",
                    fontSize: "9px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Ver contas ›
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10px",
                    color: "#3a4a5c",
                  }}
                >
                  <span>Caixa inicial</span>
                  <span>R$ 3.200,00</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10px",
                    color: "#3a4a5c",
                  }}
                >
                  <span>Entradas</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span>R$ 4.500,00</span>
                    <button
                      type="button"
                      onClick={() => navigate("/detalhamento-entradas")}
                      aria-label="Ver detalhamento de entradas"
                      className="bg-white"
                      style={{
                        border: "none",
                        backgroundColor: "#ffffff",
                        color: "#5ba8d4",
                        fontSize: "11px",
                        cursor: "pointer",
                        padding: 0,
                        lineHeight: 1,
                      }}
                    >
                      ✓
                    </button>
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10px",
                    color: "#3a4a5c",
                  }}
                >
                  <span>Saídas</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span>- R$ 4.200,00</span>
                    <button
                      type="button"
                      onClick={() => navigate("/detalhamento-saidas")}
                      aria-label="Ver detalhamento de saídas"
                      className="bg-white"
                      style={{
                        border: "none",
                        backgroundColor: "#ffffff",
                        color: "#5ba8d4",
                        fontSize: "11px",
                        cursor: "pointer",
                        padding: 0,
                        lineHeight: 1,
                      }}
                    >
                      ✓
                    </button>
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10px",
                    borderTop: "1px solid #f1f5f9",
                    paddingTop: "8px",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#1a2e4a" }}>
                    Saldo atual
                  </span>
                  <span style={{ fontWeight: 700, color: "#22c55e" }}>
                    R$ 3.500,00
                  </span>
                </div>
              </div>
            </section>

            <button
              type="button"
              onClick={() => navigate("/nova-movimentacao")}
              style={{
                width: "100%",
                marginTop: "12px",
                border: "none",
                borderRadius: "12px",
                backgroundColor: "#1a2e4a",
                color: "#ffffff",
                padding: "10px",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              + Nova Movimentação
            </button>

            <section
              className="bg-white"
              style={{ marginTop: "16px", backgroundColor: "#ffffff" }}
            >
              <h2
                style={{
                  margin: 0,
                  marginBottom: "8px",
                  textAlign: "center",
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "#1a2e4a",
                }}
              >
                Seu mês comparado ao ideal
              </h2>

              <div style={{ display: "flex", gap: "8px" }}>
                <div
                  style={{
                    height: "120px",
                    width: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "right",
                  }}
                >
                  {yAxisLabels.map((label) => (
                    <span
                      key={label}
                      style={{ fontSize: "7px", color: "#9caab8", lineHeight: 1 }}
                    >
                      {label}%
                    </span>
                  ))}
                </div>

                <div style={{ flex: 1, position: "relative", height: "120px" }}>
                  {gridLinePositions.map((lineTop, index) => (
                    <div
                      key={`${lineTop}-${index}`}
                      style={{
                        position: "absolute",
                        top: `${lineTop}px`,
                        left: 0,
                        right: 0,
                        borderTop: "1px dashed #f1f5f9",
                        zIndex: 0,
                      }}
                    />
                  ))}

                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      height: "120px",
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "6px",
                    }}
                  >
                    {barData.map((bar) => (
                      <div
                        key={bar.label}
                        style={{
                          flex: 1,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "8px",
                            fontWeight: 700,
                            color: bar.color,
                            textAlign: "center",
                            marginBottom: "2px",
                          }}
                        >
                          {bar.text}
                        </span>
                        <div
                          style={{
                            height: `${bar.height}px`,
                            backgroundColor: bar.color,
                            borderRadius: "3px 3px 0 0",
                          }}
                        />
                        <span
                          style={{
                            marginTop: "6px",
                            fontSize: "7px",
                            color: "#9caab8",
                            textAlign: "center",
                            minHeight: "18px",
                            lineHeight: 1.2,
                          }}
                        >
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              style={{
                marginTop: "10px",
                borderRadius: "10px",
                backgroundColor: "#fef9ec",
                padding: "8px 10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "12px", lineHeight: 1.2 }}>🌟</span>
              <p
                style={{
                  margin: 0,
                  fontSize: "8px",
                  color: "#92400e",
                  lineHeight: 1.5,
                }}
              >
                Necessidades Essenciais estão em 62%, o ideal é até 50%. Reduza
                sua margem de gastos.
              </p>
            </section>
          </main>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;