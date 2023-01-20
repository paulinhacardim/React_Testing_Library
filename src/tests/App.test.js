import { screen } from '@testing-library/react';
import React from 'react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('', () => { });

describe('Teste o componente <App.js />', () => {
  it('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();
  });

  it('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About', () => {
    renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: 'About' });
    expect(about).toBeInTheDocument();
  });

  it('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(favorite).toBeInTheDocument();
  });
});
