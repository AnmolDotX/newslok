import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllArticles } from '../storeSlices/articleSlice';

const Home = () => {

  const [allArticles, setAllArticles] = useState([]);
  const dispatch = useDispatch();

  // to get the all the article whenever page loads and store it to RTK
  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  // get the data from RTK store
  const {articles} = useSelector((state) => state.article.allArticles);

  // let's set it to a state to use it on this page
  useEffect(() => {
    setAllArticles(articles)
  },[articles]);


  console.log(allArticles);

  

  return (
    <div className='text-white'>Home</div>
  )
}

export default Home