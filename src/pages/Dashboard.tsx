import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import ElefinLogo from "@/components/ElefinLogo";
import MobileLayout from "@/components/MobileLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const chartData = [
  { name: "Essenciais", value: 52 },
  { name: "Desejos", value: 28 },
  { name: "Prioridades", value: 20 },
];

const Dashboard = () => {
  const [openSection, setOpenSection] = useState<string | null>("passo");

  const toggle = (key: string) => setOpenSection(openSection === key ? null : key);

  return (
    <MobileLayout>
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-center px-5 pt-5 pb-3 gap-2">
          <ElefinLogo />
          <span className="text-base font-bold text-foreground ml-1">Painel do Mês</span>
        </div>

        {/* Summary */}
        <div className="px-5 py-2">
          <div className="flex justify-center gap-6 text-sm">
            <span>Entrou: <strong>R$ 5.000</strong></span>
            <span>Saiu: <strong>R$ 4.200</strong></span>
          </div>
          <div className="mt-2 border rounded-lg py-3 text-center">
            <p className="text-lg font-extrabold text-foreground">Saldo: R$ 800</p>
          </div>
        </div>

        {/* Accordion sections */}
        <div className="px-5 space-y-2 flex-1 mt-2">
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
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barCategoryGap="30%">
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} label={{ position: "top", fontSize: 12, fontWeight: 700, fill: "hsl(var(--foreground))", formatter: (v: number) => `${v}%` }}>
                    {chartData.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? "hsl(var(--foreground))" : "hsl(var(--elefin-gray))"} />
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

const AccordionItem = ({ title, isOpen, onToggle, children }: {
  title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) => (
  <div className="border rounded-lg overflow-hidden">
    <button onClick={onToggle} className="w-full flex items-center gap-2 px-4 py-3 text-sm font-semibold text-foreground">
      {isOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      {title}
    </button>
    {isOpen && <div className="px-4 pb-4">{children}</div>}
  </div>
);

export default Dashboard;
