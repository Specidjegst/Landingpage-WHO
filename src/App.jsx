import Header from './components/Header';
import Hero from './components/Hero';
import GamePreview from './components/GamePreview';
import HowItWorks from './components/HowItWorks';
import PvPSection from './components/PvPSection';
import BaseSection from './components/BaseSection';
import CommunitySection from './components/CommunitySection';
import RewardsSection from './components/RewardsSection';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="relative">
        <Hero />
        <GamePreview />
        <HowItWorks />
        <PvPSection />
        <BaseSection />
        <RewardsSection />
        <CommunitySection />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
