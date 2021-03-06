import React from 'react';

import MyraferBertulfoProfile from '../images/myrafer-bertulfo-better-support.webp';
import PiousRiveraProfile from '../images/pious-rivera-better-support.webp';
import ChedelynTabalbaProfile from '../images/chedelyn-tabalba-better-support.webp';
import EloisaTurlaProfile from '../images/eloisa-turla-better-support.webp';
import RobertLeeProfile from '../images/robert-lee-better-support.webp';
import JohanJedakerProfile from '../images/johan-jedaker-better-support.webp';

import CogWheelIcon from '../icons/cogwheel-better-support.svg';

const Member = () => {
	return (
		<div className='members'>
			<img
				src={CogWheelIcon}
				alt='Cogwheel | Better Support'
				className='member__cogwheel-1'
			/>
			<img
				src={CogWheelIcon}
				alt='Cogwheel | Better Support'
				className='member__cogwheel-2'
			/>
			<img
				src={CogWheelIcon}
				alt='Cogwheel | Better Support'
				className='member__cogwheel-3'
			/>

			<div className='member'>
				<div className='member__image'>
					<img src={PiousRiveraProfile} alt='Member | Better Support' />
				</div>

				<div className='member__bio'>
					<h3 className='position'>"Customer Service Captain"</h3>

					<p>
						I make customers happy by answering their queries and
						resolving their worries through live chat.
					</p>

					<h3 className='background'>Background</h3>

					<p>Bachelor of Science in Hotel and Restaurant Management</p>

					<h3 className='lists'>
						<span className='highlight'>Better</span> Superpower
					</h3>

					<ul>
						<li>Customer Service</li>

						<li>Content-writing</li>

						<li>Creative</li>
					</ul>
				</div>
			</div>

			<div className='member'>
				<div className='member__image'>
					<img src={EloisaTurlaProfile} alt='Member | Better Support' />
				</div>

				<div className='member__bio'>
					<h3 className='position'>"Content Marketing Wizard"</h3>

					<p>
						I am an all-rounder content strategist specializing in
						boosting online visibility.
					</p>

					<h3 className='background'>Background</h3>

					<p>Bachelor of Science in Business Administration</p>

					<h3 className='lists'>
						<span className='highlight'>Better</span> Superpower
					</h3>

					<ul>
						<li>Digital Marketing</li>

						<li>Multi-tasking</li>

						<li>In-depth research </li>
					</ul>
				</div>
			</div>

			<div className='member'>
				<div className='member__image'>
					<img
						src={MyraferBertulfoProfile}
						alt='Member | Better Support'
					/>
				</div>

				<div className='member__bio'>
					<h3 className='position'>"Influencer Marketing Mage"</h3>

					<p>
						I am a marketing associate who helps businesses boost their
						sales by connecting them with influencers.
					</p>

					<h3 className='background'>Background</h3>

					<p>Collections Department</p>

					<h3 className='lists'>
						<span className='highlight'>Better</span> Superpower
					</h3>

					<ul>
						<li>Analytical</li>

						<li>Communicative</li>

						<li>Sincere</li>
					</ul>
				</div>
			</div>

			<div className='member'>
				<div className='member__image'>
					<img src={RobertLeeProfile} alt='Member | Better Support' />
				</div>

				<div className='member__bio'>
					<h3 className='position'>"Accountable Lead Maestro"</h3>

					<p>
						I coach a team that prospects and makes deals with
						influencers.
					</p>

					<h3 className='background'>Background</h3>

					<p>Operations Supervisor, Business Analyst</p>

					<h3 className='lists'>
						<span className='highlight'>Better</span> Superpower
					</h3>

					<ul>
						<li>Ownership</li>

						<li>Integrity</li>

						<li>Exceeding expectations</li>
					</ul>
				</div>
			</div>

			<div className='member'>
				<div className='member__image'>
					<img
						src={ChedelynTabalbaProfile}
						alt='Member | Better Support'
					/>
				</div>

				<div className='member__bio'>
					<h3 className='position'>"Content Writing Genius"</h3>

					<p>I am a writer. Cut me and I bleed content.</p>

					<h3 className='background'>Background</h3>

					<p>Juris Doctor - Law</p>

					<h3 className='lists'>
						<span className='highlight'>Better</span> Superpower
					</h3>

					<ul>
						<li>Creative writing</li>

						<li>Event hosting</li>

						<li>Legal advising</li>
					</ul>
				</div>
			</div>

			<div className='member'>
				<div className='member__image'>
					<img src={JohanJedakerProfile} alt='Member | Better Support' />
				</div>

				<div className='member__bio'>
					<h3 className='position'>"Founder/CEO"</h3>

					<p>Trying to help out the team here and there.</p>

					<h3 className='background'>Background</h3>

					<p>Operations Manager and Chief Operating Officer</p>

					<h3 className='lists'>
						<span className='highlight'>Better</span> Superpower
					</h3>

					<ul>
						<li>Management</li>

						<li>Strategy</li>

						<li>An eye for detail</li>
					</ul>
				</div>
			</div>

			<img
				src={CogWheelIcon}
				alt='Cogwheel | Better Support'
				className='member__cogwheel-4'
			/>
		</div>
	);
};

export default Member;
