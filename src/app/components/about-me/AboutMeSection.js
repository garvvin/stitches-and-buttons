'use client';
import Image from 'next/image';
import '../../css/book.css';
import { useState } from 'react';

export default function AboutMeSection({}) {
	const [bookOpen, setBookOpen] = useState(false);

	return (
		<div
			className="h-180 bg-gray-200 flex flex-row justify-center items-center snap-start"
			id="about-me"
		>
			<div
				id="book-card"
				className={`${bookOpen ? 'open' : ''} w-63 h-88 hover:w-40 hover:h-55 sm:hover:h-100 sm:hover:w-80 sm:h-100 sm:w-80 relative rounded-xl cursor-pointer`}
				onClick={() => setBookOpen((prevVal) => !prevVal)}
			>
				<div
					className="absolute flex justify-center items-center left-0 top-0 w-full h-full bg-blue-300 rounded-xl"
					id="book-cover"
				>
					<div
						id="cover-front"
						className="w-full h-full bg-pink-300 absolute left-0 top-0 flex justify-center items-center rounded-xl"
					>
						<div
							id="cover-inner"
							className="select-none caveat rounded-lg bg-pink-200 w-5/6 h-5/6 flex justify-center items-center text-4xl sm:text-6xl"
						>
							About
						</div>
					</div>
					<div
						id="cover-back"
						className="w-full h-full flex flex-col justify-center items-center absolute left-0 top-0 rounded-xl caveat"
					>
						<h3 className="font-bold text-lg sm:text-2xl">About</h3>
						<p className="mt-1 w-[160px] sm:w-full lg:mt-5 px-5 sm:px-10 text-[0.75rem] sm:text-lg lg:text-base">
							Lorem ipsum dolor sit amet consectetur adipiscing elit.
							Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
							sapien vitae pellentesque sem placerat in id. Placerat in id
							cursus mi pretium tellus duis. Pretium tellus duis convallis
							tempus leo eu aenean.
						</p>
					</div>
				</div>
				<div className="w-full h-full flex justify-center items-center p-5">
					<Image
						src={'/images/AboutImg.jpeg'}
						alt={'Picture of 4 green yarn balls on a wood table'}
						width={500}
						height={200}
					/>
				</div>
			</div>
		</div>
	);
}
