"use client";

import { usePathname } from "next/navigation";
import { SideBarOptions } from "../../utils/Layout/SideBarOptions";
import { images } from "@/utils/Photos/Images";

function Blurb() {
  const pathname = usePathname();

  const activeRoute = SideBarOptions.find((r) => r.href === pathname);
  const activePhotoSlug = images.find((r) => r.src === `${pathname}.jpg`);

  const routeBlurb = activeRoute?.blurb;
  const photoBlurb = activePhotoSlug?.blurb;

  const blurb = routeBlurb ?? photoBlurb;

  return (
    <div className="flex items-center text-sm md:text-base w-full p-2 bg-indigo-700 md:h-24">
      {blurb}
    </div>
  );
}

export default Blurb;
