import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import FeatureGrid from './components/FeatureGrid';
import WheelPreview from './components/WheelPreview';
import HowItWorks from './components/HowItWorks';
import OnChainSection from './components/OnChainSection';
import ChatPreview from './components/ChatPreview';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-base text-chalk">
      <Header />
      <main className="relative">
        <Hero />
        <StatsStrip />
        <FeatureGrid />
        <WheelPreview />
        <HowItWorks />
        <OnChainSection />
        <ChatPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
