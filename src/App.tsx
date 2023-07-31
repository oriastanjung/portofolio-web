
import { SiTailwindcss } from "react-icons/si";
import MouseAura from "./components/MouseAura";
function App() {

  return (
    <>
      <div className="bg-bgBlack h-screen">
        <div className="w-full">
          <SiTailwindcss className="w-64 h-64 text-black" />
        </div>
        <h1 className="container mx-auto text-customGreen font-extrabold">
          hello world
        </h1>
        <h1 className="container mx-auto text-white font-extrabold">
          hello world
        </h1>
        <MouseAura />
      </div>
    </>
  );
}

export default App;
