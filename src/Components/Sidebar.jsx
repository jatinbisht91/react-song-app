import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { BsFillHeartFill } from "react-icons/bs"
import { AiFillHome, AiOutlineSearch } from "react-icons/ai"
import { MdOutlinePlaylistAdd } from "react-icons/md"

function Sidebar() {

 
  const [play, setPlay] = useState(JSON.parse(localStorage.getItem("playlists") || "[]"))
  const navigate = useNavigate()
  console.log(play)
  
  useEffect(() => {
    localStorage.setItem('playlists', JSON.stringify(play));
  }, [play])

  const createPlayList = () => {
    let num=JSON.parse(localStorage.getItem("playlists")).length;
    num++
    
    setPlay(prev => [...prev, `playlist${num}`])
    navigate(`playlist/playlist${num}`)
  }

  return (
    <div className="d-flex flex-column justify-content-center  align-items-center sidebar col-2">
      
      <div className='container'>
         <div className='w-75' >
          <img src="https://www.freepik.com/free-vector/elegant-musical-notes-music-chord-background_5504160.htm#query=music%20notes&position=3&from_view=keyword" alt="music" />
         </div>
      </div>
      
      
      <div className='d-flex flex-column justify-content-center  align-items-center'>

        <span className='py-2'>  <Link to="/" style={{ color: "red" }} className=" d-flex justify-content-start align-items-center text-decoration-none fw-bolder "><AiFillHome /><span className='mx-2 nav'>HOME</span></Link></span>
        <span className='py-2'>  <Link to="/fav" style={{ color: "red" }} className="d-flex justify-content-start align-items-center fw-bolder text-decoration-none "><BsFillHeartFill /><span className='mx-2 nav'>FAVOURITE</span></Link></span>
        <span className='py-2'>  <Link to="/search" style={{ color: "red" }} className=" d-flex justify-content-start align-items-center  fw-bolder text-decoration-none "><AiOutlineSearch /><span className='mx-2 nav'>SEARCH</span></Link></span>
        <span className='py-2 ' onClick={createPlayList}>  <Link to="/playlist" style={{ color: "red" }} className="d-flex justify-content-start align-items-center  fw-bolder text-decoration-none "><MdOutlinePlaylistAdd /><span className='mx-2 nav'>PLAYLIST</span></Link></span>

      </div>

      <ul>
        {play.map((item, index) => {
          return <li key={index}  ><Link to={`/playlist/${item}`} style={{ color: "green", textDecoration: "none" }} className="nav" >{item}</Link></li>
        })}
      </ul>

    </div>
  )
}

export default Sidebar