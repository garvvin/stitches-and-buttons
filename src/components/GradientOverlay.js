export default function GradientOverlay({ gradientSection }) {
	return (
		<div
			className="absolute top-25 h-5/6 w-screen pointer-events-none z-30"
			style={{
				background: gradientSection
					? gradientSection == 'top'
						? 'linear-gradient(to bottom, #fafaf9, rgba(250, 250, 249, 0))'
						: 'linear-gradient(to bottom, rgba(250, 250, 249, 0), rgba(250, 250, 249, 0) 30%, #fafaf9)'
					: 'linear-gradient(to bottom, #fafaf9, rgba(250, 250, 249, 0) 15%, rgba(250, 250, 249, 0) 80%, #fafaf9)',
				paddingTop: 'env(safe-area-inset-top)',
			}}
		></div>
	);
}
