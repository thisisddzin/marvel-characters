import React, { Fragment, Component } from 'react';

import spider from '../../assets/images/spiderman.png';
import Header from '../../components/Header/Header';
import CharacterList from '../../components/CharacterList/CharacterList';

import GlobalStyle from '../../styles/global';
import { Container, Form, Load } from './style';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    characters: [],
    loading: false,
    inputValue: '',
    inputError: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading: false, characters: await this.runApi() });
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

  search = async (e) => {
    e.preventDefault();

    this.setState({ loading: true, characters: await this.runApi(), inputError: false });

    try {
      const { characters, inputValue } = this.state;
      const regex = new RegExp(inputValue, 'i');
      const char = characters.filter(char => char.name.match(regex));
      console.log(char);
      if (char.length < 1 ) {
        this.setState({ inputError: true });
      }

      return this.setState({ characters: char });
    } catch (err) {
      console.warn(err);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { characters, loading, inputError, inputValue } = this.state;

    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <Container>
          <img src={spider} height="80%" alt="spiderman" />
          <Form onSubmit={this.search}>
            <input  value={ inputValue } onChange={ e => this.setState({ inputValue: e.target.value })} placeholder="Insert the name of the character." type="text" />
            <button type="submit">Search</button>
          </Form>
          {loading ? (
            <Load>
              <i className="fa fa-spinner fa-pulse" />
            </Load>
          ) : (
            <CharacterList characters={characters} />
          )}
          {inputError ? <Load>Não encontrado.</Load> : null}
        </Container>
      </Fragment>
    );
  }
}
