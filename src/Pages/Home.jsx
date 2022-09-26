import React, { useState, useEffect } from 'react'
import Banner from '../Components/Banner';
import Loading from "../Components/Loading";
import CardItem from '../Components/CardItem';
import { useContext } from 'react';
import SongsContext from "../Context/SongContext";
import { BsTypeH1 } from 'react-icons/bs';
function Home() {
    const { loading, topSongs } = useContext(SongsContext);




    return (
        <>
        
        <div className=" d-flex justify-content-center col-10 bg">
        {loading ? <Loading /> : <CardItem topSongs={topSongs} />}
        </div>
    </>
    )
}

export default Home