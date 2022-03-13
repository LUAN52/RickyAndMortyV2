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

export const getByStatus=(status,page)=>{
    return axios.get(`https://rickandmortyapi.com/api/character?page=${page}&status=${status}`);
}


export const getByName=(name,page)=>{
    return axios.get(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`);
}


export const getByGender=(gender,page)=>{
    return axios.get(`https://rickandmortyapi.com/api/character?page=${page}&gender=${gender}`);
}