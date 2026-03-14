import Link from "next/link"

function Header() {
    return (
        <header>
            <Link href="/" className="flex flex-col text-2xl font-bold uppercase leading-none">
                <span>TOM</span>
                <span>ROBINSON</span>
            </Link>
        </header>
    )
}

export default Header