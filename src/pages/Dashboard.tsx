import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import CaixaDoMes from "@/components/dashboard/CaixaDoMes";
import ComparativoChart from "@/components/dashboard/ComparativoChart";
import DicaCard from "@/components/dashboard/DicaCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MobileLayout>
      <div className="bg-background" style={{ minHeight: "100%", position: "relative" }}>
        <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="bg-background" style={{ paddingBottom: "20px" }}>
          <DashboardHeader onMenuOpen={() => setIsMenuOpen(true)} />

          <main className="bg-background" style={{ padding: "14px 12px 0" }}>
            <CaixaDoMes />

            <button
              type="button"
              onClick={() => navigate("/nova-movimentacao")}
              className="bg-foreground text-background"
              style={{
                width: "100%",
                marginTop: "12px",
                border: "none",
                borderRadius: "12px",
                padding: "10px",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              + Nova Movimentação
            </button>

            <ComparativoChart />
            <DicaCard />
          </main>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;
