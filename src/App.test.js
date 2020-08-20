import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from 'App';

test('loads and displays greeting', () => {
    render(<App />);
    screen.getByText('Hello World!');
});
