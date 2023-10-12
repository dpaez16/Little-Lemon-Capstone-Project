import { render, screen } from '@testing-library/react';
import { BrowserRouterWrapper } from './testHelper';
import Navbar from '../components/navbar/Navbar';

test('Navbar renders all links', () => {
  render(BrowserRouterWrapper(<Navbar />));

  const keywords = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
  ];

  keywords.forEach(elem => {
    const textElems = screen.getAllByText(elem);
    expect(textElems.length === 2);
  });

  const imageElem = screen.getByAltText(/Little Lemon Logo/i);
  expect(imageElem).toBeInTheDocument();
});
