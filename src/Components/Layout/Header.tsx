import Link from "next/link"

function Header() {
    return (
        <header className="bg-indigo-400">
            <Link href="/" className="flex flex-col text-2xl font-bold uppercase leading-none bg-inherit">
                <span>TOM</span>
                <span>ROBINSON</span>
            </Link>
        </header>
    )
}

export default Header