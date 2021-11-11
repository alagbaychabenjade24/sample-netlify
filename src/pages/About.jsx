import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Member from '../components/Member';

import '../styles/About.scss';

import { MdSettings } from 'react-icons/md';

const About = () => {
	const scrollTop = () => window.scrollTo(0, 0);

	return (
		<>
			<Helmet>
				<title>Contact Us — Better Support</title>
			</Helmet>

			<section className='about'>
				<div className='page__heading'>
					<h1 className='title'>About Us</h1>
				</div>

				<div className='about__subheading'>
					<p>
						Better Support was founded in 2021 to be a Premium outsourcing
						alternative that focuses on providing genuine quality
						services. The company’s growth trajectory is attributed to
						offering world-class services while providing fantastic career
						opportunities to attract the most talented young
						professionals.
					</p>

					<p>
						We see ourselves as a young, progressive company, proud to be
						operating out of the Philippines. We are customer-centric
						because we are relentless in our strive for solutions that are
						in the best interest of our clients. Our ambition is always to
						exceed expectations and build honest, long-lasting
						relationships with our clients.
					</p>

					<p>
						Our Western origin management has long experience in the
						outsourcing Industry. We believe that our combination of
						experience and maturity together with our young workforce is
						the perfect blend for success, we are determined to give our
						customers the wow factor and to keep growing our company.
					</p>
				</div>

				<div className='team'>
					<h2>
						The <span className='highlight'>Better</span> Support team
					</h2>

					<div className='divider'></div>

					<p className='subtitle'>
						Meet some of our awesome team members!
					</p>

					<Member />

					<Link to='/contact' onClick={scrollTop}>
						<MdSettings />
						Let's talk more!
					</Link>
				</div>
			</section>
		</>
	);
};

export default About;
