import React from 'react';

import { Container, List } from './style';

const CharacterList = ({ characters }) => (
  <Container>
    {characters.map(character => (
      <List key={character.id}>
        <li>
          <h3>{character.name}</h3>
        </li>
        <li>
          {' '}
          {character.description}
          {' '}
        </li>
        <a target="_blank" rel="noopener noreferrer" href={character.urls[0].url}>Ver mais.</a>
      </List>
    ))}
  </Container>
);

export default CharacterList;
