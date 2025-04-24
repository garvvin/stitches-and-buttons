'use client';
import NavbarBtn from './NavbarBtn';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

//css
import '../../css/title.css';
import '../../css/yarnline.css';

//components
import Title from './Title';
import Yarnline from './Yarnline';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="w-full flex flex-col h-20 absolute top-0 left-0">
			<div
				className={`flex flex-col duration-200 relative overflow-hidden items-center ${open ? 'min-h-screen' : 'min-h-full'} bg-white-500 z-40`}
			>
				<div
					className={`flex flex-row min-h-20 place-content-center items-center h-20 gap-8 lg:gap-5 mr-5`}
				>
					<span
						className={
							'inline mx-3 cursor-pointer absolute left-0 top-4 lg:left-5 lg:top-6 duration-500 size-15 hover:size-17 ' +
							(open ? '-rotate-280' : 'rotate-none')
						}
						onClick={() => setOpen(!open)}
					>
						<Image
							src="/images/nav-button.png"
							alt="navigation button"
							width={100}
							height={100}
							priority={true}
						/>
					</span>
					<Link href="/">
						<span className="relative">
							<Yarnline />
							<Title />
							<Image
								src="/images/yarn.png"
								alt="Pink yarn ball"
								width={100}
								height={100}
								className="absolute top-0 left-11 lg:-translate-x-30 -translate-x-12 w-18 h-13 duration-200 lg:-translate-x-34 lg:translate-y-5 lg:w-25 lg:h-18"
							/>
						</span>
					</Link>
				</div>

				<ul className={`flex flex-col w-50 text-center absolute left-5 top-20`}>
					<li>
						<NavbarBtn
							href="/about-us"
							extraStyle={'rotate-3 hover:-rotate-3 active:-rotate-5'}
						>
							My Shop
						</NavbarBtn>
					</li>
					<li>
						<NavbarBtn
							href="/locations"
							extraStyle={'-rotate-3 hover:rotate-3 active:rotate-5'}
						>
							About Me
						</NavbarBtn>
					</li>
					<li>
						<NavbarBtn
							href="/contact"
							extraStyle={'rotate-3 hover:-rotate-3 active:-rotate-5'}
						>
							Contact
						</NavbarBtn>
					</li>
				</ul>
			</div>
		</nav>
	);
}
