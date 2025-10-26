import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <FeatureGrid />
      <Showcase />
      <CTA />
    </div>
  );
}
