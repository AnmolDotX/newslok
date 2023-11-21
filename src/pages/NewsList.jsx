import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCategoryArticles,
  getEveryArticle,
} from "../storeSlices/articleSlice";
import { NewsCard, SkeletonCard } from "../components";
import Search from "../components/Search";

const NewsList = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (category === "all-news") {
      console.log(searchQuery);
      searchQuery.length > 0
        ? dispatch(getEveryArticle({ query: searchQuery, lang: "en" }))
        : dispatch(getEveryArticle({ query: "latest", lang: "en" }));
      setSearchQuery("");
    } else {
      searchQuery.length > 0
        ? dispatch(
            getCategoryArticles({ category: category, query: searchQuery })
          )
        : dispatch(
            getCategoryArticles({ category: category, query: "" })
          );
    }
  }, [category, dispatch, searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchQuery("");
  }, [category]);

  let allData;
  if (category === "all-news") {
    allData = useSelector((state) => state.article.everyArticles);
  }

  let categoryData;
  if (category === "science") {
    categoryData = useSelector((state) => state.article.scienceArticles);
  }
  if (category === "business") {
    categoryData = useSelector((state) => state.article.businessArticles);
  }
  if (category === "technology") {
    categoryData = useSelector((state) => state.article.technologyArticles);
  }
  if (category === "health") {
    categoryData = useSelector((state) => state.article.healthArticles);
  }
  if (category === "sports") {
    categoryData = useSelector((state) => state.article.sportsArticles);
  }
  if (category === "entertainment") {
    categoryData = useSelector((state) => state.article.entertainmentArticles);
  }

  useEffect(() => {
    if (category === "all-news") {
      if (allData) {
        setArticles(allData?.articles);
        setIsLoading(false);
      }
    }
    if (categoryData) {
      setArticles(categoryData?.articles);
      setIsLoading(false);
    }
  }, [categoryData, allData]);

  console.log(articles);

  const handleSearch = ( query) => {
    console.log(query);
    setSearchQuery(query);
  };

  return isLoading ? (
    <h1 className='text-2xl font-bold text-white text-center tracking-widest'>
      Loading....
    </h1>
  ) : articles && articles.length > 0 ? (
    <div className='text-white flex flex-col gap-5 py-10'>
      <div className='flex items-center w-[80vw] mx-auto justify-between'>
        <h1 className='text-4xl font-bold text-yellow-400 tracking-wider'>
          {category}
        </h1>
        <Search handleSearch={handleSearch} />
      </div>
      <ul className='flex flex-col gap-10 w-[80vw] mx-auto'>
        {articles &&
          articles?.map((article) => (
            <NewsCard key={article?.title} item={article} />
          ))}
      </ul>
    </div>
  ) : (
    <div className='flex flex-col gap-5 py-10'>
      <h1 className='mx-auto text-4xl tracking-widest text-yellow-400 font-bold animate-pulse'>
        loading...
      </h1>
      <div className='flex flex-col items-center w-full gap-10'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default memo(NewsList);
