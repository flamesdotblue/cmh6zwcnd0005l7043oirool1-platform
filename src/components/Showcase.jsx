import React from 'react';
import { motion } from 'framer-motion';

function Card({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-3 text-sm font-medium text-neutral-900">{title}</div>
      <div className="rounded-lg border border-dashed border-neutral-200 p-4">{children}</div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Component building blocks</h2>
        <p className="mt-3 text-neutral-700">Clean, reusable patterns for common UI primitives. Mix and match to build complex interfaces quickly.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card title="Navigation / Tabs">
          <div className="flex flex-wrap gap-2">
            {['Overview', 'Analytics', 'Team', 'Billing'].map((t, i) => (
              <button key={t} className={`rounded-md px-3 py-1.5 text-sm ${i === 1 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'}`}>{t}</button>
            ))}
          </div>
        </Card>

        <Card title="Data / Table">
          <div className="overflow-hidden rounded-lg border border-neutral-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr>
                  <th className="px-3 py-2">Component</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Version</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Button', s: 'Stable', v: '1.3.0' },
                  { c: 'Dialog', s: 'Stable', v: '1.1.2' },
                  { c: 'DataTable', s: 'Beta', v: '0.7.5' },
                ].map((row, i) => (
                  <tr key={i} className="odd:bg-white even:bg-neutral-50/60">
                    <td className="px-3 py-2 text-neutral-900">{row.c}</td>
                    <td className="px-3 py-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs ${row.s === 'Stable' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>{row.s}</span>
                    </td>
                    <td className="px-3 py-2 text-neutral-700">{row.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Forms / Controls">
          <form className="grid gap-3">
            <label className="grid gap-1">
              <span className="text-xs text-neutral-600">Project name</span>
              <input className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900" placeholder="Acme Dashboard" />
            </label>
            <label className="grid gap-1">
              <span className="text-xs text-neutral-600">Framework</span>
              <select className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900">
                <option>React</option>
                <option>Next.js</option>
                <option>Vue</option>
              </select>
            </label>
            <div className="flex items-center gap-2 text-sm">
              <input id="chk" type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900" />
              <label htmlFor="chk" className="text-neutral-700">Include example data</label>
            </div>
            <button type="button" className="mt-1 inline-flex items-center justify-center rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">Generate</button>
          </form>
        </Card>
      </div>
    </section>
  );
}
