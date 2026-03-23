"use client";

import Image from "next/image";

export default function page() {
  return (
    <div className="flex space-x-2">
      <div className="space-y-2">
        <div className="relative w-72 h-44 shrink-0 border border-black">
          <Image
            src="/Contact/bacgigsmall.jpg"
            alt="Route image"
            fill
            className="object-cover transition-opacity duration-500"
          />
        </div>
        <div className="relative w-72 h-44 shrink-0 border border-black">
          <Image
            src="/Contact/bacmapsmall.jpg"
            alt="Route image"
            fill
            className="object-cover transition-opacity duration-500"
          />
        </div>
      </div>
      <div className="w-full p-2 border space-y-10 rounded-xs">
        <div>
          Add your email address to receive up-to-date TR news and special
          insider offers independently from Facebook or any other social media
          forum.
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-center">
            Subscribe to Tom's newsletters
          </h1>
          <form
            action="https://YOUR_MAILCHIMP_URL"
            method="POST"
            target="_blank"
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="email address"
              className="border p-2 w-72"
            />
            <button
              onClick={() => {}}
              className="p-2 px-10 border border-gray-500 bg-gray-400 hover:bg-gray-600 hover:cursor-pointer rounded-lg text-2xl font-semibold w-fit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-full">
          <a href="" className="font-semibold text-blue-950 hover:text-red-500">
            {" "}
            Click here{" "}
          </a>{" "}
          to contact Tom directly via this website - though replies take a while
          at busy times. You can also follow and message him via{" "}
          <a href="" className="font-semibold text-blue-950 hover:text-red-500">
            {" "}
            Twitter{" "}
          </a>
          and{" "}
          <a href="" className="font-semibold text-blue-950 hover:text-red-500">
            {" "}
            Instagram
          </a>
          .
        </div>
        <div className="w-full">
          Management address:{" "}
          <b>Leporine Ltd, PO Box 3185, London SW18 3JG. </b> For business and
          media enquiries
          <a href="" className="font-semibold text-blue-950 hover:text-red-500">
            {" "}
            click here{" "}
          </a>
          to email the office.
        </div>
      </div>
    </div>
  );
}
