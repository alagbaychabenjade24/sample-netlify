import React from 'react';
import { Helmet } from 'react-helmet';

import Form from '../components/Form';

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact Us — Better Support</title>
			</Helmet>

			<section className='contact'>
				<div className='page__heading'>
					<h1 className='title'>Contact Us</h1>
				</div>

				<Form />
			</section>
		</>
	);
};

export default Contact;
