import styled, { css } from 'styled-components';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';
import { HiOutlineEmojiHappy } from 'react-icons/hi';

export const Container = styled.div`
  
`;
const iconCSS = css`
    
   width: 16px;
   height: 16px;
   fill: var(--icon);
   flex-shrink: 0;
`;

export const Flex = styled.div`
display: flex;
align-items: center;
outline: none;

 div {
  margin-left: 24px;

}

 h1{
  font-size: 25px;
  line-height: 1.25;
  color: var(--gray-dark);
  font-weight: 600;
}
h2{
  font-size: 16px;
  color: var(--username);
  font-weight: 300;

}
    a{
      display: flex;
      position: relative;
      width: 38px;
      height: 38px;
      background: var(--primary);
      top:  -70px;
      left: 220px; 
      border-radius: 50%;
      border: 1px solid var(--border);
      text-decoration: none;
      flex-shrink: 0;

      > span{
        display: none;
        
      }

      &:hover, &:focus{
        display: flex;
        width: 90px;
        height: 38px;
        border-radius: 20px;
        justify-content: space-around;
        align-items: center;
        text-align: center;
          
        > span{
          display: flex;
          font-size: 12px;
          color: var(--gray);

          &:hover, &:focus{
            color: var(--link);
           
          }
          
        }

        >.icon{
        position: relative;
        top: 0px;
        left: 4px;
        }
      }
       }

p{
  font-size: 16px;
  margin-top: 10px;

  @media(max-width: 768px){
    font-size: 14px;
  }

  
}

@media(min-width: 768px){
  flex-direction: column;
  align-items: flex-start;
  font-size: 26px;

  div{
    margin-left: 0;
    margin-top: 16px;
  }
}
  


`;

export const Avatar = styled.img`
position: relative;
 left: -20px;  
  width: 100%;
  border-radius: 50%; /* efeito arredondado */
  
  @media(min-width: 768px){

    margin-top: -34px;
  }
`;

export const HappyIcon = styled(HiOutlineEmojiHappy)`${iconCSS}
       display: flex;
       position: relative;
       top: 8px;
       left: 8px;
       fill: var(--primary);
       width: 20px;
       height: 20px;
       align-items: center;
       justify-content: center;
      
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  font-size: 16px;

  li{
    display: flex;
    align-items: center;
    position: relative;
    left: -9px;  
  }

  span{
    color: var(--gray);
  }
  * /*Todos os items internos*/{
    margin-left: 5px;
  }

`;



export const PeopleIcon = styled(RiGroupLine)`${iconCSS}
 margin-right: 5px;
`;

export const Column = styled.ul`
  li{
   display:flex;
   align-items: center;
   font-size: 13px;
 }
 li + li{
   margin-top: 10px;
 }
 span{
   margin-left: 5px;
   overflow: hidden;
 }

`;

export const CompanyIcon = styled(RiBuilding4Line)`${iconCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`${iconCSS}
`;

export const EmailIcon = styled(RiMailLine)`${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`${iconCSS}
`;