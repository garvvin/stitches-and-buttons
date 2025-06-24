import ProductPageDetail from '@/components/shop/ProductPageDetail';
import { stripe } from '@/lib/stripe';

export default async function ProductPage({ params }) {
	const { id } = await params;
	const product = await stripe.products.retrieve(id, {
		expand: ['default_price'],
	});

	const clientData = {
		id: product.id,
		name: product.name,
		default_price: product.default_price,
		description: product.description,
		images: product.images,
	};

	return <ProductPageDetail productData={clientData} />;
}
