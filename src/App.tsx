import { Routes, Route } from "react-router-dom"
import { LandingPage } from "./routes/Landing"
import { Header } from "./components/Header"

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </>
  )
}
