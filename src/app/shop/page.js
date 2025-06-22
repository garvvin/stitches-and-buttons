import GradientOverlay from '@/components/GradientOverlay';
import ShopinnerDisplay from '@/components/shop/ShopinnerDisplay';

export default function Shop({}) {
	return (
		<div className="bg-stone-50">
			<GradientOverlay />
			<div className="overflow-y-auto absolute top-25 h-5/6 w-screen scroll-smooth snap-y snap-proximity page-section">
				<div className="flex flex-col items-center min-h-full pt-15">
					<div className="pb-8">
						<h1 className="text-center caveat text-3xl">Store</h1>
					</div>
					<ShopinnerDisplay />
				</div>
			</div>
		</div>
	);
}
