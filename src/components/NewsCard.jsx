import React from 'react'
import LocalTime from '../utils/LocalTime'
import { Link } from 'react-router-dom'

const NewsCard = ({
 item
}) => {

  const localTime = LocalTime(item?.publishedAt)
  
  return (
    <div key={item?.content} className='flex flex-col md:flex-row  items-center gap-5 bg-slate-900/20 py-4 px-3 backdrop-filter backdrop-blur h-72 md:h-40 lg:h-64 rounded-lg justify-between'>
      <Link to={item?.url} target='_blank' id="image-container" className='w-full md:w-40 lg:w-60 h-1/4 md:h-full flex flex-shrink-0'>
        <img src={item?.urlToImage} alt={`Image here`} className='object-cover object-center rounded-md backdrop-filter backdrop-blur-md opacity-50 hover:backdrop-filter-none hover:opacity-100 transition-all cursor-pointer' />
      </Link>
      <div id='news-data-container' className='flex flex-col gap-3 items-start  text-left w-full md:h-full -mr-3 overflow-auto'>
        <h2 className='text-xs lg:text-lg font-bold text-sky-600 hover:text-sky-700 transition-all duration-200'><Link to={item?.url}>{item?.title}</Link></h2>
        <h4 className='text-xs font-thin lg:text-sm lg:font-normal text-white/75'>{item?.description?.slice(0,100)}...</h4>
        <p className='hidden lg:block text-xs font-thin text-slate-400 tracking-wide'>{item?.content}</p>
      </div>
      <div id="source-links" className='w-32 lg:w-52 flex text-left gap-5 justify-start h-full flex-shrink-0 flex-col border-l pl-5 overflow-auto'>
        <h3 className='hidden lg:block text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>Author : <span className='text-xs text-slate-200/50 font-light'>{item?.author}</span></h3>
        <h4 className='text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>Published At : <span className='text-xs text-slate-200/50 font-light'>{localTime}</span></h4>
        <h4 className='text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>Source : <Link target='_blank' className='text-xs text-slate-200/50 font-light' to={item?.url}>{item?.source?.name}</Link></h4>
      </div>
    </div>
  )
}

export default NewsCard