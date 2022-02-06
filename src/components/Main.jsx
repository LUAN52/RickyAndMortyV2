import {getCharacters } from "../api/api";
import { useEffect } from "react";

import React from 'react';

function Main() {

    useEffect(()=>{
        const get = async ()=>{
            
            const response = await getCharacters();
            console.log(response);

        }
        get();
    },[])
  return <div>
      fsadfsadfsadf
  </div>;
}

export default Main;


