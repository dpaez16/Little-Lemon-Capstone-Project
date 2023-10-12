import { BrowserRouter } from 'react-router-dom';

export function BrowserRouterWrapper(children) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
}