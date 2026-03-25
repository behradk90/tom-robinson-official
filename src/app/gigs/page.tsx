import { upcomingGigs } from "@/utils/Gigs/UpcomingGigs";

export default function page() {
  return (
    <div className="space-y-2">
      {upcomingGigs.map((gig) => (
        <div
          className="w-full bg-blue-400 p-2 md:p-5 flex space-x-1"
          key={gig.date + gig.venue}
        >
          <div className="md:flex">
            <div className="pr-2 md:text-xl text-slate-700 md:w-24">
              {gig.date}
            </div>
            <div className="md:space-y-2 w-full">
              <div className="flex flex-wrap items-center gap-x-1 w-full">
                <div className="text-lg font-bold">
                  {gig.city.toUpperCase()}:
                </div>

                <a
                  href={gig.link ?? undefined}
                  target="_blank"
                  className="underline hover:no-underline"
                >
                  {gig.venue} {gig.sale ? `[${gig.sale.toUpperCase()}]` : null}
                </a>
              </div>
              <div className="text-sm text-slate-700">{gig.extraDetails}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full space-y-4 md:space-y-0 md:flex space-x-8 bg-blue-400 p-4 py-8">
        <h2 className="text-xl font-semibold">Line Ups</h2>
        <div className="space-y-4 divide-y col-span-2">
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
        <div className="space-y-4 divide-y col-span-2">
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
