import Image from 'next/image';

export default function ContactSection({}) {
	return (
		<div className="h-180 flex flex-row justify-center snap-start" id="contact">
			<div className="w-21/40 flex flex-col justify-center items-center">
				<h3 className="-translate-y-10 font-bold text-2xl">Contact</h3>
				<p className="-translate-y-10 mt-5 px-20">
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
					adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
					pellentesque sem placerat in id. Placerat in id cursus mi pretium
					tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
				</p>
			</div>
			<div className="w-19/40 h-auto flex justify-center items-center">
				<Image
					src={'/images/AboutImg.jpeg'}
					alt={'Picture of 4 green yarn balls on a wood table'}
					width={500}
					height={200}
					className="-translate-y-10"
				/>
			</div>
		</div>
	);
}
