import ServingFoodImg from '../../../../assets/serving_food.jpg';
import { Button, Heading, Text, Image, Stack } from '@chakra-ui/react';
import './RestaurantIntroduction.css';

export default function RestaurantIntroduction() {
    return (
        <section className='RestaurantIntroduction'>
            <Stack>
                <Heading as='h1' size='4xl'>Little Lemon Restaurant</Heading>
                <Heading as='h2' size='2xl' className='h2_on_primary'>Chicago</Heading>
                <Text>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </Text>
                <Button maxW='fit-content'>
                    Reserve a Table
                </Button>
            </Stack>
            <Image  src={ServingFoodImg}
                    alt='Serving food'
                    objectFit='cover'
                    height='2xl'
            />
        </section>
    );
};