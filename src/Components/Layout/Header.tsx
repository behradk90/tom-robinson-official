"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useNavPreview } from "@/context/NavPreviewContext"
import { SideBarOptions } from "./Utils/SideBarOptions"

function Header() {
    const pathname = usePathname()
    const { previewImage } = useNavPreview()

    const activeRoute = SideBarOptions.find((r) => r.href === pathname)

    const image = previewImage || activeRoute?.image
    console.log(image)
    return (
        <header className="bg-indigo-400 flex border-b-8">
            <div className="relative w-70 h-24">
                {image && (
                    <Image
                        src={image}
                        alt="Route image"
                        fill
                        className="object-cover transition-opacity duration-500"
                    />
                )}
            </div>

            <Link href="/" className="flex flex-col text-2xl font-bold uppercase leading-nones pb-2">
                <Image
                    src="/TomRobinsonLogo.svg"
                    alt="Tom Robinson"
                    width={320}
                    height={200}
                    priority
                />
            </Link>
        </header>
    )
}

export default Header