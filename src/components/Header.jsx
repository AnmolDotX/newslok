import React from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const allCategories = [
    {
      category: "All News",
      endpoint: "all-news",
    },
    {
      category: "Science",
      endpoint: "science",
    },
    {
      category: "Business",
      endpoint: "business",
    },
    {
      category: "Technology",
      endpoint: "technology",
    },
    {
      category: "Health",
      endpoint: "health",
    },
    {
      category: "Sports",
      endpoint: "sports",
    },
    {
      category: "Entertainment",
      endpoint: "entertainment",
    },
  ];

  const bookmarks = useSelector((state) => state.bookmarks)

  return (
    <header className='text-white z-10 sticky top-0 flex items-center w-full gap-10 justify-between py-3 md:py-5 bg-slate-950/75 drop-shadow-2xl shadow-black shadow-2xl px-8 md:px-20 backdrop-filter backdrop-blur-2xl'>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-lg flex flex-shrink-0 mr-5 lg:text-2xl font-extrabold font-serif md:tracking-widest scale-105 text-yellow-400 transition-all"
            : "text-lg lg:text-2xl font-extrabold font-serif tracking-widest text-yellow-200 transition-all flex flex-shrink-0"
        }
        to={`/`}
      >
        News Lok
      </NavLink>
        <div className="flex items-center gap-5">
        <nav className='flex items-center gap-10 text-xs font-light tracking-wide custom-scrollbar overflow-auto'>
          {allCategories?.map((elm) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-xs font-bold scale-105 text-yellow-400 transition-all duration-100 flex flex-shrink-0"
                  : "text-xs text-yellow-200 transition-all duration-100 flex flex-shrink-0"
              }
              key={elm?.endpoint}
              to={`/news-list/${elm?.endpoint}`}
            >
              {elm?.category}
            </NavLink>
          ))}
        </nav>
        <div className={bookmarks?.length > 0 ? "block" : "hidden"}>
            {
              bookmarks?.length > 0 ? <NavLink to="/news-list/bookmarks" className="text-white"><FaBookBookmark className="text-yellow-400" /></NavLink> : null
            }
        </div>
        </div>
    </header>
  );
};

export default Header;
