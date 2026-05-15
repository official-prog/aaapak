import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CustomPackagingUSA from "./pages/CustomPackagingUSA.tsx";
import CustomPackagingCanada from "./pages/CustomPackagingCanada.tsx";
import CorrugatedBoxes from "./pages/CorrugatedBoxes.tsx";
import FoodPackaging from "./pages/FoodPackaging.tsx";
import { useEasedScroll } from "./hooks/useEasedScroll";

const queryClient = new QueryClient();

const ScrollController = ({ children }: { children: React.ReactNode }) => {
  useEasedScroll();
  return <>{children}</>;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollController>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/custom-packaging-usa" element={<CustomPackagingUSA />} />
              <Route path="/custom-packaging-canada" element={<CustomPackagingCanada />} />
              <Route path="/corrugated-boxes" element={<CorrugatedBoxes />} />
              <Route path="/food-packaging" element={<FoodPackaging />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ScrollController>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
