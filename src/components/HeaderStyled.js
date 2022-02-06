import styled from "styled-components";
import Font from "../fonts/get.ttf";
import img from "../images/ceu-estrelado.png"

export const HeaderContainer = styled.div`
    width:100%;
    height:7rem;
    background-image: url(${img});
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
    

    h1{
        color:#97ce4c;
        font-family:"get";
        margin:0;
        font-size:5em
       
    }

  

    @media only screen  and  (min-width:355px) and (max-width:550px)
    {

        h1{
            font-size:3em
        }
    }

    @media only screen  and  (max-width:354px)
    {

        h1{
            font-size:2em
        }
    }

    @font-face{
            font-family:get;
            src:url(${Font})
        }
       

`