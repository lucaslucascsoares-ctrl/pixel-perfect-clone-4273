const DicaCard = () => (
  <section
    className="bg-warning/10"
    style={{
      marginTop: "10px",
      borderRadius: "10px",
      padding: "8px 10px",
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
    }}
  >
    <span style={{ fontSize: "12px", lineHeight: 1.2 }}>🌟</span>
    <p
      className="text-warning-foreground"
      style={{ margin: 0, fontSize: "8px", lineHeight: 1.5 }}
    >
      Necessidades Essenciais estão em 62%, o ideal é até 50%. Reduza sua margem
      de gastos.
    </p>
  </section>
);

export default DicaCard;
