import { images } from "@/utils/Photos/Images";
import Image from "next/image";
import Link from "next/link";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const image = images.find((img) => img.src.includes(slug));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div className="flex">
      <Link href={`/photos`} className="relative w-full h-[80vh]">
        <Image src={image.src} alt={slug} fill className="object-contain" />
      </Link>
    </div>
  );
}
