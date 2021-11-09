import React from 'react';
import emailjs from 'emailjs-com';

import '../styles/Form.scss';

import { MdSettings } from 'react-icons/md';

import CogWheelIcon from '../icons/cogwheel-better-support.svg';

const Form = () => {
	const sendEmail = event => {
		event.preventDefault();

		emailjs
			.sendForm(
				'service_9rzyxj9',
				'template_kfk4zkc',
				event.target,
				'user_xeyKYZwBaxPmjLfS1peuQ'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);

		event.target.reset();
	};

	return (
		<div>
			<div className='y'>
				<h2>
					Let's make your business{' '}
					<span className='highlight'>Better </span>
				</h2>
			</div>

			<div className='divider'></div>

			<form onSubmit={sendEmail}>
				<div className='services'>
					<img src={CogWheelIcon} alt='Cogwheel | Better Support' />

					<h3>Service you need</h3>

					<div className='col'>
						<input
							type='checkbox'
							name='services'
							id='services'
							value='Customer Service'
						/>
						<label htmlFor='customer-service'>Customer Service</label>
					</div>

					<div className='col'>
						<input
							type='checkbox'
							name='services'
							id='services'
							value='Digital Marketing'
						/>
						<label htmlFor='digital-marketing'>Digital Marketing</label>
					</div>

					<div className='col'>
						<input
							type='checkbox'
							name='services'
							id='services'
							value='Content Writing'
						/>
						<label htmlFor='content-writing'>Content Writing</label>
					</div>

					<div className='col'>
						<input
							type='checkbox'
							name='services'
							id='services'
							value='Virtual Assistant'
						/>
						<label htmlFor='virtual-assistant'>Virtual Assistant</label>
					</div>

					<div className='col'>
						<input
							type='checkbox'
							name='services'
							id='services'
							value='Content Management'
						/>
						<label htmlFor='content--management'>
							Content Management
						</label>
					</div>

					<div className='col'>
						<input
							type='checkbox'
							name='services'
							id='services'
							value='Other'
						/>
						<label htmlFor='others'>Other</label>
					</div>
				</div>

				<div className='s'>
					<div className='inputs'>
						<div className='col'>
							<input
								type='text'
								name='name'
								id-='name'
								placeholder='Full Name'
								required
							/>
						</div>

						<div className='col'>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='youremail@example.com'
								required
							/>
						</div>

						<div className='col'>
							<textarea
								name='message'
								id='message'
								rows='5'
								placeholder='Hey, Better Support!'
							></textarea>
						</div>
					</div>

					<button type='submit'>
						<MdSettings />
						Shoot!
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
