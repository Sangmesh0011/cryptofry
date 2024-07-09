import React, { useEffect,useState } from "react";
import { useGetCryptosQuery } from "../reduxServices/cryptoApi";
import Card from "./Card";
import { RotatingTriangles } from "react-loader-spinner";

const Cryptos =({ small }) => {
  const count = small ? 10 : 100;
  const [currPage,setCurrPage]=useState(1);
  const [search,setSearch]=useState("");
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  // const cryptosData=data.data.coins;

  useEffect(() => {
    if(data?.data?.coins)
        setCryptos(data.data.coins);
    // console.log('inside useEffect')
    //    return () => {
    //     setCryptos([])
    // };
  }, [data]);


  if (isFetching)
    return (
      <div className="absolute w-full top-1/2 left-1/2">
        <RotatingTriangles />
      </div>
    );
  
  const cardsPerPage=12;
  const indexLastCard=currPage*cardsPerPage;
  const indexFirstCard=indexLastCard-cardsPerPage;
  const totalPages=Math.ceil(cryptos.length/cardsPerPage);
  const pageNos=[];
  for(let i=1;i<=totalPages;i++){
    pageNos.push(i);
  }



  return (
    <div className="w-full min-h-screen backdrop-blur-xl flex flex-col justify-center items-center gap-5 pt-8">
      {small ? (
        ""
      ) : (
        <div className="w-full h-12 mb-10 flex justify-center items-center">
          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="search" className="w-2/5 text-xl h-full bg-transparent text-white border-x-2 focus:outline-none border-slate-200 rounded-full p-4 px-3 md:px-16" />
        </div>
      )}

      <div className="w-full h-auto flex md:flex-row flex-col justify-center items-center md:flex-wrap gap-y-2 md:gap-x-6">
        {cryptos?.filter((coin)=>{return search.toLowerCase()===""?coin:coin.name.toLowerCase().includes(search)}).slice(indexFirstCard,indexLastCard).map((coin) => {
          return <Card props={coin} />;
        })}
      </div>

      <div className="pagination w-full h-40 flex justify-center items-center gap-x-8 p-4">
        <button
        onClick={()=> setCurrPage(currPage-1)}
        disabled={currPage===1}
        >
          Previous
        </button>

        {
          pageNos.map((no)=>(
            <button
            key={no}
            onClick={(()=>setCurrPage(no))}
            className={currPage===no?'p-1 text-black h-fit w-8 rounded-full bg-yellow-400':""}
            >
              {no}
            </button>
          ))
        }


        <button
        onClick={()=> setCurrPage(currPage+1)}
        disabled={indexLastCard>=cryptos.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cryptos;
