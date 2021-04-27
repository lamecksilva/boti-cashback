import React from 'react';
import logo from './logo.svg';
import './App.css';

import Axios from 'axios';

function App() {
	function getProdutos() {
		Axios.get('/api/produtos')
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.error(err));
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button onClick={getProdutos}>Click Me</button>
			</header>
		</div>
	);
}

export default App;
