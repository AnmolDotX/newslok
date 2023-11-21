import React, { useState } from "react";

const Search = ({ handleSearch}) => {
    const [query, setQuery] = useState("")

    const searchFun = (e, query) => {
        e.preventDefault()
        handleSearch(query);
        setQuery("")
    }

  return (
    <form className="shadow-slate-700 shadow-lg border-yellow-500 border rounded" onSubmit={(e) => searchFun(e,query)}>
      <input
        className=' py-[6px] px-3 rounded-l text-white bg-slate-950  focus:border-none outline-none'
        type='text'
        placeholder='search the article'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
      <button className='py-[6px] px-3 rounded-r bg-yellow-400 text-black' type='submit'>
        Search
      </button>
    </form>
  );
};

export default Search;
