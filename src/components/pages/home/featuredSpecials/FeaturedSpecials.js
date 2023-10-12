import BruschettaImg from '../../../../assets/bruschetta.jpg';
import GreekSaladImg from '../../../../assets/greek_salad.jpg';
import PennePastaImg from '../../../../assets/penne_pasta.jpg';
import SpecialCard from '../../../ui/specialCard/SpecialCard';
import { HStack, Heading, Divider } from '@chakra-ui/react';
import './FeaturedSpecials.css';

const SPECIALS = [
    {
        title: "Bruschetta",
        description: "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
        price: "$12.99",
        image: BruschettaImg
    },
    {
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$9.99",
        image: GreekSaladImg
    },
    {
        title: "Penne Pasta",
        description: "The classic Italian dish with a creamy and rich tomato sauce, flavored with garlic, onion, basil, and a splash of vodka.",
        price: "$7.99",
        image: PennePastaImg
    }
];

export default function FeaturedSpecials() {
    return (
        <section className='FeaturedSpecials'>
            <Heading as='h2'>Specials</Heading>
            <HStack justifyContent='space-around' className='FeaturedSpecials_Container'>
                {SPECIALS.map((elem, idx) => {
                    return <SpecialCard key={idx} {...elem} />
                })}
            </HStack>
            <Divider borderColor='black' />
        </section>
    );
};