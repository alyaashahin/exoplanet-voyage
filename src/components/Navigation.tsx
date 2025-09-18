import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Discoveries", href: "/discoveries" },
    { name: "Research", href: "/research" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-cosmic backdrop-blur-xl border-b border-cosmic-purple/20 shadow-cosmic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-stellar rounded-full shadow-stellar"></div>
              <div className="absolute inset-0 bg-gradient-stellar rounded-full blur opacity-50 group-hover:opacity-80 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cosmic-gold to-cosmic-purple bg-clip-text text-transparent">
              ExoPlanet Explorer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.href) 
                    ? "text-white bg-cosmic-purple/20 shadow-lg" 
                    : "text-foreground/80 hover:text-white hover:bg-cosmic-blue/20"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-lg opacity-20"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-lg opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cosmic-gold hover:bg-cosmic-purple/20 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-gradient-to-b from-cosmic-deep/90 to-background backdrop-blur-xl border-t border-cosmic-purple/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.href) 
                      ? "text-white bg-gradient-to-r from-cosmic-purple to-cosmic-blue shadow-lg" 
                      : "text-foreground/80 hover:text-white hover:bg-cosmic-blue/20"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;