import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react <Link>', () => {
  render(<App />);
  const <Link>Element = screen.getByText(/learn react/i);
  expect(<Link>Element).toBeInTheDocument();
});
