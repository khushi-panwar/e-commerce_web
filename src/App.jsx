import { BrowserRouter } from "react-router"
import Navbar from "./components/Navbar"
import AppRoute from "./routes/AppRoute"
import { Provider } from "react-redux"
import { store } from "./redux/Store"


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter >
          <Navbar />
          <AppRoute />
        </BrowserRouter>
      </Provider>
    </div>

  )
}

export default App