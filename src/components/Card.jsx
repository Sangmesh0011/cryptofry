import { BsGraphDownArrow } from "react-icons/bs"; 
import { BsGraphUpArrow } from "react-icons/bs"; 
import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

const Card = ({ props }) => {
  return (
    <div className="w-[300px] h-[300px] px-3 py-4 bg-[#020202ba] text-white rounded-lg">
      <div className="h-1/5 flex justify-between px-4 items-center gap-2">
        <div className="flex justify-center items-center gap-x-2">
          <img className="small-img" src={props.iconUrl} alt="Icon" />
          <span className="text-xl text-white">{props.name}</span>
        </div>
        <div className="">
          <span className="text-2xl font-bold">{props.rank}</span>
        </div>
      </div>
      <div className="card-bottom h-3/5 flex flex-col justify-center items-start gap-y-3 px-4">
        <img
          className="card-btm-img absolute w-40"
          style={{
            backgroundImage: `url(${props.iconUrl})`,
            transform: "rotate(0deg) scale(1.1) translateX(80px)",
            backgroundSize: "cover",
            opacity: 0.1,
            overflow: "hidden",
          }}
          src={props.iconUrl}
          alt="Icon"
        />
        <span className="text-3xl font-bold">$ {millify(props.price)}</span>
        {
            props.change>=0?<span className="text-green-500 flex justify-center items-center gap-x-4">{props.change}<BsGraphUpArrow /></span>:<span className="text-red-500 flex justify-center items-center gap-x-4">{props.change}<BsGraphDownArrow /></span>
        }
        <span>{props.marketCap} (CAP)</span>
        
      </div>
      <div className="w-full h-1/5 flex justify-center items-center border-t-stone-800 border-t-[2px]">
        <Link to={`/crypto/${props.uuid}`}>View</Link>
      </div>
    </div>
  );
};

export default Card;
