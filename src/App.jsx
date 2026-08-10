import React from 'react';
import { ModernProvider } from './context/ModernContext';
import NavbarModern from './components/NavbarModern';
import HeroVisualizer from './components/HeroVisualizer';
import PortfolioModern from './components/PortfolioModern';
import MaterialVisualizer from './components/MaterialVisualizer';
import CalculatorModern from './components/CalculatorModern';
import StyleQuizModern from './components/StyleQuizModern';
import ConsultationDrawer from './components/ConsultationDrawer';
import FooterModern from './components/FooterModern';

export default function App() {
  return (
    <ModernProvider>
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <NavbarModern />
        <main>
          <HeroVisualizer />
          <PortfolioModern />
          <MaterialVisualizer />
          <CalculatorModern />
          <StyleQuizModern />
        </main>
        <FooterModern />

        {/* Consultation Scheduler Drawer */}
        <ConsultationDrawer />
      </div>
    </ModernProvider>
  );
}
