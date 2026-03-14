import Link from "next/link"
import { SideBarOptions } from "./Utils/SideBarOptions"

function SideBar() {
    return (
        <aside className="w-64 h-screen bg-black text-white p-6">
            <nav>
                <ul className="flex flex-col gap-4 text-lg uppercase">
                    {
                        SideBarOptions.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.href}
                                    className="hover:text-gray-400 transition"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                    {/* <li>
                        <Link href="/about" className="hover:text-gray-400 transition">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="/photos" className="hover:text-gray-400 transition">
                            Photos
                        </Link>
                    </li>

                    <li>
                        <Link href="/albums" className="hover:text-gray-400 transition">
                            Albums
                        </Link>
                    </li>

                    <li>
                        <Link href="/radio" className="hover:text-gray-400 transition">
                            Radio
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" className="hover:text-gray-400 transition">
                            Contact
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar