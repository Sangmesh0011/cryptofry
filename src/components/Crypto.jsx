import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCrptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../reduxServices/cryptoApi";
import { RotatingTriangles } from "react-loader-spinner";
import millify from "millify";
import { Select } from "antd";
import PriceChart from "./PriceChart";

const { Option } = Select;

const Crypto = () => {
  const { cId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCrptoDetailsQuery(cId);
  const history = useGetCryptoHistoryQuery({ cId, timePeriod });
  const coin = data?.data?.coin;
  console.log("history", history);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  if (isFetching)
    return (
      <div className="absolute w-full top-1/2 left-1/2">
        <RotatingTriangles />
      </div>
    );
  return (
    <div className="text-white w-full min-h-screen flex md:flex-row flex-col justify-center items-center">
      <div className="side w-full pb-12 md:pb-0 md:w-1/5 h-auto py-8 md:min-h-screen flex flex-col justify-center items-center gap-6 md:gap-28 bg-slate-800">
        <div className="flex justify-center items-center gap-x-4 h-1/6 mt-12 md:mt-0">
          <img src={coin.iconUrl} alt="icon" className="small-img" />
          <h1 className="text-3xl font-extrabold">{coin.name}</h1>
        </div>
        <div className="h-5/6">
          <div className=" w-full h-auto flex justify-center items-center gap-2 flex-wrap">
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">Price</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.price)}
              </span>
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">Rank</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.rank)}
              </span>
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">Market Cap</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.marketCap)}
              </span>
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">All time high</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.allTimeHigh.price)}
              </span>
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">Number of markets</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.numberOfMarkets)}
              </span>
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">Number of exchanges</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.numberOfExchanges)}
              </span>
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">Total supply</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.supply.total)}
              </span>
            </div>
            {/* <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">Confirmed supply</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.supply.confirmed)}
              </span>
            </div> */}
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#424e5247] rounded-lg">
              <span className="font-light text-xs">Circulating supply</span>
              <span className="font-extrabold text-2xl">
                {millify(coin.supply.circulating)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-full md:w-4/5 h-screen flex flex-col justify-center items-center">
        <div className="desc w-full h-fit md:h-1/6 bg-slate-700 flex justify-between items-center gap-x-2 p-5">
          <img src={coin.iconUrl} alt="icon" className="w-20 h-20" />
          <span className="text-xl">{coin.description}</span>
        </div>
        <div className="chart w-full h-5/6 bg-gray-900 flex flex-col justify-center items-center">
          <div className="w-full h-1/6 text-white bg-slate-700 flex justify-between items-center px-6">
            <Select
              defaultValue="7d"
              className="w-44 h-14 p-2"
              placeholder="Time Solt"
              onChange={(value) => {
                setTimePeriod(value);
              }}
            >
              {time.map((date) => (
                <Option key={date}>{date}</Option>
              ))}
            </Select>
            <span className="text-xl">Current price: <span className="font-bold">{coin.price}</span></span>
          </div>
          <div className="w-full min-h-fit flex justify-center items-center bg-gray-700">
            <PriceChart coinHistory={history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
