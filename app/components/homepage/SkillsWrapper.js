'use client'; // <-- Direktif ini penting!

import dynamic from 'next/dynamic';

// Import dinamis untuk komponen Skills yang bermasalah
const Skills = dynamic(() => import('./skills'), { ssr: false });

export default function SkillsWrapper() {
  return <Skills />;
}