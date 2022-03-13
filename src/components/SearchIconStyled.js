import styled from "styled-components";
import { Link } from "react-router-dom";


export const SearchContainer = styled.nav`

    display:flex;
    align-items:center;
    justify-content:end;
    border:2px solid black;
    height: 30px;
    font-size:1.5rem;
    align-items:center;
    padding:5px;
   
    
    Link{
        color:black;
    }

`
export const SearchLink = styled(Link)`
    color:black;
    text-decoration:none;

`