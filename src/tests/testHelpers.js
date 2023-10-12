import { BrowserRouter } from 'react-router-dom';
import { queryByAttribute } from '@testing-library/react';

export function BrowserRouterWrapper(children) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export const getById = queryByAttribute.bind(null, 'id');