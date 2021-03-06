import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../Components/Header';

describe('Header with Link', () => {
  test('full app rendering/navigating', () => {
    render(<Header />, { wrapper: MemoryRouter });
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('FoodRecipe')).toBeInTheDocument;
  });
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
