import { render, screen } from '@testing-library/react';
import App from './App';

test('renders company header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /MyCompany/i });
  expect(headerElement).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  const heroText = screen.getByText(/Grow Your Business With Us/i);
  expect(heroText).toBeInTheDocument();
});

test('renders services section', () => {
  render(<App />);
  const serviceText = screen.getByText(/Web Development/i);
  expect(serviceText).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactText = screen.getByText(/Contact Us/i);
  expect(contactText).toBeInTheDocument();
});
