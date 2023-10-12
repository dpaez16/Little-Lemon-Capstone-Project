import { render, screen } from '@testing-library/react';
import App from '../App';

test('Home page renders by default', () => {
  render(<App />);

  const keywords = [
    "Social Media",
    "Facebook",
    "Instagram",
    "LinkedIn",
  ];

  keywords.forEach(elem => {
    const textElem = screen.getByText(elem);
    expect(textElem).toBeInTheDocument();
  });
});
