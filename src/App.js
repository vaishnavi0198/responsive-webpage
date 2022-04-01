import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';



function App() {
  return (
    <div>
      
      <BrowserRouter> 
      <Navbar />
        <Routes>
         <Route path="/" element={<Home />} exact>
              </Route>
         <Route path="/services" element={<Services />} >
              </Route>
         <Route path="/products" element={<Products />} >
              </Route>
         <Route path="/sign-up" element={<SignUp />} >
              </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// path issue - routing (services, home , products etc)
// second card dimensions 