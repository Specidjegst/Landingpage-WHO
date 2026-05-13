import Sidebar from './components/Sidebar';
import DashboardMain from './components/DashboardMain';
import DashboardChat from './components/DashboardChat';

export default function App() {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-base text-chalk">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-violet/30 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-neon/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-magenta/20 blur-[140px]" />

      <Sidebar />
      <DashboardMain />
      <DashboardChat />
    </div>
  );
}
