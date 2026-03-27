import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Servicios from "./pages/Servicios.tsx";
import ComoTrabajamos from "./pages/ComoTrabajamos.tsx";
import Soluciones from "./pages/Soluciones.tsx";
import Casos from "./pages/Casos.tsx";
import Nosotros from "./pages/Nosotros.tsx";
import Recursos from "./pages/Recursos.tsx";
import Contacto from "./pages/Contacto.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
