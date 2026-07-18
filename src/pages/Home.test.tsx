import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import Home from './Home';

describe('Home page', () => {
  it('renders the main positioning statement', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /industrial utility and infrastructure execution with calm, dependable precision/i,
      }),
    ).toBeInTheDocument();
  });
});
