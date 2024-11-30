import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Our valued clients and partners.',
}

export default function Clients() {
  return (
    <>
      <div className="mt-16 sm:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Our Clients
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            We are proud to work with amazing organizations across various industries.
          </p>
        </header>
        
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Client Cards */}
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Tech Corp
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Leading technology solutions provider
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Global Industries
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                International manufacturing company
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Startup Hub
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Innovative startup accelerator
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
