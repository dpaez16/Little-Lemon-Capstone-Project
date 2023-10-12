import { useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack,
    Spinner,
    useDisclosure
} from "@chakra-ui/react";
import ReservationModal from './reservationModal/ReservationModal';
import * as Yup from 'yup';
import useSubmit from "../../../hooks/useSubmit";
import './Reservations.css';

export default function Reservations() {
    const { isLoading, response, submit } = useSubmit();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            numberOfGuests: "",
            reservationDate: "",
            reservationTime: ""
        },
        onSubmit: (values, {setSubmitting}) => {
            setSubmitting(false);
            submit(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().email("Invalid email address").required('Required'),
            numberOfGuests: Yup.number().required('Required'),
            reservationDate: Yup.date().required('Required'),
            reservationTime: Yup.string().required('Required')
        }),
    });

    const fieldProps = (e) => formik.getFieldProps(e);

    useEffect(() => {
        if (response === null) {
            return;
        }

        onOpen(true);
        formik.resetForm();
    }, [response]);

    return (
        <>
            <VStack
                p={32}
                alignItems="flex-start"
                className='ReservationsPage'
            >
                <ReservationModal isOpen={isOpen} onClose={onClose} response={response} />
                <Heading as="h1">
                    Book a Reservation
                </Heading>
                <Box p={6} rounded="md" w="100%">
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4}>
                    <FormControl isInvalid={formik.errors.firstName}>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Input
                            id="firstName"
                            name="firstName"
                            {...fieldProps('firstName')}
                        />
                        <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.lastName}>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Input
                            id="lastName"
                            name="lastName"
                            {...fieldProps('lastName')}
                        />
                        <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.email}>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            {...fieldProps('email')}
                        />
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.numberOfGuests}>
                        <FormLabel htmlFor="numberOfGuests">Number of Guests</FormLabel>
                        <Input
                            id="numberOfGuests"
                            name="numberOfGuests"
                            type="number"
                            {...fieldProps('numberOfGuests')}
                        />
                        <FormErrorMessage>{formik.errors.numberOfGuests}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.reservationDate}>
                        <FormLabel htmlFor="reservationDate">Reservation Date</FormLabel>
                        <Input
                            id="reservationDate"
                            name="reservationDate"
                            type="date"
                            {...fieldProps('reservationDate')}
                        />
                        <FormErrorMessage>{formik.errors.reservationDate}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.reservationTime}>
                        <FormLabel htmlFor="reservationTime">Reservation Time</FormLabel>
                        <Input
                            id="reservationTime"
                            name="reservationTime"
                            type="time"
                            {...fieldProps('reservationTime')}
                        />
                        <FormErrorMessage>{formik.errors.reservationTime}</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" colorScheme="purple" width="full" className="ReservationsPage_SubmitButton">
                        {isLoading ? <Spinner /> : "Submit"}
                    </Button>
                    </VStack>
                </form>
                </Box>
            </VStack>
        </>
    );
};