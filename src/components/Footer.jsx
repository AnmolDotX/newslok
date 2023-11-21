import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='text-white flex items-center w-full px-20 mx-auto justify-between h-96 bg-slate-950/50 shadow-black shadow-inner backdrop-filter backdrop-blur-xl'>
      <Link to='/' className=' p-3 rounded-lg shadow-black shadow-2xl'>
        <h1 className='text-5xl font-bold font-serif text-yellow-300 active:text-yellow-500'>
          News Lok
        </h1>
      </Link>
      <div className='flex flex-col gap-5'>
        <div id='contact' className='flex items-center gap-5'>
          <span className='tracking-wider font-sans'>Wanna chit-chat ?</span>
          <Link
            to='/contact-us'
            className='text-sm font-bold text-yellow-400 tracking-wider hover:text-yellow-200 transition-all'
          >
            Contact here
          </Link>
        </div>
        <div id='contact' className='flex items-center gap-5'>
          <span className='tracking-wider font-sans'>
            Wanna know about us ?
          </span>
          <Link
            to='/about-us'
            className='text-sm font-bold text-yellow-400 tracking-wider hover:text-yellow-200 transition-all'
          >
            See here
          </Link>
        </div>
      </div>
      <div id='socials' className='flex flex-col gap-5 items-center'>
        <div>
          <h1 className="text-yellow-400 font-bold tracking-widest">Socials</h1>
        </div>
        <div className="flex items-center gap-5 text-2xl">
          <Link to="https://github.com/AnmolDotX/newslok" target="_blank" className="hover:text-sky-500 rounded-full p-3 hover:shadow transition-all duration-200 hover:shadow-yellow-400">
            <FaGithub />
          </Link>
          <Link to="https://twitter.com/AnmolDotX" target="_blank" className="hover:text-sky-500 rounded-full p-3 hover:shadow transition-all duration-200 hover:shadow-yellow-400">
            <FaSquareXTwitter />
          </Link>
          <Link to="https://www.linkedin.com/in/anmoldotx/" target="_blank" className="hover:text-sky-500 rounded-full p-3 hover:shadow transition-all duration-200 hover:shadow-yellow-400">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
