import React from 'react';

import { 
  Container,
  Breadcrumb,
  RepoIcon,
  Stars,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon


 } from './styles';
import { Link } from 'react-router-dom';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/EmersonGomes21'} >
          EmersonGomes21
         </Link>
        <span>/</span>

        <Link className={'reponame'} to={'/EmersonGomes21/Netflix-Clone-React.js'}>Netflix-Clone-React.js</Link>
      </Breadcrumb>
      <p>Este é um clone da pagina inicial do Netflix, feito para fins didáticos e aperfeiçoamentos de habilidades com o Front-end, utilizando o React.js e consumindo dados de API.</p>
      <Stars>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
       

        <li>
          <ForkIcon />
          <b>1</b>
          <span>Forks</span>
        </li>
        </Stars>
        
        <LinkButton href={'https://github.com/EmersonGomes21/Netflix-Clone-React.js'}>
          <GithubIcon/>
          <span>View on Github </span>
        </LinkButton>
    

    </Container>
  );
};

export default Repo;