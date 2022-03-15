import React from 'react';
import { DescrContainer, StatusContaier } from './DescriptionStyled';


export default function Description(props) {

  let color = "";


  switch (props.item.item.status) {
    case "Alive": color = "green"
      break;
    case "Dead": color = "red";
      break;
    default:
      color = "black"
  }



  return (
    <DescrContainer>
      <section>
        <h3>{props.item.item.name}</h3>
        <StatusContaier color={color}>
          <div></div>
          <p>{props.item.item.status} - {props.item.item.gender} </p>
        </StatusContaier>
      </section>
    </DescrContainer>
  )
}
