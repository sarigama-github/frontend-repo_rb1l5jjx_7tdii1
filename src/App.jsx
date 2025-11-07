import { useState } from "react";
import Header from "./components/Header";
import Marketplace from "./components/Marketplace";
import StudioBooking from "./components/StudioBooking";
import ScheduleManager from "./components/ScheduleManager";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("market"); // 'market' | 'manage'
  const [selectedStudio, setSelectedStudio] = useState(null);

  const onChangeMode = (m) => {
    setMode(m);
    setSelectedStudio(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-gray-900">
      <Header mode={mode} onChangeMode={onChangeMode} />

      {mode === "market" && !selectedStudio && (
        <Marketplace onSelectStudio={setSelectedStudio} />
      )}

      {mode === "market" && selectedStudio && (
        <StudioBooking studio={selectedStudio} onBack={() => setSelectedStudio(null)} />
      )}

      {mode === "manage" && <ScheduleManager />}

      <Footer />
    </div>
  );
}

export default App;
