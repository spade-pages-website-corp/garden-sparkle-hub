import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Calgary Landscape Supplies" className="h-14 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 font-display text-sm uppercase tracking-wider text-primary-foreground/80 px-8 bg-blue-500">
          <a href="/#services" className="hover:text-accent transition-colors">
            Services
          </a>
          <a href="/#gallery" className="hover:text-accent transition-colors">
            Our Work
          </a>
          <a href="/#quote" className="hover:text-accent transition-colors">
            Get a Quote
          </a>
          <a href="/bulk-materials" className="hover:text-accent transition-colors">
            Materials
          </a>
        </div>
        <a
          href="tel:5878971602"
          className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-display text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">(587) 897-1602</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
