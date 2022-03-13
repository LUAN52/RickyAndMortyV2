import styled from "styled-components";
export const ImgContainer = styled.div`
        width:100%;
        height:50%;
       
        
        box-sizing:border-box;

        img{
            width:100%;
            height: 100%;
            border-top-left-radius:5px;
            border-top-right-radius:5px;
             
            
        }

        @media only screen  and (min-width:650px){
            height:100%;
            width:40%;

            img{
                border-top-left-radius:5px;
                 border-bottom-left-radius:5px;
                 border-top-right-radius:0;
            }

            
        }
`


export const CharcacterContainer = styled.div`
    width:100%;
    display:flex;
    justify-self:center;
    flex-direction:column;
   
    height:280px;
    border-radius:5px;
   
    background-color:silver;


    p{
        font-size:max(15px,2vw);
        word-break:break-word;
    }


    @media only screen  and (min-width:650px){

        flex-direction:row;
        height:180px;

        border-top-left-radius:5px;
         border-bottom-left-radius:5px;

        

    }
    
`