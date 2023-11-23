import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NewsCard } from "../components";
import { useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  const navigate = useNavigate()

  useEffect(() => {
    if (bookmarks.length < 1) navigate('/') 
  },[bookmarks])

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <section className='flex flex-col gap-5 py-10 w-[80vw] mx-auto'>
      <h2 className='text-4xl font-bold text-yellow-400 tracking-wider'>
        Bookmarked Articles
      </h2>
      <ul className="flex flex-col gap-5">
        {bookmarks.map((article) => (
          <NewsCard key={article?.title} item={article} />
        ))}
      </ul>
    </section>
  );
};

export default Bookmarks;
