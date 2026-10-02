import { useMemo } from 'react';

const features = [
    {
        title: 'Instant onboarding',
        description: 'Deploy internal business workflows and client portals in minutes with out-of-the-box setup.',
        icon: '⚡',
    },
    {
        title: 'Unified command layer',
        description: 'Control scheduling, billing, inventory, and updates from one developer-grade dashboard.',
        icon: '⌘',
    },
    {
        title: 'Secure release pipeline',
        description: 'Protected client downloads and update delivery with password-gated access.',
        icon: '🔒',
    },
    {
        title: 'Realtime monitoring',
        description: 'Track usage, alerts, and operational health with elegant metrics overlays.',
        icon: '📈',
    },
    {
        title: 'Configurable workflows',
        description: 'Build custom service flows for gyms, pharmacies, retail, restaurants, and salon teams.',
        icon: '🧩',
    },
    {
        title: 'Developer-first UI',
        description: 'A polished, responsive interface tuned for modern SaaS and internal tools.',
        icon: '🛠️',
    },
];

const pricing = [
    {
        name: 'Basic',
        price: '$29',
        description: 'Essential system access for small teams.',
        features: ['1 workspace', 'Basic analytics', 'Client updates'],
        featured: false,
    },
    {
        name: 'Pro',
        price: '$79',
        description: 'Best for fast-scaling service teams and operations.',
        features: ['5 workspaces', 'Advanced analytics', 'Priority support'],
        featured: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Custom solutions for large organizations and integrations.',
        features: ['Unlimited workspaces', 'Dedicated onboarding', 'SLA support'],
        featured: false,
    },
];

function App() {
    const gradientStyle = useMemo(
        () => ({
            background: 'radial-gradient(circle at top left, rgba(124, 58, 237, 0.22), transparent 24%), radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.18), transparent 32%)',
        }),
        []
    );

    return (
        <div className="min-h-screen bg-[#080a12] text-slate-100">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-60" style={gradientStyle} />
                <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 top-52 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

                <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                    <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em] uppercase text-slate-300">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-white shadow-glow">
                            V
                        </div>
                        Vertex
                    </div>

                    <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
                        <a href="#features" className="transition hover:text-white">Features</a>
                        <a href="#showcase" className="transition hover:text-white">Docs</a>
                        <a href="#pricing" className="transition hover:text-white">Pricing</a>
                    </nav>

                    <a
                        href="#pricing"
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:brightness-110"
                    >
                        Get Started
                    </a>
                </header>

                <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
                    <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                                Built for AI-enabled service teams
                            </div>
                            <div className="space-y-6">
                                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                                    The developer-grade platform for modern business operations.
                                </h1>
                                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                                    Launch and manage automation for gyms, pharmacies, restaurants, salons, retail stores and service centers with a polished, secure UI designed for builders.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-[1.01]"
                                >
                                    Start free trial
                                </a>
                                <a
                                    href="#showcase"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-7 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:border-slate-500 hover:text-white"
                                >
                                    View demo
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
                            <div className="mb-6 flex items-center justify-between rounded-3xl bg-slate-900/80 px-4 py-3 text-xs uppercase tracking-[0.28em] text-slate-400">
                                <span>Console preview</span>
                                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-200">Beta</span>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                                    <div className="mb-4 flex items-center gap-3 text-xs text-slate-400">
                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                        <span>Live status</span>
                                    </div>
                                    <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                                        <div className="rounded-3xl bg-slate-950/90 p-4">
                                            <p className="text-slate-400">Active pipelines</p>
                                            <p className="mt-3 text-2xl font-semibold text-white">12</p>
                                        </div>
                                        <div className="rounded-3xl bg-slate-950/90 p-4">
                                            <p className="text-slate-400">Pending releases</p>
                                            <p className="mt-3 text-2xl font-semibold text-white">3</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                                    <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                                        <span>Update delivery</span>
                                        <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200">Secure</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="rounded-3xl bg-slate-950/90 p-4">
                                            <p className="text-slate-400">Client access</p>
                                            <p className="mt-2 text-lg font-medium text-white">Password gated</p>
                                        </div>
                                        <div className="rounded-3xl bg-slate-950/90 p-4">
                                            <p className="text-slate-400">Download flow</p>
                                            <p className="mt-2 text-lg font-medium text-white">Redirect to secure link</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <section id="features" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
                <div className="mb-12 max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Features</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Everything teams need to run better operations.</h2>
                    <p className="mt-4 text-lg leading-8 text-slate-400">
                        Built with developer workflows and modern internal tooling in mind, Vertex brings clarity and speed to business processes.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <article key={feature.title} className="group rounded-[24px] border border-slate-800/80 bg-slate-950/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-slate-900/90 hover:shadow-glow">
                            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-sky-500 text-2xl shadow-glow">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                            <p className="mt-3 text-slate-400 leading-7">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="showcase" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_0.8fr]">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Developer console</p>
                        <h2 className="text-4xl font-semibold tracking-tight text-white">See the workflow in motion.</h2>
                        <p className="max-w-xl text-lg leading-8 text-slate-400">
                            The interface feels like a premium dev tool, with terminal-style panels, clear status cards, and polished gradients that highlight key actions.
                        </p>
                    </div>
                    <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/90 p-8 shadow-[0_40px_120px_rgba(31,41,55,0.35)] backdrop-blur-xl">
                        <div className="rounded-[26px] border border-slate-800 bg-slate-900/95 p-6">
                            <div className="mb-6 flex items-center justify-between text-slate-400">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                </div>
                                <span className="rounded-full border border-slate-700 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-500">Live</span>
                            </div>
                            <div className="space-y-5 text-sm text-slate-300">
                                <div className="rounded-3xl bg-slate-950/90 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-slate-400">Deployment</p>
                                            <p className="mt-2 text-lg font-semibold text-white">/release/publish</p>
                                        </div>
                                        <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-300">Ready</span>
                                    </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-3xl bg-slate-950/90 p-5">
                                        <p className="text-slate-400">Pipeline</p>
                                        <p className="mt-2 text-lg font-semibold text-white">Client update flow</p>
                                    </div>
                                    <div className="rounded-3xl bg-slate-950/90 p-5">
                                        <p className="text-slate-400">Health</p>
                                        <p className="mt-2 text-lg font-semibold text-white">Stable · 99.98%</p>
                                    </div>
                                </div>
                                <div className="rounded-3xl bg-slate-950/90 p-5">
                                    <p className="text-slate-400">Command</p>
                                    <pre className="mt-3 overflow-x-auto rounded-2xl bg-[#0f172a] px-4 py-4 text-sm text-slate-200">
                                        {`run update --target=pharmacy --secure-mode`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
                <div className="mb-12 max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Pricing</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Simple plans for scaling teams.</h2>
                    <p className="mt-4 text-lg leading-8 text-slate-400">
                        Choose a plan that matches your growth stage, with clear pricing and premium support for teams of any size.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {pricing.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-[32px] border p-8 transition duration-300 ${plan.featured ? 'border-violet-500/40 bg-slate-900/95 shadow-glow' : 'border-slate-800/80 bg-slate-950/80 hover:-translate-y-1 hover:border-slate-600'
                                }`}
                        >
                            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">{plan.name}</div>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-semibold text-white">{plan.price}</span>
                                <span className="pb-1 text-sm text-slate-400">/mo</span>
                            </div>
                            <p className="mt-4 text-slate-400">{plan.description}</p>
                            <ul className="mt-8 space-y-3 text-slate-300">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-sky-400">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${plan.featured ? 'bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-glow' : 'border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800'
                                    }`}
                            >
                                Choose {plan.name}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="border-t border-slate-800/80 bg-slate-950/80 px-6 py-10 text-slate-400 sm:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.32em] text-slate-300">Vertex Systems</div>
                        <p className="text-sm text-slate-500">Modern business automation for developer-minded teams.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                        <a href="#features" className="transition hover:text-white">Features</a>
                        <a href="#showcase" className="transition hover:text-white">Docs</a>
                        <a href="#pricing" className="transition hover:text-white">Pricing</a>
                    </div>
                </div>
                <p className="mt-8 text-center text-xs text-slate-600">© 2026 Vertex Systems. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
