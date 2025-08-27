'use client'; // <-- Direktif ini memberitahu Next.js bahwa ini adalah Client Component

import dynamic from 'next/dynamic';

// Import dinamis untuk komponen Skills
const Skills = dynamic(() => import('./skills'), { ssr: false });

export default function SkillsWrapper() {
  return <Skills />;
}