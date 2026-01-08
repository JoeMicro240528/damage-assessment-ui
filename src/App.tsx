import { BrowserRouter, Routes, Route } from "react-router";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/index";
import Analysis from "./pages/Analysis";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
