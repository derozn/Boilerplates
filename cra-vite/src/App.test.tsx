import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

const setup = () => {
  return render(<App />);
};

describe('App', () => {
  it('renders text', () => {
    setup();

    expect(screen.getByText('Hello, world!')).toBeVisible();
  });
});
