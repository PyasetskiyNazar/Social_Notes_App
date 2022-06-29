
import styled from 'styled-components';

export const Button = styled.button`
   display: block;
   padding: 10px;
   border: none;
   border-radius: 5px;
   font-size: 18px;
   color: #fff;
   background-color: #0077cc;
   cursor: pointer;

   :hover {
      opacity: 0.8;
   }

   :active {
      background-color: #005fa3;
   }
`
export const ButtonCustom = styled.button`
  display: inline-block;  
  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid  #0077cc;
  border-radius: 3px;  

  :hover,    
  :active {
      color: #004499;
  }
  a:link {    
    text-decoration: none;
  }

`
export const ButtonAsLink = styled.button`
  display: inline-block; 
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid  #0077cc;
  border-radius: 3px;  

  :hover,    
  :active {
      color: #004499;
  }
  a:link {    
    text-decoration: none;
  }
 
`  