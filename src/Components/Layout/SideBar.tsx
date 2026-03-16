"use client"

import Link from "next/link"
import { SideBarOptions } from "./Utils/SideBarOptions"
import { useNavPreview } from "@/context/NavPreviewContext"

function SideBar() {
    const { setPreviewImage } = useNavPreview()
    return (
        <aside className="w-70 h-screen bg-indigo-400 text-white py-2 space-y-2">
            {/* <div className="h-40"></div> */}
            <div className="text-xl font-bold bg-indigo-950 p-2 py-8">
                Main Index
            </div>
            <nav><ul className="flex flex-col gap-1s text-lg font-bold bg-indigo-700 p-2 py-3">
                <li>Radio</li>
                <li>Records</li>
                <li>Resources</li>
            </ul></nav>
            <nav>
                <ul className="flex flex-col gap-1 text-lg font-bold p-2 bg-black/20">
                    {
                        SideBarOptions.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.href}
                                    onMouseEnter={() => setPreviewImage(link.image)}
                                    onMouseLeave={() => setPreviewImage(null)}
                                    className="hover:text-red-500 hover:underline transition"
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