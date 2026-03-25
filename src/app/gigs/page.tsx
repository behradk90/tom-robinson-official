import { upcomingGigs } from "@/utils/Gigs/UpcomingGigs";

export default function page() {
  return (
    <div className="space-y-2">
      {upcomingGigs.map((gig) => (
        <div
          className="w-full bg-blue-400 p-5 flex space-x-1"
          key={gig.date + gig.venue}
        >
          <div className="pr-2 text-lg font-semibold text-slate-700">
            {gig.date}
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-1">
              <div className="text-lg font-bold">{gig.city.toUpperCase()}:</div>
              <a
                href={gig.link}
                target="_blank"
                className="underline hover:no-underline"
              >
                {gig.venue}
                {gig.sale ? `[${gig.sale.toUpperCase()}]` : null}
              </a>
            </div>
            <div className="text-sm text-slate-700">{gig.extraDetails}</div>
          </div>
        </div>
      ))}
      <div className="w-full flex space-x-8 bg-blue-400 p-2 py-8">
        <h2 className="text-xl font-semibold">Line Ups</h2>
        <div className="space-y-4 divide-y col-span-2 max-w-80">
          <h2 className="text-xl font-semibold">
            Tom Robinson Band (Full Band Show)
          </h2>
          <div className="space-y-2 px-1">
            <div className="text-slate-700">
              <span className="font-semibold">Tom Robinson</span>
              <p className="text-slate-600">bass, vocals</p>
            </div>
            <div className="text-slate-700">
              <span className="font-semibold">Adam Philips</span>
              <p className="text-slate-600">lead guitar, vocals</p>
            </div>
            <div className="text-slate-700">
              <span className="font-semibold">Andy Treacey</span>
              <p className="text-slate-600">drums</p>
            </div>
            <div className="text-slate-700">
              <span className="font-semibold">Jim Simmons</span>
              <p className="text-slate-600">organ, piano, vocals</p>
            </div>
            <div className="text-slate-700">
              <span className="font-semibold">Lee Forsyth Griffiths</span>
              <p className="text-slate-600">acoustic guitar, vocals</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 divide-y col-span-2 max-w-80">
          <h2 className="text-xl font-semibold">Acoustic Duo Show</h2>
          <div className="space-y-2 px-1">
            <div className="text-slate-700">
              <span className="font-semibold">Tom Robinson</span>
              <p className="text-slate-600">guitar, keyboard, vocals</p>
            </div>
            <div className="text-slate-700">
              <span className="font-semibold">Adam Philips</span>
              <p className="text-slate-600">lead guitar, vocals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
