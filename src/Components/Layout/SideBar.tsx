import Link from "next/link"
import { SideBarOptions } from "./Utils/SideBarOptions"

function SideBar() {
    return (
        <aside className="w-70 h-screen bg-indigo-400 text-white p-6 space-y-2">
            <div className="text-xl bg-indigo-950 p-2 py-6">
                Main Index
            </div>
            <nav><ul className="flex flex-col gap-1s text-lg font-bold bg-indigo-600 p-2">
                <li>Radio</li>
                <li>Records</li>
                <li>Resources</li>
            </ul></nav>
            <nav>
                <ul className="flex flex-col gap-1 text-lg font-bold p-2    ">
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
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar