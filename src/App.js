import React from 'react';
import { Routes, Route } from 'react-router';

import Services from './pages/Services';

import Footer from './components/Footer';

import './Global.scss';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/services' element={<Services />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
