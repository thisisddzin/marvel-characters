import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  img {
    position: fixed;
    left: 10px;
    top: 60px;
    z-index: -1;
  }
`;

export const Form = styled.form`
  width: 500px;
  height: 40px;
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;

  button,
  input {
    border: none;

    &:hover {
      box-shadow: 0 0 1px 1px black;
    }
  }

  input {
    padding: 0 20px;
    flex: 1;
    margin-right: 10px;
    transform: rotate(-5deg);
  }

  button {
    cursor: pointer;
    padding: 10px;
    color: white;
    font-weight: bolder;
    background: rgb(197, 7, 7);
    transform: rotate(20deg);
  }

  @media only screen and (max-width: 550px) {
    width: 350px;
  }

  @media only screen and (max-width: 400px) {
    width: 300px;
  }
`;

export const Load = styled.span`
  font-size: 50px;
  color: red;
  margin-top: 100px;
`;
