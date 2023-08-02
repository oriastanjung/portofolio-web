
// import { SiTailwindcss } from "react-icons/si";
import MouseAura from "./components/MouseAura";
function App() {

  return (
    <div className=" bg-bgBlack h-screen w-full">
      <div className="container mx-auto flex flex-col w-full justify-center items-center gap-5">
        
        <h1 className=" text-lg text-center font-semibold text-customGreen font-extrabold">
          Hi, Currently my portofolio is on big update, so stay tune. {" O. Riastanjung - August 2023"}
        </h1>
        <p className="text-lg text-center font-medium text-white">or you can see my portofolio in Linkedin</p>
        <a className="text-md text-center font-medium text-white" href="https://www.linkedin.com/in/oriastanjung/">My Account</a>
        
        <MouseAura />
      </div>
    </div>
  );
}

export default App;
