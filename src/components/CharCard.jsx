
import React from 'react'
import { CharcacterContainer, ImgContainer } from './CharCardStyled'
import Description from './Description'

export const CharCard = (props) => {
    return (
        <CharcacterContainer>
            <ImgContainer>
                <img src={props.item.image} alt="char image" />
            </ImgContainer>
            <Description item={props}/>
        </CharcacterContainer>
    )
}