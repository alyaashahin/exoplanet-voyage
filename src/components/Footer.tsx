import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cosmic-gold">About Exoplanets</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Explore the fascinating worlds beyond our solar system and learn about the cutting-edge 
              science behind exoplanet discovery.
            </p>
            <Button 
              variant="outline" 
              className="border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue hover:text-white"
            >
              Learn More
            </Button>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cosmic-purple">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">NASA Exoplanet Archive</a></li>
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">Kepler Mission</a></li>
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">TESS Mission</a></li>
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">James Webb Telescope</a></li>
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">Exoplanet Exploration</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cosmic-blue">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Follow the latest exoplanet discoveries and space exploration news.
            </p>
            <div className="space-y-2">
              <Button 
                className="w-full bg-cosmic-blue hover:bg-cosmic-blue/80 text-white"
              >
                Subscribe to Updates
              </Button>
              <p className="text-xs text-muted-foreground">
                Get notified about new discoveries and missions
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Exoplanet Explorer. Inspiring curiosity about worlds beyond our solar system.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-cosmic-gold transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-cosmic-gold transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-cosmic-gold transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;