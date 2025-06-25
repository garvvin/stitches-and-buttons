export default function ContactButton({ innerContent, extraCss, onClick }) {
	return (
		<button
			className={
				'sm:size-40 w-50 h-20 rounded-xl caveat hover:bg-zinc-100 bg-zinc-50 border-3 border-pink-300 border-dashed text-pink-300 hover:text-pink-800 cursor-pointer duration-300 ' +
				extraCss
			}
			onClick={onClick}
		>
			{innerContent}
		</button>
	);
}
