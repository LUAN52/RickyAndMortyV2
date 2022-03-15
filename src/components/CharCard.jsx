
import React,{memo} from 'react'
import { CharcacterContainer, ImgContainer } from './CharCardStyled'
import Description from './Description'

export const CharCardItem = (props) => {
    return (
        <CharcacterContainer>
            <ImgContainer>
                <img src={props.item.image} alt="char" />
            </ImgContainer>
            <Description item={props}/>
        </CharcacterContainer>
    )
}


export const CharCard = memo(CharCardItem)