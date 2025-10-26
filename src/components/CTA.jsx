import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 shadow-sm sm:p-10">
        <div className="grid items-center gap-6 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-semibold text-neutral-900">Start building with QuickCode</h3>
            <p className="mt-2 text-neutral-700">Install the library, copy a template, and ship your next feature today. It’s that simple.</p>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-950 p-4 text-xs text-neutral-100"><code>npm install quickcode-ui\n\n# or\n\nyarn add quickcode-ui</code></pre>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a href="#docs" className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
              <Rocket size={16} /> Read the Docs
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50">View Pricing</a>
          </div>
        </div>
      </div>
      <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600 sm:flex-row">
        <div>© {new Date().getFullYear()} QuickCode UI</div>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-neutral-900">Privacy</a>
          <a href="#terms" className="hover:text-neutral-900">Terms</a>
          <a href="#changelog" className="hover:text-neutral-900">Changelog</a>
        </div>
      </footer>
    </section>
  );
}
