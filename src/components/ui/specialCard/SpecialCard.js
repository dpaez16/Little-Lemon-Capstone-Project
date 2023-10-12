import { Card, CardBody, Text, Image, Heading, Stack } from '@chakra-ui/react';
import './SpecialCard.css';

export default function SpecialCard(props) {
    return (
        <article>
            <Card maxW='sm' className='SpecialCard'>
                <CardBody>
                    <Image  src={props.image}
                            alt={props.title}
                            borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading    size='md'
                                    color='black'
                                    className='SpecialCard_Heading'
                        >
                            {props.title}
                        </Heading>
                        <Text>{props.description}</Text>
                        <Text color='blue.600' fontSize='2xl'>{props.price}</Text>
                    </Stack>
                </CardBody>
            </Card>
        </article>
    );
};