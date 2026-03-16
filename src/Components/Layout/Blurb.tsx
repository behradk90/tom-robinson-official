"use client";

import { usePathname } from "next/navigation";
import { SideBarOptions } from "./Utils/SideBarOptions";

function Blurb() {
  const pathname = usePathname();

  const activeRoute = SideBarOptions.find((r) => r.href === pathname);
  const blurb = activeRoute?.blurb;

  return (
    <div className="flex items-center text-sm md:text-base w-full p-2 bg-indigo-700 md:h-24">
      {blurb}
    </div>
  );
}

export default Blurb;
