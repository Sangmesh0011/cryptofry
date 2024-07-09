import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-full backdrop-blur-xl shadow-slate-100 h-[70px] flex justify-around items-center">
      <div className="w-1/3 md:flex hidden justify-center items-center">
        <h2>Cryptofry</h2>
      </div>
      <div className="w-2/3 flex justify-center items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/cryptos">Cryptos</Link>
        {/* <Link to="/exchanges">Exchanges</Link> */}
        {/* <Link to="/news">News</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
