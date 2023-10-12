import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { BrowserRouterWrapper, getById } from './testHelpers';
import Reservations from '../components/pages/reservations/Reservations';

async function typeInput(dom, labelId, inputContents) {
    await act(async () => {
        const elem = getById(dom.container, labelId);
        expect(elem).toBeInTheDocument();
        await userEvent.type(elem, inputContents);
        expect(elem).toHaveValue(inputContents);
    });
};

test('Reservations form works on valid input', async () => {
    const dom = render(BrowserRouterWrapper(<Reservations />));

    await typeInput(dom, "firstName", "FIRSTNAME");
    await typeInput(dom, "lastName", "LASTNAME");
    await typeInput(dom, "email", "email@email.com");

    await act(async () => {
        const textBox = screen.getByRole("spinbutton", { name: new RegExp("number of guests", 'i') });
        await userEvent.type(textBox, "1");
        expect(textBox).toHaveValue(1);
    });

    await typeInput(dom, "reservationDate", "2023-01-31");
    await typeInput(dom, "reservationTime", "00:00");

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();

    act(() => {
        fireEvent.click(submitButton);
    });

    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await wait(3000);

    const successText = screen.getByText("Success!");
    expect(successText).toBeInTheDocument();
});

test('Reservations form will not submit on bad input', async () => {
    const dom = render(BrowserRouterWrapper(<Reservations />));

    await typeInput(dom, "firstName", "FIRSTNAME");
    await typeInput(dom, "email", "email");

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();

    act(() => {
        fireEvent.click(submitButton);
        
        const requiredTexts = screen.getAllByText("Required");
        expect(requiredTexts.length > 0);

        const invalidEmailText = screen.getByText("Invalid email address");
        expect(invalidEmailText).toBeInTheDocument();
    });
});