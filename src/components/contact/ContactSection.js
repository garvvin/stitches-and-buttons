'use client';
import Image from 'next/image';
import ContactButton from './ContactButton';
import FAQ from '../FAQ/FAQ';

import { useState } from 'react';

export default function ContactSection({}) {
	const [showFAQ, setShowFAQ] = useState(false);

	return (
		<div
			className="min-h-180 flex flex-col items-center mt-30 mb-40"
			id="contact"
		>
			<FAQ showFAQ={showFAQ} setShowFAQ={setShowFAQ} />
			<div className="flex flex-col md:flex-row justify-center items-center md:px-20">
				<div className="w-3/4 md:ms-10 lg:w-19/40 mt-8 h-auto flex justify-center items-center order-last lg:order-first">
					<Image
						src={'/images/pink-telephone.png'}
						alt={'Transparent pink telephone image.'}
						width={500}
						height={200}
						className="-translate-y-10 w-auto h-auto"
					/>
				</div>
				<div className="w-21/40 flex flex-col justify-center items-center mb-10">
					<h3 className="font-bold text-2xl lg:text-4xl caveat">
						Got questions? Let us know!
					</h3>
					<p className="mt-5 lg:px-15 max-w-150 text-lg lg:text-2xl caveat">
						Our team is dedicated to getting you the best of the best product
						there is. We will do our best in getting you 100% satisfaction.
					</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row justify-center gap-y-4 gap-x-10">
				<ContactButton
					innerContent={<h3 className="font-bold text-2xl">FAQ</h3>}
					extraCss={'hover:rotate-5 active:rotate-7'}
					onClick={() => setShowFAQ(true)}
				/>
				<ContactButton
					onClick={() => {
						window.open('tel:1800000000');
					}}
					innerContent={
						<h3 className="font-bold text-2xl">
							Call{' '}
							<span className="block underline text-lg">+1 (800) 000-000</span>
						</h3>
					}
					extraCss={'hover:-rotate-5 active:-rotate-7'}
				/>
				<ContactButton
					onClick={() => {
						window.open('mailto:EmailAddress@email.com');
					}}
					innerContent={
						<h3 className="font-bold text-2xl">
							Email
							<span className="block underline text-base">
								EmailAddress@email.com
							</span>
						</h3>
					}
					extraCss={'hover:rotate-5 active:rotate-7'}
				/>
			</div>
		</div>
	);
}
