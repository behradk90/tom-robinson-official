import { images } from "@/utils/Photos/Images";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => {
        const slug = src.src.split("/").pop()?.replace(".jpg", "");

        return (
          <Link
            key={i}
            href={`/photos/${slug}`}
            className="relative w-full h-64 block"
          >
            <Image
              src={src.src}
              alt={`Photo ${i}`}
              fill
              className="object-cover"
            />
          </Link>
        );
      })}
    </div>
  );
}
