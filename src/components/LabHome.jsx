import {
  ArrowRight,
  ArrowUpRight,
  CircuitBoard,
  Cpu,
  FlaskConical,
  Github,
  Monitor,
  Spline,
} from 'lucide-react'

const projects = [
  {
    name: 'xsvg',
    label: 'Live',
    href: 'https://xsvg.visioncortex.org/',
    iconSrc: '/project-icons/xsvg.svg',
    summary:
      'Graphic design for AI, no pixels required. XSVG is the vector format SVG2 should have been — typography, shape transforms, mesh gradients — with an MCP tool that lets LLMs design straight in structure.',
    points: ['Typography and typesetting', 'Shape transforms', 'Mesh gradients'],
    visual: 'mesh',
  },
  {
    name: 'UI Automata',
    label: 'Live',
    href: 'https://automata.visioncortex.org/',
    icon: Monitor,
    summary:
      'Read any screen as structure, not pixels. UI Automata turns what is on the display into a live element tree, then lets agents drive it through declarative, observable workflows.',
    points: ['Declarative YAML workflows', 'UIA, DOM, and vision modes', 'Agent-native MCP tooling'],
    visual: 'automata',
  },
  {
    name: 'VTracer 2',
    label: 'Coming soon',
    href: 'https://github.com/visioncortex/vtracer/',
    icon: Spline,
    summary:
      'Vectorizing is entropy in reverse. VTracer 2 pulls clean, editable vector structure back out of a flat field of pixels — the widely-adopted vectorizer thousands of developers trust, rebuilt around a machine-learning core.',
    points: ['Proven in production', 'ML-based pipeline', 'Editable SVG output'],
    visual: 'vtracer',
  },
]

const transforms = [
  ['A live screen', 'UI Element tree'],
  ['A raster image', 'Editable vectors'],
  ['A design brief', 'Vector artwork'],
]

const signals = [
  ['3', 'Systems, one thesis'],
  ['Open', 'Source at the core'],
  ['SVG', 'The common substrate'],
]

function ProjectVisual({ type }) {
  if (type === 'vtracer') {
    return (
      <div className="relative h-48 overflow-hidden rounded-md bg-[#f8fafc]">
        <svg
          className="h-full w-full"
          viewBox="0 0 420 220"
          role="img"
          aria-label="Editable vector curve with Bezier handles"
        >
          <defs>
            <linearGradient id="vtracerCurve" x1="72" x2="344" y1="158" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0a64c8" />
              <stop offset="0.55" stopColor="#13bfd1" />
              <stop offset="1" stopColor="#d69a17" />
            </linearGradient>
            <pattern id="vtracerGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#dbe5ef" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="420" height="220" fill="url(#vtracerGrid)" />
          <path
            d="M76 154 C122 52 186 180 224 112 C264 42 305 58 344 74"
            fill="none"
            stroke="url(#vtracerCurve)"
            strokeLinecap="round"
            strokeWidth="9"
          />
          <path
            d="M76 154 L122 52 M224 112 L186 180 M224 112 L264 42 M344 74 L305 58"
            fill="none"
            stroke="#64748b"
            strokeDasharray="6 8"
            strokeLinecap="round"
            strokeWidth="2"
          />
          {[
            [76, 154, '#0a64c8'],
            [224, 112, '#13bfd1'],
            [344, 74, '#d69a17'],
          ].map(([cx, cy, fill]) => (
            <rect
              fill={fill}
              height="16"
              key={`${cx}-${cy}`}
              rx="3"
              stroke="#ffffff"
              strokeWidth="3"
              transform={`rotate(45 ${cx} ${cy})`}
              width="16"
              x={cx - 8}
              y={cy - 8}
            />
          ))}
          {[
            [122, 52],
            [186, 180],
            [264, 42],
            [305, 58],
          ].map(([cx, cy]) => (
            <circle
              cx={cx}
              cy={cy}
              fill="#ffffff"
              key={`${cx}-${cy}`}
              r="7"
              stroke="#08111f"
              strokeWidth="3"
            />
          ))}
        </svg>
      </div>
    )
  }

  if (type === 'automata') {
    return (
      <div className="relative h-48 overflow-hidden rounded-md bg-[#08111f]">
        <svg
          className="h-full w-full"
          viewBox="0 0 420 220"
          role="img"
          aria-label="Robot arm operating a desktop application window"
        >
          <defs>
            <linearGradient id="armMetal" x1="96" x2="286" y1="180" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#13bfd1" />
              <stop offset="1" stopColor="#a4e96c" />
            </linearGradient>
          </defs>
          <rect width="420" height="220" fill="#08111f" />
          <rect x="184" y="34" width="192" height="124" rx="8" fill="#f8fafc" />
          <rect x="184" y="34" width="192" height="24" rx="8" fill="#dbeafe" />
          <circle cx="202" cy="46" r="4" fill="#ef4444" />
          <circle cx="216" cy="46" r="4" fill="#d69a17" />
          <circle cx="230" cy="46" r="4" fill="#13bfd1" />
          <rect x="204" y="76" width="72" height="12" rx="3" fill="#0a64c8" opacity="0.9" />
          <rect x="204" y="98" width="132" height="8" rx="3" fill="#cbd5e1" />
          <rect x="204" y="116" width="104" height="8" rx="3" fill="#cbd5e1" />
          <rect x="320" y="76" width="32" height="32" rx="6" fill="#13bfd1" opacity="0.18" />
          <path d="M332 92h9m-4.5-4.5v9" stroke="#0a64c8" strokeLinecap="round" strokeWidth="3" />
          <path d="M190 158h180" stroke="#334155" strokeLinecap="round" strokeWidth="6" />
          <rect x="254" y="160" width="52" height="12" rx="3" fill="#475569" />

          <circle cx="74" cy="174" r="22" fill="#0f2b46" stroke="#13bfd1" strokeWidth="4" />
          <path d="M74 174 L122 128 L178 118" fill="none" stroke="url(#armMetal)" strokeLinecap="round" strokeWidth="18" />
          <circle cx="122" cy="128" r="17" fill="#08111f" stroke="#a4e96c" strokeWidth="5" />
          <circle cx="178" cy="118" r="13" fill="#08111f" stroke="#13bfd1" strokeWidth="5" />
          <path d="M184 118 L212 104" stroke="#d69a17" strokeLinecap="round" strokeWidth="8" />
          <path d="M212 104 L226 96 M212 104 L228 112" stroke="#d69a17" strokeLinecap="round" strokeWidth="4" />
          <circle cx="226" cy="96" r="5" fill="#ffffff" />
          <circle cx="228" cy="112" r="5" fill="#ffffff" />
          <path d="M228 112 C248 116 271 113 292 104" fill="none" stroke="#a4e96c" strokeDasharray="5 7" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
    )
  }

  return (
    <div className="relative h-48 overflow-hidden rounded-md bg-[#09182b]">
      <svg
        className="h-full w-full"
        viewBox="0 0 420 220"
        role="img"
        aria-label="Typography layout with editable text and connector arrows"
      >
        <defs>
          <linearGradient id="typeFill" x1="82" x2="188" y1="54" y2="166" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#13bfd1" />
            <stop offset="1" stopColor="#d69a17" />
          </linearGradient>
          <marker id="arrowHead" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0 L8 4 L0 8 Z" fill="#13bfd1" />
          </marker>
        </defs>
        <rect width="420" height="220" fill="#09182b" />
        <path d="M38 58 C112 22 158 42 212 76 S316 126 380 82" fill="none" stroke="#13bfd1" strokeDasharray="6 8" strokeLinecap="round" strokeWidth="2" opacity="0.55" markerEnd="url(#arrowHead)" />
        <path d="M48 164 C118 128 164 152 214 118 S318 60 374 138" fill="none" stroke="#d69a17" strokeDasharray="5 9" strokeLinecap="round" strokeWidth="2" opacity="0.58" markerEnd="url(#arrowHead)" />
        <path d="M206 44 L284 74" fill="none" stroke="#a4e96c" strokeLinecap="round" strokeWidth="2" opacity="0.55" markerEnd="url(#arrowHead)" />
        <text
          x="58"
          y="156"
          fill="url(#typeFill)"
          fontFamily="Georgia, serif"
          fontSize="108"
          fontWeight="700"
        >
          Ab
        </text>
      </svg>
    </div>
  )
}

export default function LabHome() {
  return (
    <div className="min-h-screen overflow-hidden bg-cortex-ink text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(19,191,209,0.22),transparent_28%),radial-gradient(circle_at_72%_20%,rgba(214,154,23,0.18),transparent_24%),linear-gradient(180deg,transparent,rgba(8,17,31,0.92)_76%)]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a className="flex items-center gap-3" href="/">
          <img className="h-10 w-10 rounded-sm" src="/apple-icon.png" alt="" />
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">Vision Cortex</span>
        </a>
        <nav className="hidden items-center gap-5 text-sm text-white/70 sm:flex">
          <a className="hover:text-white" href="https://xsvg.visioncortex.org/">XSVG</a>
          <a className="hover:text-white" href="https://automata.visioncortex.org/">UI Automata</a>
          <a className="hover:text-white" href="https://github.com/visioncortex/vtracer/">VTracer</a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-10 px-5 pb-12 pt-10 lg:grid-cols-[minmax(0,1fr)_28rem] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100">
              <FlaskConical className="h-3.5 w-3.5" />
              AI research lab
            </div>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Pixels are for humans. Machines need structure.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Vision Cortex is a research lab building the visual intelligence layer for AI. Whether it is
              reading a screen, vectorizing an image, or composing new graphics, our systems keep machines
              working in structure — never drowning in raw pixels.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-cortex-ink hover:bg-cyan-100" href="#flagships">
                Explore projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-200 hover:bg-white/10" href="https://github.com/visioncortex/">
                GitHub
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-glow backdrop-blur">
            <div className="rounded-md border border-white/10 bg-cortex-ink/80 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">The core transform</p>
                  <p className="mt-1 text-2xl font-semibold">everything becomes structure</p>
                </div>
                <Cpu className="h-8 w-8 text-cortex-gold" />
              </div>
              <div className="mt-5 grid gap-3">
                {transforms.map(([from, to]) => (
                  <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3" key={to}>
                    <span className="flex-1 text-sm text-slate-400">{from}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-cyan-300" />
                    <span className="flex-1 text-right text-sm font-medium text-white">{to}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {signals.map(([value, label]) => (
                  <div className="rounded-md bg-white/[0.05] p-3" key={label}>
                    <p className="text-xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/10 bg-white text-cortex-ink" id="flagships">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cortex-blue">Flagship Projects</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950">
                  Three systems, one idea: give AI structure, not pixels.
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map(project => {
                const Icon = project.icon
                return (
                  <a
                    className="group flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-cortex-blue/40 hover:shadow-xl"
                    href={project.href}
                    key={project.name}
                  >
                    <ProjectVisual type={project.visual} />
                    <div className="flex flex-1 flex-col p-2 pt-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-white">
                            {project.iconSrc ? (
                              <img className="h-10 w-10 rounded-md" src={project.iconSrc} alt="" />
                            ) : (
                              <Icon className="h-5 w-5" />
                            )}
                          </span>
                          <div>
                            <h3 className="text-2xl font-semibold tracking-normal text-slate-950">{project.name}</h3>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cortex-gold">{project.label}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-cortex-blue" />
                      </div>
                      <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">{project.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.points.map(point => (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700" key={point}>
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/10" id="thesis">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  The thesis · since 2020
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
                  Structure from chaos.
                </h2>
                <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-slate-300">
                  <p>
                    Your visual cortex takes a chaotic flood of light — millions of noisy signals a second —
                    and quietly turns it into a world you can reason about, recognizing the patterns hidden
                    in the noise: edges, objects, symbols, meaning. Vision Cortex set out in 2020 to build
                    that same faculty for machines. The
                    founding bet was narrow and specific: man-made graphics — symbols, screens, diagrams,
                    type — carry structure someone put there on purpose, and a vision system&apos;s job is to
                    recover it. Recognition, as we put it then, is information reduction: move up from pixels
                    to shapes to meaning, and discard everything that is not the idea. We proved it on hard
                    cases — optical character recognition, symbol extraction from noisy backgrounds, the
                    geometry of engineering drawings — and called it semantic computer vision.
                  </p>
                  <p>
                    Years later, that principle describes exactly what modern AI is missing. Models are
                    extraordinary reasoners handed the wrong representation. The visual world reaches them as
                    pixels — a flat grid of color that means nothing until something rebuilds the button, the
                    glyph, the curve inside it. Every screenshot parsed and every image traced is a model
                    reconstructing structure that was thrown away the moment it was rendered: slow, lossy,
                    and unreliable.
                  </p>
                  <p>
                    So we do the reduction for it. Vectors, element trees, symbolic scenes — the abstract
                    representation beneath the pixels, the layer graphics were built from in the first place.
                    Give a machine that, and it can reason precisely, edit losslessly, and act without
                    guessing. One faculty, wherever machines meet the visual world: structure, derived from
                    chaos.
                  </p>
                </div>
              </div>

              <aside className="lg:pt-14">
                <figure className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur">
                  <span className="block font-serif text-6xl leading-none text-cortex-gold" aria-hidden="true">&ldquo;</span>
                  <blockquote className="-mt-3 text-xl leading-8 text-slate-100">
                    Is a symbol a fundamental concept that exists outside human experience — or an artifact
                    that only makes sense to the human brain, specifically, the visual cortex?
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-400">
                    The question Vision Cortex was named for.
                  </figcaption>
                </figure>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-cortex-ink px-5 py-6 text-center text-sm text-slate-400">
        © 2026 Seafire Software Limited
      </footer>
    </div>
  )
}
