import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Calgary Landscape Supplies" className="h-20 w-auto mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              Family owned for over 15 years, bringing quality work to every project — from grading to finished landscapes of any kind.
            </p>
          </div>
          <div>
            <h4 className="font-display text-primary-foreground uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block hover:text-accent transition-colors">Services</a>
              <a href="#gallery" className="block hover:text-accent transition-colors">Our Work</a>
              <a href="#quote" className="block hover:text-accent transition-colors">Get a Quote</a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-primary-foreground uppercase tracking-wider text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span>Calgary, Okotoks & Foothills, AB</span>
              </div>
              <a href="tel:5878971602" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>(587) 897-1602</span>
              </a>
              <a href="mailto:kaden.calgarylandscapesupplies@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>kaden.calgarylandscapesupplies@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Calgary Landscape Supplies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
