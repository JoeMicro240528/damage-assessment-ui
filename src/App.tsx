import { BrowserRouter } from "react-router";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Index />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
