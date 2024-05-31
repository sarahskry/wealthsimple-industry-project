import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetGoalsPage from "./pages/SetGoalsPage/SetGoalsPage";
import GoalsPage from "./pages/GoalsPage/GoalsPage";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetGoalsPage />} />
        <Route path="/goals/:id" element={<GoalsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
