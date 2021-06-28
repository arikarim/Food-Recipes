import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Containers/Home';
import createTestStore from './store';

describe('Home', () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });

  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});

