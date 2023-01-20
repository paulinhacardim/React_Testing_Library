import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('', () => { });

describe('Teste o componente <About.js />.', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/about');
    });

    const about = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(about).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/about');
    });
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/about');
    });

    const imagem = screen.getByRole('img', { name: /pokédex/i });
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
