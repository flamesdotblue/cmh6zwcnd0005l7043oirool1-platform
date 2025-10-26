import React from 'react';
import { Layers, Puzzle, Wrench, Zap, Shield, Terminal, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Layers className="h-5 w-5" />, 
    title: 'Composable Primitives',
    desc: 'Headless building blocks with sensible defaults. Compose, extend, and theme with ease.'
  },
  {
    icon: <Puzzle className="h-5 w-5" />,
    title: 'Rich Component Suite',
    desc: 'Tables, forms, nav, modals, charts scaffolding—built for dashboards and apps.'
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: 'First-class Theming',
    desc: 'Switch tokens, radii, and typography with CSS variables. Dark mode ready.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Performance Focused',
    desc: 'Small footprint, lazy-loaded patterns, and no runtime surprises.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Accessible by Default',
    desc: 'Keyboard navigation, ARIA-compliant patterns, and sensible focus management.'
  },
  {
    icon: <Terminal className="h-5 w-5" />,
    title: 'Developer Friendly',
    desc: 'Type-safe props, thorough docs, and copy-paste examples that just work.'
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center gap-2 text-sm text-emerald-700">
        <div className="rounded-full bg-emerald-100 p-1"><Sparkles className="h-4 w-4" /></div>
        <span className="font-medium">Why QuickCode</span>
      </div>

      <div className="mb-6 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Ship features, not pixels</h2>
        <p className="mt-3 text-neutral-700">Focus on product. QuickCode handles structure, accessibility, and visual harmony so teams can move quickly and consistently.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white p-2 text-neutral-900">
              {f.icon}
            </div>
            <h3 className="text-base font-semibold text-neutral-900">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
