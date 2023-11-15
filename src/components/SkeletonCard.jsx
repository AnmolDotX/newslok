import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <SkeletonTheme
      direction='rtl'
      enableAnimation
      baseColor='#020617'
      highlightColor='#1e293b'
    >
      <div className='flex flex-col md:flex-row items-center gap-5 bg-slate-900/20 py-4 px-3 backdrop-filter backdrop-blur h-72 md:h-40 lg:h-64 rounded-lg justify-between w-[80vw] animate-pulse duration-75'>
        <div
          id='image-container'
          className='w-full md:w-40 lg:w-60 h-1/4 md:h-full flex flex-shrink-0'
        >
          <Skeleton height={160} />
        </div>
        <div
          id='news-data-container'
          className='flex flex-col gap-3 items-start text-left w-full md:h-full -mr-3 overflow-auto'
        >
          <h2 className='text-xs lg:text-lg font-bold text-sky-600 hover:text-sky-700 transition-all duration-200'>
            <Skeleton height={20} width={150} />
          </h2>
          <h4 className='text-xs font-thin lg:text-sm lg:font-normal text-white/75'>
            <Skeleton count={2} />
          </h4>
          <p className='hidden lg:block text-xs font-thin text-slate-400 tracking-wide'>
            <Skeleton count={2} />
          </p>
        </div>
        <div
          id='source-links'
          className='w-32 lg:w-52 flex text-left gap-5 justify-start h-full flex-shrink-0 flex-col border-l pl-5 overflow-auto'
        >
          <h3 className='hidden lg:block text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>
            Author :{" "}
            <span className='text-xs text-slate-200/50 font-light'>
              <Skeleton width={50} />
            </span>
          </h3>
          <h4 className='text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>
            <span className='text-xs text-slate-200/50 font-light'>
              <Skeleton width={50} />
            </span>
          </h4>
          <h4 className='text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>
            <Skeleton width={100} />
          </h4>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
