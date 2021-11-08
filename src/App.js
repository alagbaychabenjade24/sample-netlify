import React from 'react';
import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

import Footer from './components/Footer';

import './Global.scss';
import Navigation from './components/Navigation';

function App() {
	return (
		<div className='App'>
			<Navigation />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/better-services' element={<Services />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
