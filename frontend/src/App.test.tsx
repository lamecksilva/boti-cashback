import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('It Renders Login Page', () => {
	const { getByText } = render(<App />);

	expect(getByText(/Boti Cashback - Login/i)).toBeInTheDocument();
});
