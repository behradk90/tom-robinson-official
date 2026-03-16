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
    return (
        <header className="bg-indigo-400 flex border-b-8">
            <div className="relative hidden md:block w-70 h-24">
                {image ? (
                    <Image
                        src={image}
                        alt="Route image"
                        fill
                        className="object-cover transition-opacity duration-500"
                    />
                ) : (
                    <Image
                        src="/mast.jpg"
                        alt="Route image"
                        fill
                        className="object-cover transition-opacity duration-500"
                    />

                )}
            </div>

         <Link href="/" className="flex flex-col text-2xl font-bold uppercase leading-none pb-2">
  <Image
    src="/TomRobinsonLogo.svg"
    alt="Tom Robinson"
    width={320}          // base width
    height={200}         // base height
    className="w-60 md:w-[320px] h-auto" 
    priority
  />
</Link>
        </header>
    )
}

export default Header