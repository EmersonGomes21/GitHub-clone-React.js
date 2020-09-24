import styled, {css} from 'styled-components';
import {RiBookMarkLine, RiStarLine} from 'react-icons/ri';
import {AiOutlineFork} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

    > p{
      font-size: 15px;
      max-width: 40vw;
      text-align: initial;
      
      @media(max-width: 768px){
        max-width: 70vw;
        font-size: 15px;
      }
    }
`;


export const Breadcrumb = styled.div`
margin-bottom: 16px;
display: flex;
align-items: center;
flex-wrap: nowrap;
white-space: nowrap;
font-size: 16px;
 > a {
   color: var(--link);
   text-decoration: none;

   @media(max-width: 768px){
        max-width: 70vw;
        
      }
  
   &:focus, &:hover{
     text-decoration: underline ;
   }

   &.username{
     margin-left: 8px;  
     font-size: 14px;

    
    
   }


   &.reponame{
     font-weight: 600;
     font-size: 16px;
     
   }

   &.username, &.reponame{
    @media(min-width: 768px){
      
      font-size: 20px;
    }
   } 
   
 }


 > span{
     padding: 0 5px;
   }


`;

const iconCSS = css`
 width: 16px;
 height: 16px;
 fill: var(--icon);
 flex-shrink: 0;
`;
export const RepoIcon = styled(RiBookMarkLine)`${iconCSS}
`;


export const Stars = styled.ul`
  margin-top: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  > li {
    display: flex;
    align-items: center;
    margin-right: 9px;

    > * {
      margin-right: 7px;
      color: var(--gray);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`${iconCSS}
`;

export const LinkButton = styled.a`
margin-top: 24px;
background: var(--gray-dark);
padding: 12px 17px;
border-radius: 24px;
width: max-content;
display: flex;
align-items: center;
text-decoration: none;
 > span{
   color: var(--primary);
  
 }
 > svg{
   fill: var(--primary);
   margin-right: 10px;
 }

`;
export const GithubIcon = styled(FaGithub)`${iconCSS}
`;
