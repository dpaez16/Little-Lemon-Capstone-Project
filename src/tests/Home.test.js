import { render, screen } from '@testing-library/react';
import { BrowserRouterWrapper } from './testHelpers';
import Home from '../components/pages/home/Home';

test('Home page renders restaurant intro', () => {
    render(BrowserRouterWrapper(<Home />));

    const header = screen.getByText("Little Lemon Restaurant");
    expect(header).toBeInTheDocument();

    const subheading = screen.getByText("Chicago");
    expect(subheading).toBeInTheDocument();

    const reserveTableButton = screen.getByText(/^Reserve a Table$/i);
    expect(reserveTableButton).toBeInTheDocument();

    const image = screen.getByAltText('Serving food');
    expect(image).toBeInTheDocument();
});

test('Home page renders specials', () => {
    render(BrowserRouterWrapper(<Home />));

    const header = screen.getByText("Specials");
    expect(header).toBeInTheDocument();

    const specialHeaders = ["Bruschetta", "Greek Salad", "Penne Pasta"];
    specialHeaders.forEach((text, idx) => {
        const elem = screen.getByText(text);
        expect(elem).toBeInTheDocument();
    });
});