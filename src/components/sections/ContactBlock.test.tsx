import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { ContactBlock } from './ContactBlock';

describe('ContactBlock', () => {
  it('shows a confirmation after submit', () => {
    render(
      <MemoryRouter>
        <ContactBlock />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Alex' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'alex@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Need support with a utility retrofit.' },
    });
    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    expect(screen.getByText(/inquiry received/i)).toBeInTheDocument();
  });
});
