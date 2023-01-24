import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';
import App from '../App';

test('', () => { });

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const pokedex = screen.getByRole('heading', { level: 2, name: /Encountered Pokémon/i });
    expect(pokedex).toHaveTextContent('Encountered Pokémon');
  });

  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);

    const proximoPokemon = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(proximoPokemon).toBeInTheDocument();

    pokemonList.forEach((pokemon) => {
      const listaName = screen.getByText(pokemon.name);
      expect(listaName).toBeInTheDocument();
      userEvent.click(proximoPokemon);
    });
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const botaoFiltrar = screen.getAllByTestId('pokemon-type-button');
    expect(botaoFiltrar).toHaveLength(7);

    const filtrarTodos = screen.getByRole('button', { name: /All/i });
    expect(filtrarTodos).toBeInTheDocument();

    const typePsychic = screen.getByRole('button', { name: /Psychic/i });
    expect(typePsychic).toBeInTheDocument();
    userEvent.click(typePsychic);
    expect(screen.getByText(/alakazam/i)).toBeInTheDocument();
    userEvent.click(filtrarTodos);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const filtrarTodos = screen.getByRole('button', { name: /All/i });
    expect(filtrarTodos).toBeInTheDocument();

    const typePsychic = screen.getByRole('button', { name: /Psychic/i });
    userEvent.click(typePsychic);
    expect(screen.getByText(/alakazam/i)).toBeInTheDocument();
  });
});
