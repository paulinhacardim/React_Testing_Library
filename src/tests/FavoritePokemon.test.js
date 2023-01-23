import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('', () => { });

describe('Teste o componente <FavoritePokemon.js />', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<App />);

    const noFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(noFavorite);
    expect(noFavorite).toBeInTheDocument();

    const mensagemErro = screen.getByText(/no favorite pokémon found/i);
    expect(mensagemErro).toBeInTheDocument();
  });

  it('Teste se apenas são exibidos os Pokémon favoritados.', () => {
    renderWithRouter(<App />);

    const favoritar = screen.getByRole('link', { name: /more details/i });
    userEvent.click(favoritar);
    // expect(favoritar).toBeInTheDocument();

    const pokemonFavorito = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(pokemonFavorito);
    // expect(pokemonFavorito).toBeInTheDocument();

    const noFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(noFavorite);
    expect(noFavorite).toBeInTheDocument();

    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
