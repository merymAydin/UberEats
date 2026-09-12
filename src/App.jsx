import { Switch, Route } from "react-router-dom";
import './App.css'
import { ToastContainer } from "react-toastify";
import Signup from './pages/Signup'
import Login from "./pages/Login";
import Header from "./components/Header";
import Products from "./pages/Products";



function App() {

  return (
    <>
    <Header/>
      <Switch>
        <Route path="/signup">
        
          <Signup />
          
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
      </Switch>

      <ToastContainer />
    </>

  )
}

export default App
