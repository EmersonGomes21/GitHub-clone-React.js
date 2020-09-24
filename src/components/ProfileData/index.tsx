import React from 'react';

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
  HappyIcon
} from './styles';
import { Link } from 'react-router-dom';

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
  bio?: string;
}

const ProfileData: React.FC<Props> = ({

  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
  bio
}) => {
  return (
    <Container>
      <Flex>
        <div className="container-img-happy">
          <Avatar src={avatarUrl} alt={username}/>
          
          <Link to="">
          <HappyIcon className="icon"/>
          <span>set status</span>
        </Link>
        </div>

        

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
          <p>{bio}</p>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>

        <li>
          <b>{following}</b>
          <span>following</span>
        </li>

      </Row>

      <Column>
        {company &&/**se existir, exiba */ (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}

        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}


        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}

        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}

      </Column>

    </Container>

  )
}

export default ProfileData;