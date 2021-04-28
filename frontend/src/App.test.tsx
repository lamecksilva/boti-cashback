import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);

	// const linkElement = screen.getByText(/Boti Cashback - Login/i);
	const loginTextElement = screen.getByText(/Boti Cashback - Login/i);

	expect(loginTextElement).toBeInTheDocument();
});
