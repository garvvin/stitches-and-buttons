export default function GradientOverlay() {
	return (
		<div
			className="absolute top-25 h-5/6 w-screen pointer-events-none z-30"
			style={{
				background:
					'linear-gradient(to bottom, #fafaf9, rgba(250, 250, 249, 0) 15%, rgba(250, 250, 249, 0) 80%, #fafaf9)',
			}}
		></div>
	);
}
