//components
import AboutMeSection from '../components/about-me/AboutMeSection';
import ContactSection from '../components/contact/ContactSection';
import ShopSection from '../components/shop/ShopSection';
import GradientOverlay from '../components/GradientOverlay';

//css
import './css/page.css';

export default function Home() {
	return (
		<div className="w-screen h-8/9 absolute bottom-0">
			<div className="overflow-y-auto h-full w-full scroll-smooth page-section">
				<AboutMeSection />
				<ShopSection />
				<ContactSection />
			</div>
			<GradientOverlay />
		</div>
	);
}
