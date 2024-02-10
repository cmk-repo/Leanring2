
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing')) // send code only when this is gone to done download all pages

function App() {

  // Suspense API
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar() {
  const navigate = useNavigate(); // right way of routing 

  return <div>
    <div>
      <button onClick={() => {
        navigate("/"); // window.location.href = "dashboard"
      }}>Landing page</button>

      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboard</button>

    </div>
  </div>
}

export default App