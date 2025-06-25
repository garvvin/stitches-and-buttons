'use client';
import NavbarBtn from './NavbarBtn';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TiShoppingCart } from 'react-icons/ti';

//css
import '../../app/css/title.css';
import '../../app/css/yarnline.css';

//components
import Title from './Title';
import Yarnline from './Yarnline';
import { useCartStore } from '@/store/cart-store';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const { items } = useCartStore();
	const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<nav
			className="w-full flex flex-col h-22 fixed top-0 left-0 outline-hidden"
			style={{ paddingTop: 'env(safe-area-inset-top)' }}
		>
			<div
				className={`flex flex-col duration-200 relative overflow-hidden items-center ${open ? 'min-h-screen' : 'min-h-full'} z-40 pointer-events-none md:ms-5 lg:ms-10`}
			>
				{/* NAV BAR ANIMATED TITLE THING */}

				<div
					className={`flex flex-row min-h-20 place-content-center items-center h-20 gap-8 lg:gap-5 me-5`}
				>
					<span
						className={
							'inline mx-3 cursor-pointer absolute left-0 top-4 lg:left-5 lg:top-6 duration-300 size-15 hover:size-17 pointer-events-auto ' +
							(open
								? '-rotate-280 active:-rotate-310'
								: 'rotate-none active:rotate-30')
						}
						onClick={() => setOpen(!open)}
					>
						<Image
							src="/images/nav-button.png"
							alt="navigation button"
							width={100}
							height={100}
							priority={true}
							draggable={false}
						/>
					</span>
					<Link href="/" className="pointer-events-auto outline-none pt-7">
						<div className="relative h-15 flex items-center gap-1 lg:gap-5 pe-3 md:pe-10 lg:pe-20">
							<Image
								src="/images/yarn.png"
								alt="Pink yarn ball"
								width={100}
								height={100}
								className="w-15 h-10 sm:w-22 sm:h-15 duration-200 lg:min-w-25 lg:h-18"
							/>
							<Title />
							<Yarnline />
						</div>
					</Link>
				</div>

				{/* NAV BAR CART BUTTON */}
				<Link
					href="/cart"
					className="absolute right-7 md:right-17 top-7 z-50 text-gray-400 hover:text-pink-300 group cursor-pointer p-2 pointer-events-auto duration-200 flex items-center"
				>
					<button className="text-3xl pointer-events-none group-hover:text-[1.92rem] duration-200 group-active:text-[1.8rem]">
						<TiShoppingCart />
					</button>
					{cartCount > 0 && <span className="caveat text-xl">{cartCount}</span>}
				</Link>

				{/* NAV BAR BUTTONS (SIDEBAR) */}

				<ul
					className={`flex flex-col w-50 text-center absolute left-5 top-20 pointer-events-auto gap-5 sm:gap-8 mt-5`}
				>
					<li>
						<NavbarBtn
							href="/#about-me"
							extraStyle={'-rotate-3 hover:rotate-3 active:rotate-5'}
						>
							About
						</NavbarBtn>
					</li>
					<li>
						<NavbarBtn
							href="/store"
							extraStyle={'rotate-3 hover:-rotate-3 active:-rotate-5'}
						>
							Store
						</NavbarBtn>
					</li>
					<li>
						<NavbarBtn
							href="/#contact"
							extraStyle={'-rotate-3 hover:rotate-3 active:rotate-5'}
						>
							Contact
						</NavbarBtn>
					</li>
				</ul>
			</div>
		</nav>
	);
}
