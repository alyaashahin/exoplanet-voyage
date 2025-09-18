import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const methods = [
  {
    name: "Transit Method",
    percentage: "75%",
    description: "Detects planets by measuring the slight dimming of starlight when a planet passes in front of its host star.",
    icon: "🌟",
    discoveries: "3,900+ planets"
  },
  {
    name: "Radial Velocity",
    percentage: "15%", 
    description: "Measures the wobble of a star caused by the gravitational pull of an orbiting planet.",
    icon: "📊",
    discoveries: "800+ planets"
  },
  {
    name: "Direct Imaging",
    percentage: "5%",
    description: "Directly photographs exoplanets by blocking out the bright light from their host stars.",
    icon: "📸",
    discoveries: "50+ planets"
  },
  {
    name: "Gravitational Microlensing",
    percentage: "3%",
    description: "Uses the gravitational field of a star to magnify light from a more distant star, revealing planets.",
    icon: "🔍",
    discoveries: "150+ planets"
  },
  {
    name: "Astrometry",
    percentage: "2%",
    description: "Measures the precise movement of stars across the sky to detect the gravitational influence of planets.",
    icon: "📐",
    discoveries: "10+ planets"
  }
];

const DiscoveryMethods = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold">
            How We Find Exoplanets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Astronomers use ingenious methods to detect worlds that are trillions of miles away
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <Card 
              key={index}
              className="bg-card/60 backdrop-blur-sm border-border hover:border-cosmic-gold/50 transition-all duration-300 hover:shadow-stellar group"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <CardTitle className="text-xl group-hover:text-cosmic-gold transition-colors duration-300">
                  {method.name}
                </CardTitle>
                <div className="text-2xl font-bold text-cosmic-blue">
                  {method.percentage}
                </div>
                <div className="text-sm text-cosmic-purple font-medium">
                  {method.discoveries}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-cosmic-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-cosmic-blue">
              The Future of Exoplanet Discovery
            </h3>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Next-generation space telescopes like the James Webb Space Telescope and upcoming missions 
              will revolutionize our ability to study exoplanet atmospheres, potentially detecting 
              biosignatures that could indicate the presence of life on distant worlds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryMethods;