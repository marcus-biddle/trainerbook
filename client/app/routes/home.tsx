import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Page shell */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        {/* Simple header */}
        <header className="flex items-center justify-between pb-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              TB
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-50">
              TrainerBook
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-400 sm:flex">
            <button className="transition hover:text-slate-100">How it works</button>
            <button className="transition hover:text-slate-100">Features</button>
            <button className="transition hover:text-slate-100">For who</button>
            <button className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200 hover:border-emerald-500 hover:text-emerald-400">
              Log in
            </button>
          </nav>
        </header>

        {/* Main content scrollable */}
        <main className="flex-1 space-y-20 pb-16">
          {/* Hero */}
          <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Modern client management for trainers
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                One place for trainers to manage clients.
                <br className="hidden sm:block" />
                Clients see exactly what to do each day.
              </h1>
              <p className="max-w-xl text-sm text-slate-400 sm:text-base">
                TrainerBook keeps programs, checklists, and progress in one
                clear dashboard—so you spend less time chasing messages and more
                time coaching.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400">
                  I&apos;m a Trainer
                </button>
                <button className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-500 hover:text-emerald-300">
                  I&apos;m a Client
                </button>
                <span className="text-xs text-slate-500">
                  No setup call needed. Get started in minutes.
                </span>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl" />
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/40 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Today</p>
                    <p className="text-sm font-semibold text-slate-50">
                      Thursday · Client dashboard
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                    On track
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-900 p-3">
                    <p className="text-[11px] font-medium text-slate-400">
                      Workout
                    </p>
                    <p className="mt-1 text-xs text-slate-200">
                      Upper body strength
                    </p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
                      <div className="h-1.5 w-2/3 rounded-full bg-emerald-400" />
                    </div>
                    <p className="mt-1 text-[10px] text-slate-500">
                      4 of 6 sets done
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900 p-3">
                    <p className="text-[11px] font-medium text-slate-400">
                      Meals
                    </p>
                    <p className="mt-1 text-xs text-slate-200">
                      3 simple meals · 1 snack
                    </p>
                    <ul className="mt-2 space-y-1 text-[10px] text-slate-400">
                      <li>• Breakfast checklist</li>
                      <li>• Post-workout shake</li>
                      <li>• Evening steps</li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-slate-900 p-3">
                    <p className="text-[11px] font-medium text-slate-400">
                      Goals
                    </p>
                    <p className="mt-1 text-xs text-slate-200">
                      8-week recomposition
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full border border-slate-800 p-1">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-semibold text-emerald-300">
                          62%
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500">
                        Client and trainer both see trend over time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-900/80 p-3">
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">
                      Daily checklist
                    </p>
                    <p className="text-xs text-slate-200">
                      5 of 6 tasks completed
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className={`h-2 w-2 rounded-sm ${
                          i <= 5 ? "bg-emerald-400" : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section id="how-it-works" className="space-y-6">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              How TrainerBook works
            </h2>
            <p className="max-w-2xl text-sm text-slate-400">
              Simple flows for busy trainers and clients—no clunky software or
              complex setup.
            </p>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  title: "Create client plans",
                  desc: "Set up a client, drop in workouts, meals, and goals in one place.",
                  icon: "👤",
                },
                {
                  title: "Clients log in daily",
                  desc: "They see exactly what to do today—no more scrolling through DMs.",
                  icon: "📋",
                },
                {
                  title: "Track progress together",
                  desc: "Both of you see streaks, checklists, and goal trends over time.",
                  icon: "📈",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-lg">
                    <span>{item.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits: trainers vs clients */}
          <section className="space-y-6">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              Built for both trainers and clients
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  For trainers
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-50">
                  Save time and keep clients accountable
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li>• Organize all programs in one clean dashboard.</li>
                  <li>• Reuse templates instead of rewriting every plan.</li>
                  <li>• See who is on track and who needs a nudge.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  For clients
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-50">
                  Clear daily plan, no guesswork
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li>• Simple daily checklist with workouts and meals.</li>
                  <li>• See progress instead of random notes and screenshots.</li>
                  <li>• Stay consistent with small wins stacked every day.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Feature highlights */}
          <section className="space-y-6">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              Feature highlights
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Client dashboard",
                  desc: "One clean view for today’s workout, meals, and tasks.",
                },
                {
                  title: "Training programs",
                  desc: "Build and reuse structured blocks instead of scattered notes.",
                },
                {
                  title: "Meal plans",
                  desc: "Attach simple templates so nutrition matches the plan.",
                },
                {
                  title: "Goal tracking",
                  desc: "Track streaks and long‑term progress with lightweight metrics.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-50">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* For who strip */}
          <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
            <div>
              <h2 className="text-sm font-semibold text-slate-50">
                Who TrainerBook is for
              </h2>
              <p className="text-xs text-slate-400">
                Designed for real-world coaching, whether you&apos;re fully
                online or still in the gym every day.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 sm:mt-0">
              {["Online coaches", "Hybrid trainers", "In‑person PTs scaling online"].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Social proof */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold tracking-tight text-slate-50">
              Trusted by trainers and clients
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-200">
                  T
                </div>
                <div>
                  <p className="text-xs text-slate-300">
                    &quot;I finally see every client&apos;s day at a glance—and
                    I spend way less time inside spreadsheets.&quot;
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-slate-500">
                    Jamie, online strength coach
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-200">
                  C
                </div>
                <div>
                  <p className="text-xs text-slate-300">
                    &quot;I open TrainerBook and know exactly what today looks
                    like. No more digging through old texts.&quot;
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-slate-500">
                    Taylor, client
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="rounded-2xl border border-emerald-600/60 bg-emerald-500/10 p-6 text-center sm:text-left">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                  Start with your first client
                </h2>
                <p className="max-w-xl text-sm text-emerald-100/70">
                  Invite one client, set up their first 4 weeks, and see how it
                  feels to manage everything in one place.
                </p>
              </div>
              <button className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400">
                Start with your first client
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-6 flex items-center justify-between border-t border-slate-900 pt-4 text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} TrainerBook.</span>
          <div className="flex gap-4">
            <button className="hover:text-slate-300">Privacy</button>
            <button className="hover:text-slate-300">Terms</button>
          </div>
        </footer>
      </div>
    </div>
  );
} 
