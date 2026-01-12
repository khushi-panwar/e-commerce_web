import { BrowserRouter } from "react-router"
import Navbar from "./components/Navbar"
import AppRoute from "./routes/AppRoute"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </div>

  )
}

export default App