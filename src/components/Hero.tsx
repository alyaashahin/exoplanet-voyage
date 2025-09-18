import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/exoplanet-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-glow rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent animate-fade-in">
          EXOPLANETS
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
          Discover worlds beyond our solar system. From super-Earths to hot Jupiters, 
          explore the incredible diversity of planets orbiting distant stars.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg" 
            className="bg-cosmic-blue hover:bg-cosmic-blue/80 text-white shadow-cosmic transition-all duration-300 hover:scale-105"
          >
            <Link to="/discoveries">
              Explore Exoplanets
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white transition-all duration-300"
          >
            <a href="#videos">
              Watch Videos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;