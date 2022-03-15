import React,{useCallback} from 'react';

import {getCharactersPage } from "../api/api";
import { useEffect, useState } from "react";
import { MainContainer } from "./MainStyled";
import { CharCard } from './CharCard';
import PaginationButton from './PaginationButton';
import SearchIcon from './SearchIcon';






function Main(){
    const [char,setChar] = useState([]);
    const [obj,setObj] = useState({numberPage:1,actualPage:1});
    console.log(window.location.pathname)

    const changeState = useCallback(obj=>{
      setObj(obj)
    },[])

    useEffect(()=>{
        const get = async ()=>{
            
            
            const {data} = await getCharactersPage(obj.actualPage);
            
           
            setObj({numberPage:data.info.pages,actualPage:obj.actualPage})
            setChar(data.results)
            

        }
        get();
    },[obj.actualPage])
  return <>
  <SearchIcon/> 
  <MainContainer>
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


