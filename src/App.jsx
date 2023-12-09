import RegisterPage from "./pages/RegisterPage";
import Genre from "./pages/Genre";
import Browse from "./pages/Browse";
import Movies from "./pages/Movies";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}
2
export default App;
