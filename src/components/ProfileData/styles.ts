import styled, { css } from 'styled-components';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';
export const Container = styled.div`
  
`;

export const Flex = styled.div`
display: flex;
align-items: center;

 div {
  margin-left: 24px;

}

 h1{
  font-size: 20px;
  line-height: 1.25;
  color: var(--gray-dark);
  font-weight: 600;
}
h2{
  font-size: 17px;
  color: var(--username);
  font-weight: 300;

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
  width: 16%;
  border-radius: 50%; /* efeito arredondado */

  @media(min-width: 768px){
    width: 100%;
   
    margin-top: -34px;
  }
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

const iconCSS = css`
    
   width: 16px;
   height: 16px;
   fill: var(--icon);
   flex-shrink: 0;
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