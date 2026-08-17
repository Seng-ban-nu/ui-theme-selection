import "./App.css";
import Header from "./components/Header";
import SettingsPanel from "./components/SettingsPanel";
import PreviewCard from "./components/PreviewCard";
import { useSettings } from "./context/SettingsContext";

function App() {
  const { theme } = useSettings();

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Header />

        <main className="content">
          <SettingsPanel />
          <PreviewCard />
        </main>
      </div>
    </div>
  );
}

export default App;