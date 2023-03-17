import Nav from "../src/components/Nav/Nav"
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Community from "./pages/Community/Community";
import Product from "./pages/Shop/SingleProduct/Product";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <Home/> */}
        {/* <Shop/> */}
        <Product/>
        {/* <Routes>
          <Route exact path="/" component={<Home/>}/>
          <Route path="/shop" component={<Shop/>}/>
          <Route path="/community" component={<Community/>}/>
        </Routes> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
