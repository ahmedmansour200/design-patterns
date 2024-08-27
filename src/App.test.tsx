import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('<App />', () => {
  test('renders Hello, World heading', () => {
    render(<App />);
    expect(screen.getByText(/Hello, World/i)).toBeInTheDocument();
  });

  test('displays default toast message when Default button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Default/i));
    expect(screen.getByText(/Default masseg/i)).toBeInTheDocument();
  });

  test('displays success toast message when Success button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Success ✅/i));
    expect(screen.getByText(/Success masseg/i)).toBeInTheDocument();
  });

  test('displays error toast message when Error button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Error ❌/i));
    expect(screen.getByText(/Error masseg/i)).toBeInTheDocument();
  });

});
