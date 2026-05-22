import { demoPacks } from './data/demoPacks';

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-10 text-white sm:px-8 lg:px-10">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-6 pt-8 sm:pt-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
              Demo Data
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-normal sm:text-7xl">
              Arc Radar
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Community radar charts for rhythm game charts.
            </p>
          </div>

          <div className="relative max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-zinc-500">
              <span className="h-2.5 w-2.5 rounded-full border border-cyan-200/60" />
            </div>
            <input
              aria-label="Search demo packs"
              className="h-14 w-full rounded-lg border border-white/10 bg-white/[0.04] px-10 text-sm text-zinc-200 outline-none transition placeholder:text-zinc-500 focus:border-cyan-200/40 focus:bg-white/[0.06]"
              placeholder="Search demo packs"
              readOnly
              type="search"
            />
          </div>
        </header>

        <section
          aria-label="Demo pack list"
          className="grid gap-4 pb-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {demoPacks.map((pack) => (
            <article
              className="group flex min-h-64 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.035] p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
              key={pack.id}
            >
              <div>
                <div
                  aria-hidden="true"
                  className="mb-5 h-1 w-16 rounded-full"
                  style={{ backgroundColor: pack.accent }}
                />
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold tracking-normal text-zinc-50">
                    {pack.name}
                  </h2>
                  <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-zinc-400">
                    Demo Data
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {pack.description}
                </p>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                    Songs
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-zinc-100">
                    {pack.songCount}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                    Charts
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-zinc-100">
                    {pack.chartCount}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
