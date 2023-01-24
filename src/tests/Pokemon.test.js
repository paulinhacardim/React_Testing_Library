import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('', () => { });

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const nomePokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(nomePokemon);

    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();

    const tipoDoPikachu = screen.getByText('Electric');
    expect(tipoDoPikachu).toBeInTheDocument();

    const pesoMedio = screen.getByText(/Average weight: 6.0 kg/i);
    expect(pesoMedio).toBeInTheDocument();

    const imagem = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imagem.alt).toBe('Pikachu sprite');
    expect(imagem.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon.', () => {
    renderWithRouter(<App />);

    const linkNavegacao = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkNavegacao);
  });

  it('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação', () => {
    renderWithRouter(<App />);

    const redirecionamento = screen.getByRole('link', { name: /more details/i });
    userEvent.click(redirecionamento);
    expect(screen.getByRole('heading', { name: /summary/i })).toBeInTheDocument();
    // expect(redirecionamento).toBeInTheDocument();
  });

  it('Teste também se a URL exibida no navegador muda para /pokemon/', () => {
    renderWithRouter(<App />);

    const redirecionamento = screen.getByRole('link', { name: /more details/i });
    userEvent.click(redirecionamento);

    const marcarIconeEstrela = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(marcarIconeEstrela).toBeInTheDocument();
    userEvent.click(marcarIconeEstrela);
    expect(screen.getByRole('img', { name: /pikachu is marked as favorite/i })).toHaveAttribute('src', '/star-icon.svg');
  });
});
