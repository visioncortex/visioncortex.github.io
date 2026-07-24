import { ArrowLeft, ExternalLink } from 'lucide-react'

const articleLinks = [
  ['SymCode', '/symcode-docs/'],
  ['Impression', '/impression-docs/'],
  ['VTracer', '/vtracer-docs/'],
  ['ShapeSense', '/shape-sense-docs/'],
]

export default function ArticleLayout({ title, eyebrow, Component, children }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <a className="inline-flex items-center gap-3 font-semibold text-cortex-navy" href="/">
            <img className="h-9 w-9 rounded-sm" src="/apple-icon.png" alt="" />
            Vision Cortex
          </a>
          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            {articleLinks.map(([label, href]) => (
              <a className="rounded-full px-3 py-1.5 hover:bg-slate-100 hover:text-cortex-blue" href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
        <article className="min-w-0 rounded-lg border border-slate-200 bg-white px-5 py-7 shadow-sm sm:px-8 lg:px-12">
          <a className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-cortex-blue hover:text-cortex-navy" href="/">
            <ArrowLeft className="h-4 w-4" />
            Lab home
          </a>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cortex-gold">{eyebrow}</p>
          <div className="prose prose-slate mt-5 max-w-none prose-a:text-cortex-blue prose-a:no-underline hover:prose-a:text-cortex-navy prose-img:rounded-md prose-img:border prose-img:border-slate-200 prose-hr:border-slate-200">
            {Component ? <Component /> : children}
          </div>
        </article>

        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Direct Articles</p>
          <div className="mt-4 grid gap-2">
            {articleLinks.map(([label, href]) => (
              <a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-cortex-blue" href={href} key={href}>
                {label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </aside>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-6 text-center text-sm text-slate-500">
        © 2026 Seafire Software Limited
      </footer>
    </div>
  )
}
