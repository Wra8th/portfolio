import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar(){
  return(
    <header className="yellowish">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to='/' exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-700 font-bold tracking-widest">
            Yash
          </NavLink>
          <NavLink to='/post' activeClassName="text-pink-500  " className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 bold hover:text-blue-700 ">
            Posts
          </NavLink>
          <NavLink to='/project' activeClassName="text-pink-500  "className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 bold hover:text-blue-700 ">
            Projects
          </NavLink>
          <NavLink to='/about' activeClassName="text-pink-500  "className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 bold hover:text-blue-700 ">
            About me 
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://github.com/Wra8th" className="mr-4" target="_blank" fgColor="#fff" style={{height:25 , width:25}}/>
          <SocialIcon url="https://www.instagram.com/lodhiya_yash/" className="mr-4" target="_blank" fgColor="#fff" style={{height:25 , width:25}}/>
          <SocialIcon url="https://www.linkedin.com/in/yash-lodhiya-817254192/" className="mr-4" target="_blank" fgColor="#fff" style={{height:25 , width:25}}/>
        </div>  
      </div>
    </header>
  )
}