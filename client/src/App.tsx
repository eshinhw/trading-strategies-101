import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowsePage } from "./pages/BrowsePage";
import { StrategyDetailPage } from "./pages/StrategyDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0d12]">
        <Routes>
          <Route path="/" element={<BrowsePage />} />
          <Route path="/strategy/:slug" element={<StrategyDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
