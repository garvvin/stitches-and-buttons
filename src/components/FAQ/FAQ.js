'use client';
import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import GradientOverlay from '../GradientOverlay';

const FAQData = require('./FAQData.json');

export default function FAQ({ showFAQ, setShowFAQ }) {
	const [portalContainer, setPortalContainer] = useState(null);
	useEffect(() => {
		if (typeof window !== 'undefined' && document?.body)
			setPortalContainer(document.body);
	}, []);

	if (portalContainer) {
		return createPortal(
			<div
				className={`fixed flex justify-center items-center top-0 z-100 bg-black/40 backdrop-blur-xs w-screen h-screen ${showFAQ ? 'opacity-100' : 'opacity-0 pointer-events-none'} duration-300`}
				onClick={() => setShowFAQ(false)}
			>
				<div
					className="w-4/5 max-w-100 md:max-w-170 border-2 border-gray-300 rounded-xl min-h-95 bg-stone-50 p-4 flex flex-col justify-center gap-5 items-center"
					onClick={(e) => e.stopPropagation()}
				>
					<h1 className="caveat text-xl md:text-3xl">
						Frequently Asked Questions
					</h1>
					<div className="h-80 relative">
						<GradientOverlay />
						<div className="overflow-y-auto h-full">
							<div className="w-full flex flex-col items-center gap-3 my-10">
								{FAQData.map((faqQuestion, keyI) => (
									<FaqComponent faqQuestion={faqQuestion} key={keyI} />
								))}
							</div>
						</div>
					</div>
					<div className="w-full flex flex-col items-center">
						<button
							className="text-gray-500 caveat text-xl text-center cursor-pointer hover:text-red-400 active:text-red-700 duration-300 pt-2"
							onClick={() => setShowFAQ(false)}
						>
							Close
						</button>
					</div>
				</div>
			</div>,
			portalContainer,
		);
	}
	return;
}

const FaqComponent = ({ faqQuestion }) => {
	const [open, setOpen] = useState(false);
	const [height, setHeight] = useState('0px');
	const answerRef = useRef(null);

	useEffect(() => {
		if (open) {
			const autoHeight = answerRef.current.scrollHeight;
			setHeight(`${autoHeight}px`);
		} else {
			setHeight('0px');
		}
	}, [open]);

	return (
		<div className="flex flex-col justify-center items-center relative">
			<div
				className={`caveat text-2xl cursor-pointer hover:bg-gray-400 active:bg-gray-400 active:text-white px-4 hover:text-white ${open ? 'bg-gray-400 text-white' : ''}`}
				onClick={() => setOpen((prevOpen) => !prevOpen)}
			>
				{faqQuestion.question}
			</div>{' '}
			<div
				className={`caveat text-xl px-4 overflow-hidden duration-500 ${open ? 'my-4' : ''}`}
				ref={answerRef}
				style={{ height: height }}
			>
				{faqQuestion.answer}
			</div>
		</div>
	);
};
