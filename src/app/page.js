//components
import AboutMeSection from '../components/about-me/AboutMeSection';
import ContactSection from '../components/contact/ContactSection';
import ShopSection from '../components/shop/ShopSection';
import GradientOverlay from '../components/GradientOverlay';

//css
import './css/page.css';

export default function Home() {
	return (
		<div>
			<GradientOverlay />
			<div className="overflow-y-auto absolute top-25 h-5/6 w-screen scroll-smooth snap-y snap-proximity page-section">
				<AboutMeSection />
				<ShopSection />
				<ContactSection />
			</div>
		</div>
	);
}
