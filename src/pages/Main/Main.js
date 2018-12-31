import React, { Fragment, Component } from 'react';

import spider from '../../assets/images/spiderman.png';
import Header from '../../components/Header/Header';
import CharacterList from '../../components/CharacterList/CharacterList';

import GlobalStyle from '../../styles/global';
import { Container, Form } from './style';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    this.setState({ characters: await this.runApi() });
  }

  runApi = async () => {
    try {
      const characters = await api.get(
        'v1/public/characters?ts=1&apikey=19428850a6851671977e12fb9d5a84ed&hash=08d676a40ca9fef1ab746bbf88ca1df8',
      );

      return characters.data.data.results;
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <Container>
          <img src={spider} height="80%" alt="spiderman" />
          <Form>
            <input placeholder="Insert the name of the character." type="text" />
            <button onClick={this.runApi}>Search</button>
          </Form>
          <CharacterList characters={this.state.characters} />
        </Container>
      </Fragment>
    );
  }
}
