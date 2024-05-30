import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SetGoalsPage from './pages/SetGoalsPage/SetGoalsPage';
import GoalsPage from './pages/GoalsPage/GoalsPage';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route to="/set-goal" element={<SetGoalsPage />}/> */}
        <Route path="/goals" element={<GoalsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
