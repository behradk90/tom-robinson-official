"use client"

import { usePathname } from "next/navigation"
import { SideBarOptions } from "./Utils/SideBarOptions"

function Blurb() {
    const pathname = usePathname()

    const activeRoute = SideBarOptions.find((r) => r.href === pathname)
    const blurb = activeRoute?.blurb
    return (
      <div className="flex items-center text-md w-full p-2 bg-indigo-950 h-24">
  {blurb}
</div>
    )
}

export default Blurb