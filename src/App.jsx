import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContactProvider, useContact } from './context/ContactContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import IntroAnimation from './components/IntroAnimation.jsx';
import Home from './pages/Home.jsx';
import AISolutions from './pages/AISolutions.jsx';
import ComputingSystems from './pages/ComputingSystems.jsx';
import EmbeddedBoards from './pages/EmbeddedBoards.jsx';
import NetworkSolutions from './pages/NetworkSolutions.jsx';
import NetworkDesktop from './pages/network/NetworkDesktop.jsx';
import NetworkRackmount from './pages/network/NetworkRackmount.jsx';
import NetworkIndustrial from './pages/network/NetworkIndustrial.jsx';
import NetworkModules from './pages/network/NetworkModules.jsx';
import About from './pages/About.jsx';
import UpOverview from './pages/up/UpOverview.jsx';
import UpBoards from './pages/up/UpBoards.jsx';
import UpSystems from './pages/up/UpSystems.jsx';
import UpEdgeComputingKit from './pages/up/UpEdgeComputingKit.jsx';
import UpEdgeAIToolkit from './pages/up/UpEdgeAIToolkit.jsx';
import IotGateways from './pages/iot/IotGateways.jsx';
import PanelPC from './pages/panel/PanelPC.jsx';
import Products from './pages/Products.jsx';
import SolutionShowcase from './pages/SolutionShowcase.jsx';

function AppContent() {
  const { isOpen, closeModal } = useContact();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Show intro animation on every page load/refresh
    setShowIntro(true);

    // Add a class after initial paint to enable intro transitions
    const timer = requestAnimationFrame(() => {
      document.documentElement.classList.add('app-mounted');
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="/computing-systems" element={<ComputingSystems />} />
        <Route path="/embedded-boards" element={<EmbeddedBoards />} />
        <Route path="/network" element={<NetworkSolutions />} />
        <Route path="/network/desktop" element={<NetworkDesktop />} />
        <Route path="/network/rackmount" element={<NetworkRackmount />} />
        <Route path="/network/industrial-security" element={<NetworkIndustrial />} />
        <Route path="/network/modules" element={<NetworkModules />} />
        <Route path="/about" element={<About />} />
        <Route path="/up" element={<UpOverview />} />
        <Route path="/up/boards" element={<UpBoards />} />
        <Route path="/up/systems" element={<UpSystems />} />
        <Route path="/up/edge-computing-kit" element={<UpEdgeComputingKit />} />
        <Route path="/up/edge-ai-toolkit" element={<UpEdgeAIToolkit />} />
        <Route path="/iot-gateways" element={<IotGateways />} />
        <Route path="/panel-pcs" element={<PanelPC />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<SolutionShowcase />} />
      </Routes>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

export default function App() {
  return (
    <ContactProvider>
      <AppContent />
    </ContactProvider>
  );
}


