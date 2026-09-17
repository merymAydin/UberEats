import { Switch, Route } from "react-router-dom";
import './App.css'
import { ToastContainer } from "react-toastify";
import Signup from './pages/Signup'
import Login from "./pages/Login";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import ShopPage from "./pages/ShopPage";



function App() {

  return (
    <>
      <Header />
      <PageContent>

        <Switch>
          <Route path="/signup">

            <Signup />

          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>


      </PageContent>
      <Footer />
      <ToastContainer />
    </>

  )
}

export default App
