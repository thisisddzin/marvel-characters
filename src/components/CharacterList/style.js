import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px 10px 10px 10px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 10px 20px 10px 20px;
  background: rgba(241, 234, 234, 0.5);
  padding: 20px;
  border-radius: 5px;

  &:nth-child(odd) {
    transform: rotate(3deg);
  }
  &:nth-child(even) {
    transform: rotate(-2deg);
  }

  li {
    margin-bottom: 5px;
  }

  a {
    background: rgb(197, 7, 7);
    padding: 5px 10px;
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px 3px black;
  }
`;
