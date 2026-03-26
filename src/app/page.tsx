import RadioContent from "@/Components/Main/RadioContent";
import RecordsContent from "@/Components/Main/RecordsContent";
import ResourcesContent from "@/Components/Main/ResourcesContent";
import Image from "next/image";

// const sections = [
//   { image: "/butradio.gif", content: <RadioContent /> },
//   { image: "/butrecs.jpg", content: <RecordsContent /> },
//   { image: "/butwork.jpg", content: <ResourcesContent /> },
// ];
const sections = [
  {
    id: 1,
    image: "/butradio.gif",
    title: "Radio",
    content: <RadioContent />,
  },
  {
    id: 2,
    image: "/butrecs.jpg",
    title: "Records",
    content: <RecordsContent />,
  },
  {
    id: 3,
    image: "/butwork.jpg",
    title: "Resources",
    content: <ResourcesContent />,
  },
];

export default function Home() {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {sections.map((section) => (
        <div key={section.id} className="flex flex-col gap-2 h-full">
          {/* Image (fixed height) */}
          <div className="relative w-full h-24">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content (flexes to match others) */}
          <div className="p-2 bg-blue-400 flex-1">{section.content}</div>
        </div>
      ))}
    </div>
  );
}
