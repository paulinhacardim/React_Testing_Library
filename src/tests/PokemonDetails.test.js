import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('', () => { });

describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);

    const detalhesPokemon = screen.getByRole('link', { name: / more details/i });
    expect(detalhesPokemon).toBeInTheDocument();
    userEvent.click(detalhesPokemon);

    const names = screen.getByRole('heading', { name: /pikachu details/i });
    expect(names).toBeInTheDocument();
    // expect(detalhesPokemon).not.toBeInTheDocument();

    const sumario = screen.getByRole('heading', { name: /summary/i });
    expect(sumario).toBeInTheDocument();

    const textoPokemon = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat./i);
    expect(textoPokemon).toBeInTheDocument();
  });

  it('Teste se existe na página uma seção com os mapas contendo as localizações', () => {
    renderWithRouter(<App />);
    const detalhesPokemon = screen.getByRole('link', { name: / more details/i });
    expect(detalhesPokemon).toBeInTheDocument();
    userEvent.click(detalhesPokemon);

    const gamePokemon = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(gamePokemon).toBeInTheDocument();

    const localizacao = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(localizacao).toHaveLength(2);
    expect(localizacao[0].src).toContain('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(localizacao[1].src).toContain('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');

    const pokemonFavoritado = screen.getByLabelText(/pokémon favoritado\?/i);
    expect(pokemonFavoritado).toBeInTheDocument();

    const listaFavoritos = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(listaFavoritos).toBeInTheDocument();
  });

  it('A página deve exibir um checkbox que permite favoritar o Pokémon', () => {
    renderWithRouter(<App />);

    const linkPokemon = screen.getByRole('link', { name: /more details/i });
    expect(linkPokemon).toBeInTheDocument();
    userEvent.click(linkPokemon);

    const Favoritos = screen.getByText(/pokémon favoritado\?/i);
    expect(Favoritos).toBeInTheDocument();
  });

  it('Cliques alternados no checkbox devem adicionar e remover respectivamente o Pokémon da lista de favoritos', () => {
    renderWithRouter(<App />);

    const linkPokemon = screen.getByRole('link', { name: /more details/i });
    expect(linkPokemon).toBeInTheDocument();
    userEvent.click(linkPokemon);

    const Favoritos = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(Favoritos);

    const imagemFavoritos = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(imagemFavoritos).toBeInTheDocument();
    userEvent.click(imagemFavoritos);
    // expect(imagemFavoritos).not.toBeInTheDocument();
  });

  it('O label do checkbox deve conter o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);

    const linkPokemon = screen.getByRole('link', { name: /more details/i });
    expect(linkPokemon).toBeInTheDocument();
    userEvent.click(linkPokemon);

    const labelBox = screen.getByText(/pokémon favoritado\?/i);
    expect(labelBox).toBeInTheDocument();
  });
});
