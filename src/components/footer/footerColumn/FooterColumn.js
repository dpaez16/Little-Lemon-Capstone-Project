import { Heading } from '@chakra-ui/react';
import './FooterColumn.css';

export default function FooterColumn(props) {
    const { title, children } = props;
    return (
        <section className='FooterColumn'>
            <Heading as='h2'>{title}</Heading>
            {children}
        </section>
    );
};