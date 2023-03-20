import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Community from "./pages/Community/Community";
import Product from "./pages/Shop/SingleProduct/Product";
import SmoothScroll from "./SmoothScroll";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop-all" element={<Shop/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/product" element={<Product/>}/>
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
