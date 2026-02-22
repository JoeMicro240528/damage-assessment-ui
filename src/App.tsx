import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/common/PageTransition";
import Index from "./pages/index";
import Analysis from "./pages/Analysis";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/analysis" element={<PageTransition><Analysis /></PageTransition>} />
        <Route path="/results" element={<PageTransition><Results /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <LanguageProvider>
          <Toaster />
          <AnimatedRoutes />
        </LanguageProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
