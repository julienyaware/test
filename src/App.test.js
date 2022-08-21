import { render, screen } from '@testing-library/react';
import App from './App';
import MainPage from './components/MainPage/MainPage'

test('renders main page that displays live width', () => {
  render(<MainPage />);
  const liveWidthDisplay = screen.getByText(/Live Width/i);
  expect(liveWidthDisplay).toBeInTheDocument();
});
