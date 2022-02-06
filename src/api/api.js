import axios from "axios";


export const getAll = ()=>{

    return axios.get("https://rickandmortyapi.com/api");
}


export const getCharacters = ()=>{

    return axios.get("https://rickandmortyapi.com/api/character");
}


export const getCharactersPage = (page)=>{

    return axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
}