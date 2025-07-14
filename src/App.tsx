import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VentaPropiedades from './pages/VentaPropiedades';
import DisenoPlanos from './pages/DisenoPlanos';
import ConstruccionObras from './pages/ConstruccionObras';
import TopografiaGeorreferenciacion from './pages/TopografiaGeorreferenciacion';
import SaneamientoFisicoLegal from './pages/SaneamientoFisicoLegal';
import RegularizacionTerrenos from './pages/RegularizacionTerrenos';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/venta-propiedades" element={<VentaPropiedades />} />
          <Route path="/servicios/diseno-planos" element={<DisenoPlanos />} />
          <Route path="/servicios/construccion-obras" element={<ConstruccionObras />} />
          <Route path="/servicios/topografia-georreferenciacion" element={<TopografiaGeorreferenciacion />} />
          <Route path="/servicios/saneamiento-fisico-legal" element={<SaneamientoFisicoLegal />} />
          <Route path="/servicios/regularizacion-terrenos" element={<RegularizacionTerrenos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
