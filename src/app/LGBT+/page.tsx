import Image from "next/image";

export default function page() {
  return (
    <div className="py-2 space-y-2 text-white">
      <div className="flex space-x-2">
        <div className="relative w-60 h-52 shrink-0 border hover:border-red-500">
          <Image
            src="/LGBT+/gaynews552.jpg"
            alt="Route image"
            fill
            className="object-cover transition-opacity duration-500"
          />
        </div>
        <div className="p-2 border rounded-xs">
          Sing If You're Glad To Be Gay was performed by the Tom Robinson Band
          and released on a live EP called Rising Free in early 1978. It reached
          No.18 in the UK charts despite an unofficial ban on the song by the
          BBC - John Peel was the only Radio 1 DJ who ever played it at the
          time. Click here for an MP3 extract from this version, click here for
          the lyrics. Danny, Dolphin and Mark - were not gay, but we all played
          at gigs and rallies in support of gay equality as well as for Rock
          Against Racism, Amnesty and other progressive causes.
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="relative w-60 h-52 shrink-0 border">
          <Image
            src="/LGBT+/furmfam126.jpg"
            alt="Route image"
            fill
            className="object-cover transition-opacity duration-500"
          />
        </div>
        <div className="p-2 border rounded-xs">
          After Glad To Be Gay was a hit, the one thing people thought they knew
          about me - if they'd heard of Tom Robinson at all - was that I was
          gay. Actually my early interviews for{" "}
          <a
            href="/press/pressabout/burchill.htm"
            className="ml-1 font-semibold text-red-900 hover:text-red-500"
          >
            {" "}
            NME{" "}
          </a>
          and{" "}
          <a
            href="/press/pressabout/coleman.htm"
            className="ml-1 font-semibold text-red-900 hover:text-red-500"
          >
            {" "}
            Melody Maker{" "}
          </a>
          mentioned having had experiences with women as well as men. I called
          myself "gay" because "bisexual" seemed a bit of a cop-out. But by 1986
          I was in love with a woman and again mentioned this openly in
          interviews. Two years later the Sunday People found out & a brief
          period in tabloid hell ensued.
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="relative w-60 h-52 shrink-0 border hover:border-red-500">
          <Image
            src="/LGBT+/outrage552.jpg"
            alt="Route image"
            fill
            className="object-cover transition-opacity duration-500"
          />
        </div>
        <div className="p-2 border rounded-xs">
          From{" "}
          <a
            href="http://petertatchell.net/"
            target="_blank"
            className="ml-1 font-semibold text-red-900 hover:text-red-500"
          >
            {" "}
            Peter Tatchell's website:{" "}
          </a>{" "}
          "In the 1970s and '80s, Tom Robinson was one of the most famous gay
          men in Britain. His hit song "Glad To Be Gay" was, for over a decade,
          the de facto gay national anthem. Then Tom fell in love with Sue
          Brearley! ...Tom Robinson has behaved rather commendably, in my view.
          Ever since the beginning of his relationship with Sue, he has
          continued to describe himself as "a gay man who happens to be in love
          with a woman". Who could quarrel with that?
          <a
            href="https://petertatchell.net/queer%20theory/not%20glad.htm"
            target="_blank"
            className="ml-1 font-semibold text-red-900 hover:text-red-500"
          >
            /more
          </a>
        </div>
      </div>
    </div>
  );
}
