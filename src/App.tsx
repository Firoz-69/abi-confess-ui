import AutoSlider from "./components/AutoSlider";
import ConfessionLetter from "./components/ConfessionLetter";
import MemoriesSection from "./components/Memoriessection";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <div>
      <HomePage />
      <MemoriesSection />
      <AutoSlider />
      <ConfessionLetter />
    </div>
  );
};

export default App;
