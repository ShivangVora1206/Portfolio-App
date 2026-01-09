import './App.css';
import { useEffect, useState } from 'react';
import Scene3D from './components/Scene3D';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import ArticlesSection from './components/ArticlesSection';
import Spinner from './components/Spinner';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const updateTouchPosition = (e) => {
      if (e.touches && e.touches.length > 0) {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition, { passive: true });
    window.addEventListener('touchstart', updateTouchPosition, { passive: true });

    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateTouchPosition);
      window.removeEventListener('touchstart', updateTouchPosition);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="z-50 bg-black h-screen w-full fixed flex flex-col justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* 3D Background Scene */}
      <Scene3D mousePosition={mousePosition} />
      
      {/* Custom Cursor */}
      <div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Content */}
      <main className="relative z-10">
        <HeroSection globalMousePosition={mousePosition} />
        <ExperienceSection />
        <ProjectsSection />
        <ArticlesSection />
        <TechStackSection />
        
        {/* Footer */}
        <footer className="py-12 px-6 border-t-2 border-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 font-mono text-sm">
                © 2026 SHIVANG VORA. ALL RIGHTS RESERVED.
              </p>
              <p className="text-gray-400 font-mono text-sm">
                DESIGNED & DEVELOPED WITH ❤️
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
