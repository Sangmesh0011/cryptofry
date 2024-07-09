import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Exchanges from "./components/Exchanges";
import Cryptos from "./components/Cryptos";
import Crypto from "./components/Crypto";
// import News from "./components/News";

function App() {
  return (
    <div id="main" className="text-white w-full min-h-screen overflow-x-hidden">
      <div className="">
        <Navbar />
      </div>
      <div className="w-full">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route exact path="/exchanges" element={<Exchanges/>}/> */}
          <Route exact path="/cryptos" element={<Cryptos />}/>
          <Route exact path="/crypto/:cId" element={<Crypto/>}/>
          {/* <Route exact path="/news" element={<News/>}/> */}
        </Routes>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
