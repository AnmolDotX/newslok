import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../storeSlices/articleSlice";
import NewsCard from "./NewsCard";
import SkeletonCard from "./SkeletonCard";

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { articles } = useSelector((state) => state.article.allArticles);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await dispatch(getAllArticles({ lang: "en", page: page }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData(); // Call fetchData once to initialize the items

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchData();
        setPage((prevPage) => (prevPage + 1));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, page]); // Added page to the dependency array

  useEffect(() => {
    // Watch for changes in the articles state and update items
    if (articles) {
      setItems((prevItems) => [...prevItems, ...articles]);
    }
  }, [articles]);

  console.log(items);

  return (
    <div>
      <ul className="flex flex-col gap-8">
        {items.map((item) => {
          if (item?.title !== "[Removed]") {
            return <NewsCard key={item?.title} item={item} />;
          }
        })}
      </ul>
      {loading &&  <div className='flex flex-col gap-5 py-10'>
      <h1 className='mx-auto text-4xl tracking-widest text-yellow-400 font-bold animate-pulse'>
        loading...
      </h1>
      <div className='flex flex-col items-center w-full gap-10'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>}
    </div>
  );
};

export default memo(InfiniteScrollComponent);
