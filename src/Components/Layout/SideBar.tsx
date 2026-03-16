"use client";

import Link from "next/link";
import { SideBarOptions } from "./Utils/SideBarOptions";
import { useNavPreview } from "@/context/NavPreviewContext";
import { usePathname } from "next/navigation";

function SideBar() {
  const { setPreviewImage } = useNavPreview();

  const pathname = usePathname();

  const activeRoute = SideBarOptions.find((r) => r.href === pathname);
  const titleText = activeRoute?.name;

  const topLinks = SideBarOptions.slice(1, 4);
  const bottomLinks = SideBarOptions.slice(4);

  return (
    <aside className="w-70 hidden md:block shrink-0 h-screen bg-indigo-400 text-white py-2 space-y-2">
      {/* <div className="h-40"></div> */}
      <div className="text-xl flex font-bold bg-indigo-950 p-2 h-24 items-center">
        {titleText}
      </div>
      <nav>
        <ul className="flex flex-col gap-1s text-lg font-bold bg-indigo-700 p-2 py-3">
          {topLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="hover:text-red-500 hover:underline transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="h-full">
        <ul className="flex flex-col gap-1 text-lg font-bold p-2 bg-black/20 h-full">
          {bottomLinks.map((link) => (
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
  );
}

export default SideBar;
