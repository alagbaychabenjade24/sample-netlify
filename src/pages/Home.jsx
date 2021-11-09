import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../components/Form';

import '../styles/Home.scss';

import CustomerServiceIcon from '../icons/customer-service-better-support.svg';
import VirtualAssistantIcon from '../icons/virtual-assistant-better-support.svg';
import ContentWritingIcon from '../icons/content-writing-better-support.svg';
import DigitalMarketingIcon from '../icons/digital-marketing-better-support.svg';
import ContentManagementIcon from '../icons/content-management-better-support.svg';
import PerformBetterIcon from '../icons/perform-better-better-support.svg';
import PerformBetterHoverIcon from '../icons/perform-better-hover-better-support.webp';
import ScaleFasterIcon from '../icons/scale-faster-better-support.svg';
import ScaleFasterHoverIcon from '../icons/scale-faster-hover-better-support.webp';
import CostSavingIcon from '../icons/cost-saving-better-support.svg';
import PetliClientLogo from '../icons/petli-better-support.png';
import PacClientLogo from '../icons/pac-better-support.jpg';
import QuotationIcon from '../icons/quotation-better-support.svg';
import CogWheelIcon from '../icons/cogwheel-better-support.svg';

import { MdSettings } from 'react-icons/md';

const Home = () => {
	return (
		<div className='home'>
			<section id='home'>
				<div className='home__content'>
					<h1>
						Grow <span className='highlight'>Better</span> <br /> With Us
					</h1>

					<p>
						Offering specialized teams of highly skilled professionals and
						industry-leading techniques and processes.
					</p>
				</div>
			</section>

			<section className='sa'>
				<div className='sa__content'>
					<img
						src={CogWheelIcon}
						alt='Cogwheel | Better Support'
						className='sa__cogwheel-1'
					/>

					<img
						src={CogWheelIcon}
						alt='Cogwheel | Better Support'
						className='sa__cogwheel-2'
					/>

					<h3>
						<span className='highlight'>Better</span> business with Better
						Support
					</h3>

					<h2 className='highlight'>Better Services</h2>

					<div className='sa__services'>
						<div className='sa__service'>
							<img
								src={CustomerServiceIcon}
								alt='Customer Service | Better Support'
							/>

							<h3>
								Customer <br /> Service
							</h3>
						</div>

						<div className='sa__service'>
							<img
								src={VirtualAssistantIcon}
								alt='Virtual Assistant | Better Support'
							/>

							<h3>
								Virtual <br /> Assistant
							</h3>
						</div>

						<div className='sa__service'>
							<img
								src={ContentWritingIcon}
								alt='Content Writing | Better Support'
							/>

							<h3>
								Content <br /> Writing
							</h3>
						</div>

						<div className='sa__service'>
							<img
								src={DigitalMarketingIcon}
								alt='Digital Marketing | Better Support'
							/>

							<h3>
								Digital <br /> Marketing
							</h3>
						</div>

						<div className='sa__service'>
							<img
								src={ContentManagementIcon}
								alt='Content Management | Better Support'
							/>

							<h3>
								Content <br /> Management
							</h3>
						</div>
					</div>

					<p>
						Finding quality outsourcing support services is hard. We get
						it. So here at Better Support, we want to be an extension of
						your company and simplify everything for you as much as
						possible.
					</p>

					<p>Better for you is better for us.</p>

					<Link to='/better-services'>
						<MdSettings />
						Shoot!
					</Link>
				</div>
			</section>

			<section className='lo'>
				<div className='lo__content'>
					<img
						src={CogWheelIcon}
						alt='Cogwheel | Better Support'
						className='lo__cogwheel-1'
					/>

					<img
						src={CogWheelIcon}
						alt='Cogwheel | Better Support'
						className='lo__cogwheel-2'
					/>

					<h2>
						We're here to <br />
						<span className='highlight'>exceed expectations</span>
					</h2>

					<div className='offers'>
						<div className='offer'>
							<img
								src={PerformBetterIcon}
								alt='Perform Better | Better Support'
							/>

							<img
								src={PerformBetterHoverIcon}
								alt='Perform Better | Better Support'
							/>

							<div>
								<h3>Perform Better</h3>

								<p>
									Consistent performance is key to business
									sustainability. We can either work directly in your
									systems or if you want us to handle it all, we´ll be
									happy to set it up.
								</p>
							</div>
						</div>

						<div className='offer'>
							<img
								src={ScaleFasterIcon}
								alt='Scale Faster | Better Support'
							/>

							<img
								src={ScaleFasterHoverIcon}
								alt='Scale Faster | Better Support'
							/>

							<div>
								<h3>Scale Faster</h3>

								<p>
									Set up teams efficiently to meet business demands. We
									innovate the hiring system by going digital to engage
									talents.
								</p>
							</div>
						</div>

						<div className='offer'>
							<img
								src={CostSavingIcon}
								alt='Cost Saving | Better Support'
							/>

							<div>
								<h3>Cost Saving</h3>

								<p>
									We are confident that we can lower your running costs
									without compromising on quality.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='testimonials'>
				<div>
					<img
						src={CogWheelIcon}
						alt='Cogwheel | Better Support'
						className='testimonial__cogwheel-1'
					/>

					<h2>
						<span className='highlight'>Better</span> Results
					</h2>

					<p>
						We're confident that we can give you something better and our
						satisfied clients think so too. After all, the goal here is to
						make YOUR business better. And better for you is better for
						us.
					</p>
				</div>

				<div className='testimonial__group'>
					<div className='testimonial'>
						<img
							src={QuotationIcon}
							alt='Quotation | Better Support'
							className='quotation'
						/>

						<p>
							Better Support provides quality service and their
							flexibility is important for a startup such as Petli. We
							will enjoy working with them as we scale our business.
						</p>

						<div>
							<div className='line'></div>

							<img
								src={PetliClientLogo}
								alt='Testimonial Client Logo | Better Support'
							/>
						</div>

						<img
							src={CogWheelIcon}
							alt='Cogwheel | Better Support'
							className='testimonial__cogwheel-2'
						/>
					</div>

					<div className='testimonial'>
						<img
							src={QuotationIcon}
							alt='Quotation | Better Support'
							className='quotation'
						/>

						<p>
							Working with Better Support has really made a difference in
							how we run our business. Power Aware Company asked for
							top-notch sales support services and they delivered -
							exceed our expectations even.
						</p>

						<div>
							<span className='line'></span>

							<img
								src={PacClientLogo}
								alt='Testimonial Client Logo | Better Support'
							/>
						</div>
					</div>
				</div>
			</section>

			<aside>
				<h2>
					See how you can grow <br />{' '}
					<span className='highlight'>Better with us</span>
				</h2>
			</aside>

			<section className='hi'>
				<img src={CogWheelIcon} alt='Cogwheel | Better Support' />

				<div>
					<p>
						Founded in 2021, Better Support aims to provide premium
						quality and cost-effective outsourcing services to businesses
						in high-cost countries.
					</p>

					<p>
						Our growth is realized as we continue to offer world-class
						services to businesses and provide fantastic career
						opportunities to talented young professionals.
					</p>

					<Link to='about-us'>
						<MdSettings /> Read More
					</Link>
				</div>
			</section>

			<Form />
		</div>
	);
};

export default Home;
