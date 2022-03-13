import React from 'react'
import { ErrorContainer } from './ErrorPageStyled'

const ErrorPage = (props) => {

    console.log(props.error)

    let msg = "";

    if(props.error===1)
    {
         msg = "busca inválida";
    } else {
        msg = "tipo de busca não selecionada ou campo em branco";
    }

    return (
        <ErrorContainer>
                <p>{msg}</p>
        </ErrorContainer>
    )
}

export default ErrorPage;