import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import showcaseImage from "@/assets/exoplanet-showcase.jpg";

const exoplanets = [
  {
    name: "Kepler-452b",
    type: "Super-Earth",
    distance: "1,400 light-years",
    description: "Known as Earth's 'cousin', this planet orbits in the habitable zone of a sun-like star.",
    features: ["Rocky Surface", "Habitable Zone", "Earth-like Orbit"]
  },
  {
    name: "HD 209458 b",
    type: "Hot Jupiter",
    distance: "159 light-years", 
    description: "The first exoplanet observed transiting its star, providing crucial atmospheric data.",
    features: ["Gas Giant", "Extreme Heat", "Atmospheric Studies"]
  },
  {
    name: "Proxima Centauri b",
    type: "Terrestrial",
    distance: "4.2 light-years",
    description: "The closest known exoplanet to Earth, orbiting our nearest stellar neighbor.",
    features: ["Closest to Earth", "Red Dwarf Star", "Potentially Habitable"]
  },
  {
    name: "TRAPPIST-1e",
    type: "Earth-sized",
    distance: "40 light-years",
    description: "One of seven Earth-sized planets in the TRAPPIST-1 system, likely with liquid water.",
    features: ["Earth-sized", "Water Possible", "7-Planet System"]
  }
];

const FeaturedExoplanets = () => {
  return (
    <section className="py-20 px-6 bg-gradient-nebula">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-purple">
            Featured Exoplanets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet some of the most fascinating worlds we've discovered beyond our solar system
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={showcaseImage} 
            alt="Various types of exoplanets" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-deep"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exoplanets.map((planet, index) => (
            <Card 
              key={index}
              className="bg-card/60 backdrop-blur-sm border-border hover:border-cosmic-purple/50 transition-all duration-300 hover:shadow-stellar group"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-cosmic-gold group-hover:text-cosmic-purple transition-colors duration-300">
                    {planet.name}
                  </h3>
                  <Badge variant="secondary" className="bg-cosmic-blue/20 text-cosmic-blue border-cosmic-blue/30">
                    {planet.type}
                  </Badge>
                </div>
                
                <p className="text-cosmic-gold/80 font-medium mb-3">
                  Distance: {planet.distance}
                </p>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {planet.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {planet.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex}
                      variant="outline"
                      className="border-cosmic-purple/30 text-cosmic-purple hover:bg-cosmic-purple/10"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExoplanets;