import React from "react";
import LocalTime from "../utils/LocalTime";
import { Link } from "react-router-dom";

const CarouselComponent = ({ elm }) => {

    const localTime = LocalTime(elm?.publishedAt);

  return (
    <div
      style={{
        backgroundImage: `url(${elm?.urlToImage})`,
        
      }}
      className={`h-56 md:h-72 lg:h-96 w-full rounded-md bg-cover bg-center text-slate-200 z-0 hover:bg-top transition-all duration-300 cursor-pointer`}
    >
      <Link to={elm?.url} target="_blank" className='h-full w-full p-5 bg-gradient-to-b from-black/50 to-black/100 hover:from-slate-950/60 hover:to-slate-950/100 flex flex-col justify-end  transition-all duration-300'>
        <h2 className="text-lg font-bold mb-2 tracking-tight text-sky-600">{elm?.title?.slice(0,40)}...</h2>
        <h4 className="text-xs font-thin text-gray-300 tracking-wide mb-2">{elm?.description?.slice(0,150)} . . .</h4>
        <div className="flex items-center justify-between">
        <h3 className="text-xs md:text-sm font-extralight">
             <span className="text-yellow-400 tracking-wider">Author</span> : {
                elm && elm.author ? (elm.author) : ('anonumous author') 
            }
        </h3>
        <h3 className="text-xs md:text-sm font-extralight">
            <span className="text-yellow-300 tracking-wider">Published at</span> : {localTime}
        </h3>
        </div>
      </Link>
    </div>
  );
};

export default CarouselComponent;
