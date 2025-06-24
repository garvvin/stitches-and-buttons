import GradientOverlay from '@/components/GradientOverlay';

export default function Cart({}) {
	return (
		<div className="flex absolute bottom-0 h-8/9 w-screen">
			<GradientOverlay />
			<div className="overflow-y-auto absolute w-full h-full">
				<div className="flex flex-col items-center min-h-full pt-15">
					<div className="pb-4 md:pb-8">
						<h1 className="text-center caveat font-bold text-3xl">Your Cart</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
