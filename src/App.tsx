import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import MouseAura from "./components/MouseAura";
function App() {
  return (
    <>
      <MouseAura />

      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<ProjectsPage />} path="/projects"></Route>
      </Routes>
    </>
  );
}

export default App;
