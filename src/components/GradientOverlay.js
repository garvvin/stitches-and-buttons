export default function GradientOverlay({ gradientSection, className }) {
	return (
		<div
			className={
				'absolute h-full w-full pointer-events-none z-30 bottom-0 ' + className
			}
			style={{
				background: gradientSection
					? gradientSection == 'top'
						? 'linear-gradient(to bottom, #fafaf9, rgba(250, 250, 249, 0) 90%)'
						: 'linear-gradient(to bottom, rgba(250, 250, 249, 0), rgba(250, 250, 249, 0) 30%, #fafaf9)'
					: 'linear-gradient(to bottom, #fafaf9, rgba(250, 250, 249, 0) 15%, rgba(250, 250, 249, 0) 80%, #fafaf9 95%)',
				paddingTop: 'env(safe-area-inset-top)',
			}}
		></div>
	);
}
