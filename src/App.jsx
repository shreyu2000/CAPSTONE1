import RegisterPage from "./pages/RegisterPage";
import Genre from "./pages/Genre";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/genre" element={<Genre />} />




      </Routes>
    </>
  );
}
2
export default App;
