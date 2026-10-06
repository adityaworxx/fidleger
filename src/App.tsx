import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CustomerProof } from './components/CustomerProof';
import { Pillars } from './components/Pillars';
import { Footer } from './components/Footer';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';
import { LeadCaptureModal } from './components/LeadCaptureModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [leadModalState, setLeadModalState] = useState<{
    isOpen: boolean;
    type: 'get-started' | 'contact-sales' | 'login';
  }>({
    isOpen: false,
    type: 'get-started',
  });

  const handleOpenGetStarted = () => {
    setLeadModalState({ isOpen: true, type: 'get-started' });
  };

  const handleOpenContactSales = () => {
    setLeadModalState({ isOpen: true, type: 'contact-sales' });
  };

  const handleOpenLogIn = () => {
    setLeadModalState({ isOpen: true, type: 'login' });
  };

  const handleCloseLeadModal = () => {
    setLeadModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101113] selection:bg-[#242872] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenGetStarted={handleOpenGetStarted}
        onOpenContactSales={handleOpenContactSales}
        onOpenLogIn={handleOpenLogIn}
        onOpenSeeInAction={() => setDemoModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Asana AI Hero Section */}
        <Hero
          onSeeInAction={() => setDemoModalOpen(true)}
          onGetStarted={handleOpenGetStarted}
        />

        {/* 98% of Top 500 Customers Proof & Logos */}
        <CustomerProof />

        {/* 3 Core Value Pillars */}
        <Pillars />
      </main>

      {/* Footer */}
      <Footer
        onOpenGetStarted={handleOpenGetStarted}
        onOpenContactSales={handleOpenContactSales}
      />

      {/* Interactive "See it in action" Demo Modal */}
      <InteractiveDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onGetStarted={handleOpenGetStarted}
      />

      {/* Lead Capture & Auth Modals */}
      <LeadCaptureModal
        isOpen={leadModalState.isOpen}
        type={leadModalState.type}
        onClose={handleCloseLeadModal}
      />
    </div>
  );
}
