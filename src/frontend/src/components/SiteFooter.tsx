import { Truck, Mail, Phone, MapPin, User } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin } from 'react-icons/si';

export function SiteFooter() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/assets/generated/rs-logistics-logo.dim_1024x256.png"
              alt="RS LOGISTICS"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/80">
              Reliable transport solutions for coal, agriculture, and goods across Assam and beyond.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Truck className="h-4 w-4 text-primary" />
              <span className="font-semibold">RS LOGISTICS OF TRANSPORT BUSINESS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Coal Transport</li>
              <li>Agriculture Transport</li>
              <li>Goods Transport</li>
              <li>Logistics Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <User className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-secondary-foreground/80 font-medium">RAJU SARKAR</span>
                  <span className="text-secondary-foreground/60 text-xs block">Founder</span>
                </div>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Bishnupur, Guwahati, Assam 781018
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+918135954933" 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 8135954933
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">info@rslogistics.com</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-4">
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>
            © 2026. Built with <span className="text-primary">♥</span> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
