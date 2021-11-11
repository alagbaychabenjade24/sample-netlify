import React from 'react';

import '../styles/Footer.scss';

import LocationIcon from '../icons/google-maps-better-support.svg';

import { GrLinkedin } from 'react-icons/gr';

const Footer = () => {
	return (
		<footer>
			<div className='footer__content'>
				<div className='social__update'>
					<h2>
						Keep updated with <br />
						<span className='highlight'>Better Support</span>
					</h2>

					<div className='social__media'>
						<h3>Check out our socials!</h3>

						{/* <a href='' target='_blank' rel='noreferrer'>
							<GrFacebook />
						</a> */}

						<a
							href='https://www.linkedin.com/company/better-support/'
							target='_blank'
							rel='noreferrer'
						>
							<GrLinkedin />
						</a>
					</div>
				</div>

				<div className='divider'></div>

				<div className='location'>
					<a
						href='https://goo.gl/maps/7BpEKhmy4BX3nsn29'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src={LocationIcon}
							alt='Google Map Location | Better Support'
						/>

						<p>
							Multinational Bancorporation Center <br />
							6805 Ayala Ave., Makati City, Philippines
						</p>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
