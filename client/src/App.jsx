import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SetGoalsPage from './pages/SetGoalsPage/SetGoalsPage';
import GoalsPage from './pages/GoalsPage/GoalsPage';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

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
