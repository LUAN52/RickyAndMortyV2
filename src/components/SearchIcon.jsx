import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SearchContainer ,SearchLink} from './SearchIconStyled';


export default function SearchIcon() {
  return (
    <SearchContainer> 
            <SearchLink to="/search">
                  <BsSearch/>
            </SearchLink>
    </SearchContainer>
  )
}
