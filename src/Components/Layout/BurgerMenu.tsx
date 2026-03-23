"use client";

import { useState } from "react";
import Link from "next/link";
import { SideBarOptions } from "./Utils/SideBarOptions";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const topLinks = SideBarOptions.slice(1, 4);
  const bottomLinks = SideBarOptions.slice(4);

  return (
    <div className="md:hidden relative">
      {/* Burger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center m-2 w-10 h-10 rounded focus:outline-none overflow-visible"
      >
        <span
          className={`block h-1 w-10 my-1 bg-white transition-transform duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        />
        <span
          className={`block h-1 w-10 my-1 bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-1 w-10 my-1 bg-white transition-transform duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <>
          <div className="bg-black-100 opacity-60" />
          <div className="fixed inset-0 bg-black/70 z-40 flex justify-start m-3 mt-4 top-24">
            <div className="w-full h-full divide-y-2 p-4 space-y-2 shadow-lg overflow-auto">
              <ul className="flex flex-col space-y-0.5">
                {topLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 rounded hover:text-indigo-300 transition text-white font-bold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col space-y-0.5">
                {bottomLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 rounded hover:text-indigo-300 transition text-white font-bold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
