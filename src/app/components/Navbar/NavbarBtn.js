import Link from 'next/link'

export default function NavbarBtn({ href, extraStyle, children }) {
    return (
        <Link href={href}>
            <span className={"duration-300 block text-center rounded-xl my-4 px-6 min-h-15 flex items-center hover:bg-zinc-100 bg-zinc-50 border-3 border-pink-300 text-pink-300 hover:text-pink-800 " + extraStyle}>
                {children}
            </span>
        </Link>
    )
}