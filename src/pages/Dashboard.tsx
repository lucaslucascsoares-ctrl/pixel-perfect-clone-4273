import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Plus, BarChart3, Lightbulb, Menu } from "lucide-react";
import ElefinLogo from "@/components/ElefinLogo";
import MobileLayout from "@/components/MobileLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const chartData = [
  { name: "Essenciais", value: 52 },
  { name: "Desejos", value: 28 },
  { name: "Prioridades", value: 20 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<string | null>("passo");

  const toggle = (key: string) => setOpenSection(openSection === key ? null : key);

  return (
    <MobileLayout>
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <ElefinLogo />
          <button className="text-sm font-bold text-foreground flex items-center gap-1">
            <Menu className="w-5 h-5" /> menu
          </button>
        </div>

        {/* Summary */}
        <div className="px-5 py-3">
          <h2 className="text-base font-bold text-foreground">Painel do Mês</h2>
          <div className="flex gap-4 mt-2 text-sm">
            <span>Entrou: <strong className="text-success">R$ 5.000</strong></span>
            <span>Saiu: <strong className="text-destructive">R$ 4.200</strong></span>
          </div>
          <div className="mt-2 bg-muted rounded-lg py-3 text-center">
            <p className="text-sm text-muted-foreground">Saldo:</p>
            <p className="text-xl font-extrabold text-foreground">R$ 800</p>
          </div>
        </div>

        {/* Accordion sections */}
        <div className="px-5 space-y-2 flex-1">
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
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} label={{ position: "top", fontSize: 12, fontWeight: 700, fill: "hsl(var(--foreground))", formatter: (v: number) => `${v}%` }}>
                    {chartData.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? "hsl(var(--elefin-blue))" : "hsl(var(--elefin-gray))"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AccordionItem>
        </div>

        {/* Bottom nav */}
        <BottomNav navigate={navigate} active="dashboard" />
      </div>
    </MobileLayout>
  );
};

const AccordionItem = ({ title, isOpen, onToggle, children }: {
  title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) => (
  <div className="border rounded-lg overflow-hidden">
    <button onClick={onToggle} className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground">
      {title}
      {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
    </button>
    {isOpen && <div className="px-4 pb-4">{children}</div>}
  </div>
);

export const BottomNav = ({ navigate, active }: { navigate: (path: string) => void; active: string }) => (
  <div className="flex items-center justify-around border-t bg-card py-3 mt-auto">
    <NavBtn icon={<BarChart3 className="w-5 h-5" />} label="Painel" isActive={active === "dashboard"} onClick={() => navigate("/dashboard")} />
    <NavBtn icon={<Plus className="w-5 h-5" />} label="Nova" isActive={active === "nova"} onClick={() => navigate("/nova-movimentacao")} isPrimary />
    <NavBtn icon={<BarChart3 className="w-5 h-5" />} label="Régua" isActive={active === "regua"} onClick={() => navigate("/regua-gastos")} />
    <NavBtn icon={<Lightbulb className="w-5 h-5" />} label="Dicas" isActive={active === "dicas"} onClick={() => navigate("/dicas")} />
  </div>
);

const NavBtn = ({ icon, label, isActive, onClick, isPrimary }: {
  icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void; isPrimary?: boolean;
}) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-0.5 text-xs transition-colors ${
    isPrimary ? "text-primary-foreground bg-primary rounded-full p-2 -mt-4 shadow-md" :
    isActive ? "text-primary font-bold" : "text-muted-foreground"
  }`}>
    {icon}
    {!isPrimary && <span>{label}</span>}
  </button>
);

export default Dashboard;
