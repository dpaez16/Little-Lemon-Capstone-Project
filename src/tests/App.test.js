import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Can navigate to reservations page', () => {
  render(<App />);

  const reserveTableButton = screen.getByText(/^Reserve a Table$/i);
  expect(reserveTableButton).toBeInTheDocument();

  fireEvent.click(reserveTableButton);

  const bookAReservationHeader = screen.getByText("Book a Reservation");
  expect(bookAReservationHeader).toBeInTheDocument();
});
