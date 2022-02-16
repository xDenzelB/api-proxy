import { render, screen } from '@testing-library/react';
import App from './App';

test('Search pokemon for a city', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search pokemon for a city/i);
  expect(linkElement).toBeInTheDocument();
});
