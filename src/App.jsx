import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
