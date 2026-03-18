import { useMemo } from "react";

const yAxisLabels = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

const barData = [
  { label: "Necess. Essenciais", percentage: 62, height: 74, color: "hsl(var(--foreground))", text: "62%" },
  { label: "Estilo de Vida", percentage: 2, height: 2, color: "hsl(var(--primary))", text: "2%" },
  { label: "Prioridades Financeiras", percentage: 14, height: 17, color: "hsl(var(--muted-foreground))", text: "14%" },
];

const ComparativoChart = () => {
  const gridLinePositions = useMemo(
    () => Array.from({ length: 10 }, (_, i) => (i / 10) * 120),
    []
  );

  return (
    <section className="bg-background" style={{ marginTop: "16px" }}>
      <h2
        className="text-foreground"
        style={{
          margin: 0,
          marginBottom: "8px",
          textAlign: "center",
          fontSize: "10px",
          fontWeight: 600,
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
              className="text-muted-foreground"
              style={{ fontSize: "7px", lineHeight: 1 }}
            >
              {label}%
            </span>
          ))}
        </div>

        <div style={{ flex: 1, position: "relative", height: "120px" }}>
          {gridLinePositions.map((lineTop, index) => (
            <div
              key={`grid-${index}`}
              style={{
                position: "absolute",
                top: `${lineTop}px`,
                left: 0,
                right: 0,
                borderTop: "1px dashed hsl(var(--border))",
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
                  className="text-muted-foreground"
                  style={{
                    marginTop: "6px",
                    fontSize: "7px",
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
  );
};

export default ComparativoChart;
