import { useState } from "react";
import { ChevronDown, Menu, MoreHorizontal } from "lucide-react";
import ElefinLogo from "@/components/ElefinLogo";
import MobileLayout from "@/components/MobileLayout";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const chartData = [
  { name: "Essenciais", value: 52 },
  { name: "Desejos", value: 28 },
  { name: "Prioridades", value: 20 },
];

const barColors = ["hsl(215, 25%, 20%)", "hsl(210, 30%, 55%)", "hsl(210, 15%, 70%)"];

const Dashboard = () => {
  const [openSection, setOpenSection] = useState<string | null>("passo");

  const toggle = (key: string) => setOpenSection(openSection === key ? null : key);

  return (
    <MobileLayout>
      <div className="flex flex-col flex-1">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <button><Menu className="w-6 h-6 text-primary" /></button>
          <ElefinLogo />
          <button><MoreHorizontal className="w-6 h-6 text-primary" /></button>
        </div>

        {/* Divider + Title */}
        <div className="border-t mx-5" />
        <h2 className="text-center text-lg font-extrabold text-foreground py-3">Painel do Mês</h2>

        {/* Summary */}
        <div className="px-5">
          <div className="flex justify-center gap-6 text-sm border-t border-b py-2">
            <span>Entrou: <strong>R$ 5.000</strong></span>
            <span>Saiu: <strong>R$ 4.200</strong></span>
          </div>
          <div className="bg-muted rounded-lg py-3 text-center mt-3">
            <p className="text-lg font-extrabold text-foreground">Saldo: R$ 800</p>
          </div>
        </div>

        {/* Accordion sections */}
        <div className="px-5 space-y-2 flex-1 mt-4">
          <AccordionItem
            title="Como estou gastando?"
            isOpen={openSection === "gastando"}
            onToggle={() => toggle("gastando")}
          >
            <p className="text-sm text-muted-foreground">Resumo dos seus gastos por categoria.</p>
          </AccordionItem>

          <AccordionItem
            title="Comparado ao ideal?"
            isOpen={openSection === "ideal"}
            onToggle={() => toggle("ideal")}
          >
            <p className="text-sm text-muted-foreground">Comparação com metas recomendadas.</p>
          </AccordionItem>

          <AccordionItem
            title="Qual o próximo passo?"
            isOpen={openSection === "passo"}
            onToggle={() => toggle("passo")}
          >
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barCategoryGap="35%">
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Bar
                    dataKey="value"
                    radius={[4, 4, 0, 0]}
                    label={{
                      position: "top",
                      fontSize: 13,
                      fontWeight: 700,
                      fill: "hsl(var(--foreground))",
                      formatter: (v: number) => `${v}%`,
                    }}
                  >
                    {chartData.map((_, i) => (
                      <Cell key={i} fill={barColors[i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AccordionItem>
        </div>
      </div>
    </MobileLayout>
  );
};

const AccordionItem = ({
  title, isOpen, onToggle, children,
}: {
  title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) => (
  <div className="border rounded-xl overflow-hidden">
    <button onClick={onToggle} className="w-full flex items-center gap-2 px-4 py-3.5 text-sm font-bold text-foreground">
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isOpen ? "border-primary bg-primary" : "border-muted-foreground"}`}>
        {isOpen && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
      </div>
      {title}
    </button>
    {isOpen && <div className="px-4 pb-4">{children}</div>}
  </div>
);

export default Dashboard;
