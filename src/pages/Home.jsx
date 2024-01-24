import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllArticles } from '../storeSlices/articleSlice';
import { HomeCarousel, InfiniteScrollComponent, ScrollToTopButton } from '../components';

const Home = () => {

  const [allArticles, setAllArticles] = useState([]);
  const dispatch = useDispatch();

  // to get the all the article whenever page loads and store it to RTK

  useEffect(() => {
    dispatch(getAllArticles({lang : 'en', page : 1}));
  }, [dispatch]);



  
  // get the data from RTK store

  const {articles, totalResults} = useSelector((state) => state.article.allArticles);


  // console.log(allArticles);

  // let's set it to a state to use it on this page

  useEffect(() => {
    if(articles) {
      setAllArticles(articles)
    }
  },[articles]);

  return (
    <>
      <HomeCarousel allArticles={allArticles}/>
      <section id="top-headlines" className='text-white text-center'>
        <h1 className='text-3xl font-extrabold tracking-wider text-yellow-400 my-8'>Top Headlines</h1>
        <div className='w-[80vw] mx-auto'>
          <InfiniteScrollComponent/>
        </div>
        <div className='z-10 sticky w-[80vw] flex bottom-8 mx-auto justify-end'>
        <ScrollToTopButton />
      </div>
      </section>
    </>
  )
}

export default memo(Home)