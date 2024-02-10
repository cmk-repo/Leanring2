import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
import { lazy } from 'react'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing')) // send code only when this is gone to done download all pages


function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
    <div>
      <button onClick={() => {

        navigate("/");
      }}>Landing page</button>

      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboard</button>

    </div>
  </div>
}

export default App