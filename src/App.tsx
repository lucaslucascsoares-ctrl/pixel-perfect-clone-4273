import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import OnboardingOrganizar from "./pages/OnboardingOrganizar";
import Dashboard from "./pages/Dashboard";
import NovaMovimentacao from "./pages/NovaMovimentacao";
import ReguaGastos from "./pages/ReguaGastos";
import CadastroPessoal from "./pages/CadastroPessoal";
import CadastroFamiliar from "./pages/CadastroFamiliar";
import Dicas from "./pages/Dicas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding/cpf" element={<Onboarding />} />
          <Route path="/onboarding/organizar" element={<OnboardingOrganizar />} />
          <Route path="/onboarding/cadastro-pessoal" element={<CadastroPessoal />} />
          <Route path="/cadastro-familiar" element={<CadastroFamiliar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nova-movimentacao" element={<NovaMovimentacao />} />
          <Route path="/regua-gastos" element={<ReguaGastos />} />
          <Route path="/dicas" element={<Dicas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
