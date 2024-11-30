import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Our professional services and solutions.',
}

export default function Services() {
  return (
    <>
      <div className="mt-16 sm:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            We offer a comprehensive range of professional services tailored to meet your needs.
          </p>
        </header>
        
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Cards */}
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Web Development
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Custom website development using modern technologies and best practices.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Mobile Applications
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Native and cross-platform mobile app development for iOS and Android.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Cloud Solutions
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Scalable cloud infrastructure and deployment solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
