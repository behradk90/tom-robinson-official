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
      <div className="w-full border"></div>
    </div>
  );
}
