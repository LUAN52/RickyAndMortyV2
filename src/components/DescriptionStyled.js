import styled from "styled-components";



export const DescrContainer = styled.div`
        width: 100%;
        
        height: 70%;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;

        section{
                margin-left:15px;

    
            h3{
                margin:0;
                word-wrap:break-word;
            }
        }

        @media only screen  and (min-width:650px){
            height:100%;
            width:60%;
        }


`


export const StatusContaier = styled.div`
    display: flex;
    align-items:center;

    div{
        width:6px;
        height:6px;
        background-color:${props=>props.color};
        border-radius:5px;
        margin-right:10px;
        
    }

    p{
        margin:0;
        font-size:max(12px,1.5vw);
        display: line;
        padding:0;
    }

`
    

    



