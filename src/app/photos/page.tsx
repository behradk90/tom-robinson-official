import Image from "next/image";

const images = [
  "/photos/tomlaugh552.jpg",
  "/photos/tomjackie552.jpg",
  "/photos/tomjakko552.jpg",
  "/photos/tomlee552.jpg",
  "/photos/towerbridge552.jpg",
  "/photos/tr2010552.jpg",
  "/photos/trbass552.jpg",
  "/photos/trdanny552.jpg",
  "/photos/6music552.jpg",
  "/photos/alexharvey552.jpg",
  "/photos/cafe550.jpg",
  "/photos/edhillpic552.jpg",
  "/photos/grouppic552.jpg",
  "/photos/gtrpiano552.jpg",
  "/photos/hartman552.jpg",
  "/photos/jillpic1552.jpg",
  "/photos/maccas552.jpg",
  "/photos/podgepic552.jpg",
  "/photos/sector27552.jpg",
  "/photos/stevetom552.jpg",
  "/photos/stevewhite552.jpg",
];

export default function page() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-2">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-64">
          <Image src={src} alt={`Photo ${i}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
