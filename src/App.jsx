import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div className="ml-4">
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
