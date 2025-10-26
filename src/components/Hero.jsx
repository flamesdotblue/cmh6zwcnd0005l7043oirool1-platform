import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-content-center rounded-lg bg-neutral-900 text-white">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">QuickCode</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a className="hover:text-neutral-900 transition-colors" href="#features">Features</a>
            <a className="hover:text-neutral-900 transition-colors" href="#showcase">Components</a>
            <a className="hover:text-neutral-900 transition-colors" href="#docs">Docs</a>
            <a className="hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#docs" className="hidden rounded-md border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 md:inline-flex items-center gap-2">
              <BookOpen size={16} /> Docs
            </a>
            <a href="https://github.com" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
              <Github size={16} /> GitHub
            </a>
          </div>
        </header>

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-10 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs text-neutral-700 backdrop-blur"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            New: Production-ready components and themes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl"
          >
            Build interfaces fast with a clean, modern UI toolkit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-5 max-w-2xl text-base text-neutral-700 sm:text-lg"
          >
            QuickCode gives developers a consistent library of accessible, customizable components. Ship dashboards and apps without fiddling with pixels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800">
              <Rocket size={16} /> Get Started
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50">
              Explore Components
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
