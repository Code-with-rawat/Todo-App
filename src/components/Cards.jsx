import React from "react";
import NetflixData from '../api/NetflixData.json';
import CardsData from "./CardsData";
const  Cards = ({mode}) =>{
  return ( 
    <>   
     {NetflixData.map((NetflixData)=>(<CardsData NetflixData={NetflixData} key={NetflixData.id} mode={mode}/>
    ))}
    </>
  )
};

export default Cards;
