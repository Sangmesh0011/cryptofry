import { BiLinkExternal } from "react-icons/bi";
import React from "react";
import { useGetCryptosQuery } from "../reduxServices/cryptoApi";
import { RotatingTriangles } from "react-loader-spinner";
import millify from "millify";
import Cryptos from "./Cryptos";
import { Link } from "react-router-dom";
import News from "./News";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching)
    return (
      <div className="absolute top-1/2 left-1/2">
        <RotatingTriangles />
      </div>
    );
  console.log('key',process.env.REACT_APP_RAPID_API_KEY)  
  return (
    <div className="md:px-56 py-8 px-4 w-full min-h-screen backdrop-blur-lg flex flex-col justify-start items-center gap-y-20">
      <div className="w-screen text-center px-40 py-8 flex flex-col justify-center gap-y-6 items-center mb-4">
        <h1 className="font-extrabold text-6xl md:text-7xl">Welcome to Cryptofry! </h1>
        <h2 className="font-semibold text-2xl">
          Your one-stop destination for all crypto data.
        </h2>
      </div>

      <div className=" w-full h-auto flex justify-center items-center gap-2 flex-wrap">
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
          <span className="font-extrabold text-3xl">Global Stats</span>
        </div>
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
          <span className="font-light text-xs">Total Cryptos</span>
          <span className="font-extrabold text-2xl">{globalStats.total}</span>
        </div>
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
          <span className="font-light text-xs">Total Exchanges</span>
          <span className="font-extrabold text-2xl">
            {millify(globalStats.totalExchanges)}
          </span>
        </div>
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
          <span className="font-light text-xs">Total Market Cap</span>
          <span className="font-extrabold text-2xl">
            {millify(globalStats.totalMarketCap)}
          </span>
        </div>
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
          <span className="font-light text-xs">Total 24h Volume</span>
          <span className="font-extrabold text-2xl">
            {millify(globalStats.total24hVolume)}
          </span>
        </div>
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
          <span className="font-light text-xs">Total Markets</span>
          <span className="font-extrabold text-2xl">
            {millify(globalStats.totalMarkets)}
          </span>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
        <div className="w-full h-auto flex flex-col justify-center items-center gap-y-12">
          <div className="w-full px-16 flex flex-col md:flex-row justify-between items-center ">
            <h1 className="font-bold text-4xl text-center">Top 10 Cryptocurrencies</h1>
            <Link to="/cryptos">
              <div className="flex justify-center items-center gap-x-4 mt-6">
                <h2>Show More</h2>
                <BiLinkExternal className="w-8 h-8" />
              </div>
            </Link>
          </div>
          <Cryptos small />
        </div>
        <div className="">
          <News small />
        </div>
      </div>
    </div>
  );
};

export default Home;
