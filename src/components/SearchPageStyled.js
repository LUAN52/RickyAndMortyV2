import styled from "styled-components";

export const SearchContainer=styled.div`

    background-color:rgb(36, 40, 47);
    display: flex;
    flex-direction:column;
    min-height:100vh;
    margin-top:20px;
    align-items:center;
    width:100%;

    

        select{
            max-width:80%;
            display:block;
        }

    


`


export const Title = styled.h2`

        margin:0;
        margin-top:20px;
        color:white;
        background-color:grey;
        width:100px;
        text-align:center;

`


export const FormContainer = styled.div`

        margin-top:50px;
        width:65%;
        display:flex;
        flex-direction:column;
        align-items:center;

`


export const SearchForm = styled.form`

    width:80%;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;

    input{
        width:80%;
    }

    button{
        margin-top:10px;
        min-width:40%;
        color:white;
        font-weight:1000;
        background-color:blue;
        border-radius:10px;
    }

`


export const ResultContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    border:2px solid black;
    padding:5px;
    margin-bottom:10px;
    align-items:center;
    justify-content:center;
    min-height:400px;
    width:70%;
    margin-top:20px;
    gap:5px;
    margin-top:30px;

   

    @media screen  and (min-width:600px)
    {
        grid-template-columns: repeat(5,1fr);
    }
   
`

export const ImgContainer = styled.div`
    width:50px;
    height:50px;;
    justify-self:center;

    @media screen  and (min-width:600px)
    {
        width:100px;
        height:100px;
    }

    img{
        width:100%;
        height:100%;
    }

`
