import React, { useState } from 'react'
import { ButtonContainer, ButtonPag } from './PaginationButtonStyled'




export default  function PaginationButton(props)  {
    console.log(props)

    return (
        <ButtonContainer>

            <ButtonPag onClick={()=>{
                if(props.obj.actualPage>1){
                    props.changeState({numberPage:props.obj.numberPage,actualPage:props.obj.actualPage-1})
                }
            }}>anterior</ButtonPag>
            <ButtonPag onClick={()=>{
               
                if(props.obj.actualPage<=props.obj.numberPage)
                {
                    props.changeState({numberPage:props.obj.numberPage,actualPage:props.obj.actualPage+1})    
                }
                
            }}>proximo</ButtonPag>
        </ButtonContainer>
    )
}

