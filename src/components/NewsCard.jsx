import React from 'react'
import LocalTime from '../utils/LocalTime'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addBookmark, removeBookmark } from '../storeSlices/bookmarksSlice'
import { BsBookmarkPlus, BsBookmarkXFill } from 'react-icons/bs'

const NewsCard = ({
 item
}) => {
  // console.log(item);
  const localTime = LocalTime(item?.publishedAt)

  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks)
  console.log(bookmarks);

  const handleBookmark = () => {
    if(isBookmarked(item.url)) {
      dispatch(removeBookmark({url : item.url}));
    } else {
      dispatch(addBookmark(item));
    }
  }

  const isBookmarked = (articleUrl) => {
    return bookmarks.some((article) => article.url === articleUrl)
  }

  
  return (
    <div key={item?.content} className='flex flex-col md:flex-row  items-center gap-5 bg-slate-950/80 py-4 px-3 backdrop-filter backdrop-blur h-72 md:h-40 lg:h-64 rounded-lg justify-between'>
      <Link to={item?.url} target='_blank' id="image-container" className='w-full md:w-40 lg:w-60 h-1/4 md:h-full flex flex-shrink-0'>
        <img src={item?.urlToImage} alt={`Image here`} className='object-cover object-center rounded-md backdrop-filter backdrop-blur-md opacity-50 hover:backdrop-filter-none hover:opacity-100 transition-all cursor-pointer' title='Article Cover Image' />
      </Link>
      <div id='news-data-container' className='flex flex-col gap-3 items-start  text-left w-full md:h-full -mr-3 overflow-auto'>
        <h2 className='text-xs lg:text-lg font-bold text-sky-600 hover:text-sky-700 transition-all duration-200'><Link to={item?.url} target='_blank' title='Title of article'>{item?.title}</Link></h2>
        <h4 className='text-xs font-thin lg:text-sm lg:font-normal text-white/75'>{item?.description?.slice(0,100)}...</h4>
        <p className='hidden lg:block text-xs font-thin text-slate-400 tracking-wide'>{item?.content}</p>
      </div>
      <div id="source-links" className='w-32 lg:w-52 flex text-left gap-5 justify-start h-full flex-shrink-0 flex-col border-x px-5 overflow-auto'>
        <h3 className='hidden lg:block text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>Author : <span className='text-xs text-slate-200/50 font-light'>{item?.author}</span></h3>
        <h4 className='text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>Published At : <span className='text-xs text-slate-200/50 font-light'>{localTime}</span></h4>
        <h4 className='text-xs font-light lg:text-sm lg:font-normal text-yellow-400'>Source : <Link target='_blank' className='text-xs text-slate-200/50 font-light' to={item?.url}>{item?.source?.name}</Link></h4>
      </div>
      <div className='flex flex-col justify-start items-center h-full'>
        <button onClick={handleBookmark} className='bg-black shadow-black shadow-lg text-lg font-bold w-8 h-8 flex items-center justify-center rounded'>
        {
          isBookmarked(item.url) ? <BsBookmarkXFill title='Already bookmarked' className='text-sky-600' /> : <BsBookmarkPlus className='text-sky-600' title='Bookmark the article' /> 
        }
        </button>
      </div>
    </div>
  )
}

export default NewsCard