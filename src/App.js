import React from 'react';
import './App.css';
import './resources/styles.css';
import Header from './components/Header_footer/Header';
import Featured from './components/Featured';
import VenueNfo from './components/VenueNfo';
import Highlights from './components/HighLights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Header_footer/Footer';
import { Element } from 'react-scroll';

function App() {
	return (
		<div>
			<Header />
			<Element name="featured">
				<Featured />
			</Element>
			<Element name="venuenfo">
				<VenueNfo />
			</Element>
			<Element name="highlights">
				<Highlights />
			</Element>
			<Element name="pricing">
				<Pricing />
			</Element>
			<Element name="location">
				<Location />
			</Element>

			<Footer />
		</div>
	);
}

export default App;
