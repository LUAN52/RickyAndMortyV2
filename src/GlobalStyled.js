import { createGlobalStyle } from 'styled-components'


export const GlobalStyled = createGlobalStyle`

    body,#root,html{
        min-height:100vh;
        margin:0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
       
    }

    #root{
        display: flex;
        flex-direction:column;
       
        
        
    }

`