import Link from 'next/link';

export default function NavbarBtn({ href, extraStyle, children }) {
	return (
		<Link href={href} target={'_top'}>
			<span
				className={
					'caveat text-2xl duration-300 block rounded-xl px-6 min-h-15 flex justify-center items-center hover:bg-zinc-100 bg-zinc-50 border-3 border-pink-300 text-pink-300 hover:text-pink-800 ' +
					extraStyle
				}
			>
				{children}
			</span>
		</Link>
	);
}
