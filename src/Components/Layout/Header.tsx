import Link from "next/link"
import Image from "next/image"

function Header() {
    return (
        <header className="bg-indigo-400 flex border-b-8">
            <div className="w-80"></div>
            <Link href="/" className="flex flex-col text-2xl font-bold uppercase leading-nones pb-2">
                <Image
                    src="/TomRobinsonLogo.svg"
                    alt="Tom Robinson"
                    width={500}
                    height={240}
                    priority
                />
            </Link>
        </header>
    )
}

export default Header