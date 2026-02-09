import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ServiceAreaSection } from './components/sections/ServiceAreaSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ServiceAreaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
