import { render, screen } from '@testing-library/react';
import App from './App';

import Booking from './booking';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Check");
    expect(headingElement).toBeInTheDocument();
})