import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call.
 */
const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (data) => {
        setLoading(true);

        await wait(2000);
        setResponse(`Your reservation has been booked successfully! You should receive an email from us confirming the reservation. See you there!`);

        setLoading(false);
    };

    return { isLoading, response, submit };
};

export default useSubmit;

