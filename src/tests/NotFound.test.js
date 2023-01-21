import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('', () => { });

describe('Teste o componente <NotFound.js />', () => {
  it('Page requested not found', () => {
    renderWithRouter(<App />);

    const naoEncontrado = screen.getByRole('heading', { level: 2, name: /Page requested not found/i });
    expect(naoEncontrado).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<App />);

    const imagem = screen.getByRole('img', { name: /pikachu crying because the page requested was not found/i });
    // expect(imagem).toBeInTheDocument();
    expect(imagem.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
