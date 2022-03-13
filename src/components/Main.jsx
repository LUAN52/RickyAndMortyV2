import React from 'react';

import {getCharactersPage } from "../api/api";
import { useEffect, useState } from "react";
import { MainContainer } from "./MainStyled";
import { CharCard } from './CharCard';
import PaginationButton from './PaginationButton';
import { Link } from 'react-router-dom';




function Main(){
    const [char,setChar] = useState([]);
    const [obj,setObj] = useState({numberPage:1,actualPage:1});


    const changeState = (obj) =>{
      setObj(obj)
    }


    
    useEffect(()=>{
        const get = async ()=>{
            
            
            const {data} = await getCharactersPage(obj.actualPage);
            console.log(data);
           
            setObj({numberPage:data.info.pages,actualPage:obj.actualPage})
            setChar(data.results)
            

        }
        get();
    },[obj.actualPage])
  return <><MainContainer>
      {     
          char.map((item,index)=>(
            <CharCard key={index} item={item}/>
          ))
      }
        
  </MainContainer>
    <PaginationButton obj={obj} changeState={changeState} /></>
  ;
}

export default Main;


