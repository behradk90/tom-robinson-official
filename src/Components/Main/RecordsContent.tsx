export default function RecordsContent() {
  return (
    <div className="p-2 bg-blue-400">
      <span>
        <a target="_blank" className="font-bold text-lg text-white">
          Albums
        </a>
        <p className="text-black text-sm">
          All albums from 1978-2001 in high quality streaming audio on
          Soundcloud.
        </p>
      </span>
      <span>
        <a
          href="https://www.tomrobinson.co.uk/trb/index.htm"
          target="_blank"
          className="font-bold text-lg text-white"
        >
          Tom Robinson Band
        </a>
        <p className="text-black text-sm">
          1976-78 with Danny Kustow, Mark Ambler & Dolph Taylor. Also Ian Parker
          & Charlie Morgan (1978-9)
        </p>
      </span>
      <span>
        <a
          href="https://gladtobegay.net/"
          target="_blank"
          className="font-bold text-lg text-white"
        >
          Glad To Be Gay
        </a>
        <p className="text-black text-sm">
          Comprehensive website about the song with videos, lyrics, tabs &
          downloads
        </p>
      </span>
      <span>
        <button className="font-bold text-lg text-white">Discography</button>
        <p className="text-black text-sm">
          Detailed list of TR album, single and compilation releases on vinyl,
          cassette and CD worldwide, supplied by fans and friends.
        </p>
      </span>
      <span>
        <button className="font-bold text-lg text-white">Songs</button>
        <p className="text-black text-sm">All TR lyrics by title A-Z</p>
      </span>
      <span>
        <button className="font-bold text-lg text-white">Collaborators</button>
        <p className="text-black text-sm">
          include Peter Gabriel, Elton John, Steve Lillywhite, Todd Rundgren,
          Dan Hartman & Ray Davies.
        </p>
      </span>
    </div>
  );
}
