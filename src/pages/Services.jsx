import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Services.scss';

import { RiSettings3Fill } from 'react-icons/ri';

const Services = () => {
	return (
		<section className='services'>
			<div className='page__heading'>
				<h1 className='title'>
					<span className='highlight'>Better</span> Services
				</h1>
			</div>

			<div className='x'>
				<h2>Our Advantage</h2>

				<h3>
					Among the hundreds of outsourcing companies in the Philippines,
					Better Support stands out. Why?
				</h3>

				<p>
					We are relentless in our search for the best talents to join us
					and use progressive practices when recruiting to make sure that
					we only get top performers on board. Our employees work
					exclusively with one client to ensure that we have the right
					profile for your business, as well as 100% focus for your
					company.
				</p>

				<p>
					Our company mission itself is to see our clients excel and that
					client obsession is something we keep in our DNA. We are a young
					and ambitious company with a hunger for success, fully aware that
					the more competitive clients we have, the better it is for all of
					us.
				</p>

				<p>
					We take pride in being a company that prioritizes the well-being
					of our employees. We make it our responsibility to promote a
					happy work culture that ensures our employees feel great and are
					well taken care of. We believe having satisfied employees will
					give us satisfied clients too.
				</p>
			</div>

			<div className='service'>
				<div className='service__heading customer__service'>
					<div className='service__heading__content'>
						<h2>Customer Service</h2>

						<h3>Some of the areas we focus on:</h3>

						<ul>
							<li>Live chat support</li>

							<li>Email support</li>

							<li>Phone support</li>

							<li>Support through social media</li>
						</ul>
					</div>
				</div>

				<div className='summaries'>
					<div className='grey'>
						<p>
							The Philippines is the leader of great customer service, so
							it is not a coincidence that some of the world’s best
							customer service departments are outsourced to the
							Philippines which employs over 1 million people. Aside from
							having an attractive price point, English is an official
							language, and Filipinos are known for having excellent work
							ethic.
						</p>

						<p>
							We like to simplify things and therefore offer the same
							pricing 24/7/365. Perhaps you have more inquiries coming in
							on a Saturday- and Sunday rather than a Tuesday &
							Wednesday? We´ll adapt to your needs.
						</p>
					</div>

					<div className='blue'>
						<p>
							Better Support has long experience in handling live chat-,
							email-, and phone support, and our agents have a strong
							background in the industry. Whether you're looking for an
							additional agent to your existing team or want us to manage
							all of it, we have the expertise to help you. Want to be
							part of the recruitment process and have the final say? No
							worries.
						</p>

						<p>
							We understand the responsibility of representing your
							company to your customers in the best way possible.
						</p>
					</div>
				</div>
			</div>

			<div className='service'>
				<div className='service__heading digital__marketing'>
					<div className='service__heading__content'>
						<h2>Digital Marketing</h2>

						<h3>
							Our focus within Digital Marketing is concentrated on:
						</h3>

						<ul>
							<li>SEO/SEM Marketing</li>

							<li>Influencer Marketing</li>

							<li>Social Media Management</li>

							<li>Affiliate Marketing</li>
						</ul>
					</div>
				</div>

				<div className='summaries'>
					<div className='grey'>
						<p>
							Just like how Better Support is a workplace using the
							latest technologies, we like to offer the newest in Digital
							Marketing as well. We thrive in working in fast-paced
							environments where marketing efforts are meticulously
							measured and satisfactory results are ensured.
						</p>
					</div>

					<div className='blue'>
						<p>
							We have helped various companies with their Digital
							Marketing needs. We have provided support not only on a
							short-term basis such as shorter campaigns and promotions,
							but also on more long-term concepts.
						</p>
					</div>
				</div>
			</div>

			<div className='service'>
				<div className='service__heading content__writing'>
					<div className='service__heading__content'>
						<h2>Content Writing</h2>

						<h3>
							Better Support has experience with many types of content,
							such as writing for:
						</h3>

						<ul>
							<li>Articles for magazines</li>

							<li>Blogs</li>

							<li>Short-form copywriting</li>

							<li>Product descriptions</li>
						</ul>
					</div>
				</div>

				<div className='summaries'>
					<div className='grey'>
						<p>
							Content Writing as an industry is growing at an insane pace
							and is estimated to be a $400 billion dollar industry.
							Content is King and that is why we put a lot of love &
							effort into producing world-class content.{' '}
						</p>
					</div>

					<div className='blue'>
						<p>
							The Philippines, with its creative and English-speaking
							population, is an ideal country for providing great
							content, so we are confident that we can provide you with
							outstanding results. Perhaps you only need someone on a
							part-time basis, or you need content about a very niched
							product/service? We've got you covered.
						</p>

						<p>
							We´re here to listen to your needs and see how we can serve
							you.
						</p>
					</div>
				</div>
			</div>

			<div className='service'>
				<div className='service__heading virtual__assistant'>
					<div className='service__heading__content'>
						<h2>Virtual Assistant</h2>

						<h3>
							Some of the things your dedicated Virtual Assistant can do
							for you:
						</h3>

						<ul>
							<li>Answer emails</li>

							<li>Update social media pages</li>

							<li>Write content</li>

							<li>Lead Generation</li>

							<li>Appointment setting</li>

							<li>Handle Excel sheets</li>
						</ul>
					</div>
				</div>

				<div className='summaries'>
					<div className='grey'>
						<p>
							Virtual assistants are the Swiss Army Knife solution when
							you need help with more than one particular service, or
							your needs are changing from day to day. This is the reason
							we provide excellent Virtual Assistance services.
						</p>
					</div>

					<div className='blue'>
						<p>
							Perhaps you have felt that there are job tasks that you
							don't always have time for? In many cases, businesses and
							business owners perform tasks that are repetitive and
							consume a lot of time, rather than focusing on developing
							their core business.
						</p>

						<p>
							Let us assist you in improving your business for the
							better.
						</p>
					</div>
				</div>
			</div>

			<div className='service'>
				<div className='service__heading content__management'>
					<div className='service__heading__content'>
						<h2>Content Management</h2>

						<h3>
							We have long experience handling different types of content
							& data such as:
						</h3>

						<ul>
							<li>Product listings</li>

							<li>Backoffice uploading</li>

							<li>Excel management</li>
						</ul>
					</div>
				</div>

				<div className='summaries'>
					<div className='grey'>
						<p>
							Content and data management are essential processes for
							many businesses, but they are often time-consuming. This is
							why outsourcing is ideal for handling such tasks.
						</p>
					</div>

					<div className='blue'>
						<p>
							We understand the importance of treating your data with
							sensitivity and caution, and you can rest assured that we
							will handle it with utmost care.
						</p>
					</div>
				</div>
			</div>

			<Link to='/contact'>
				<RiSettings3Fill /> Let's talk more!
			</Link>
		</section>
	);
};

export default Services;
