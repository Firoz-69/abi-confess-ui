import AutoSlider from "./components/AutoSlider";
import ConfessionLetter from "./components/ConfessionLetter";
import Footer from "./components/Footer";
import MemoriesSection from "./components/Memoriessection";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <div>
      <HomePage />
      <MemoriesSection />
      <AutoSlider />
      <ConfessionLetter />
      <Footer />
    </div>
  );
};

export default App;
