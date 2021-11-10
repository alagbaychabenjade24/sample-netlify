import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navigation.scss';

import { HiOutlineMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

import BetterSupportLogo from '../icons/better-support.svg';

const Navigation = () => {
	const [menu, setMenu] = useState(false);
	const [dp, setDp] = useState(false);

	const showMenu = () => {
		setMenu(true);
		setDp(true);
	};

	const scrollTop = () => window.scrollTo(0, 0);

	const closeMenu = () => {
		setMenu(false);
		setDp(false);
	};

	return (
		<header>
			<nav>
				<div
					className='nav__logo'
					onClick={() => {
						closeMenu();
						scrollTop();
					}}
				>
					<Link to='/'>
						<img src={BetterSupportLogo} alt='Better Support' />
					</Link>
				</div>

				<ul
					className={menu ? 'nav__links nav__links--active' : 'nav__links'}
				>
					<li>
						<Link
							to='/'
							onClick={() => {
								closeMenu();
								scrollTop();
							}}
						>
							Home
						</Link>
					</li>

					<li>
						<Link
							to='/better-services'
							onClick={() => {
								closeMenu();
								scrollTop();
							}}
						>
							Our Services
						</Link>
					</li>

					<li>
						<Link
							to='/why-us'
							onClick={() => {
								closeMenu();
								scrollTop();
							}}
						>
							Why Us?
						</Link>
					</li>

					<li>
						<Link
							to='/contact'
							onClick={() => {
								closeMenu();
								scrollTop();
							}}
							className='cta'
						>
							Contact Us
						</Link>
					</li>
				</ul>

				<div className='menu'>
					<HiOutlineMenu
						className={dp ? 'menu--open menu--dp' : 'menu--open'}
						onClick={showMenu}
					/>
					<CgClose
						className={dp ? 'menu--close' : 'menu--close menu--dp'}
						onClick={closeMenu}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
