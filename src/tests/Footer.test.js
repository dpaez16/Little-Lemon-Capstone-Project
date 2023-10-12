import { render, screen } from '@testing-library/react';
import { BrowserRouterWrapper } from './testHelper';
import Footer from '../components/footer/Footer';

test('Footer renders all links', () => {
  render(BrowserRouterWrapper(<Footer />));

  const keywords = [
    "Navigation",
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Social Media",
    "Facebook",
    "Instagram",
    "LinkedIn",
  ];

  keywords.forEach(elem => {
    const textElem = screen.getByText(elem);
    expect(textElem).toBeInTheDocument();
  });

  const imageElem = screen.getByAltText(/Little Lemon Logo/i);
  expect(imageElem).toBeInTheDocument();
});
