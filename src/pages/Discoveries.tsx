import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Discoveries = () => {
  const discoveries = [
    {
      name: "Kepler-452b",
      type: "Super-Earth",
      distance: "1,400 light-years",
      year: "2015",
      mission: "Kepler",
      description: "Often called Earth's cousin, this planet orbits in the habitable zone of a Sun-like star.",
      status: "Potentially Habitable"
    },
    {
      name: "TRAPPIST-1e",
      type: "Terrestrial",
      distance: "40 light-years",
      year: "2017",
      mission: "Spitzer",
      description: "Part of a seven-planet system, this world is located in the habitable zone.",
      status: "Potentially Habitable"
    },
    {
      name: "HD 209458b",
      type: "Hot Jupiter",
      distance: "159 light-years",
      year: "1999",
      mission: "Ground-based",
      description: "The first exoplanet detected transiting its star, revolutionizing exoplanet science.",
      status: "Hot Giant"
    },
    {
      name: "Proxima Centauri b",
      type: "Terrestrial",
      distance: "4.2 light-years",
      year: "2016",
      mission: "ESO",
      description: "The closest known exoplanet to Earth, orbiting our nearest stellar neighbor.",
      status: "Potentially Habitable"
    },
    {
      name: "K2-18b",
      type: "Sub-Neptune",
      distance: "124 light-years",
      year: "2015",
      mission: "Kepler",
      description: "Water vapor detected in its atmosphere, making it a prime target for habitability studies.",
      status: "Water Detected"
    },
    {
      name: "TOI-715b",
      type: "Super-Earth",
      distance: "137 light-years",
      year: "2024",
      mission: "TESS",
      description: "Recently discovered super-Earth in the habitable zone of a nearby red dwarf star.",
      status: "Recently Discovered"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Potentially Habitable":
        return "bg-cosmic-blue text-white";
      case "Water Detected":
        return "bg-cosmic-purple text-white";
      case "Recently Discovered":
        return "bg-cosmic-gold text-black";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
            Exoplanet Discoveries
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore remarkable worlds discovered by space missions and ground-based observatories.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-cosmic-gold mb-2">5,612</div>
                <div className="text-sm text-muted-foreground">Confirmed Planets</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-cosmic-purple mb-2">4,159</div>
                <div className="text-sm text-muted-foreground">Planetary Systems</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-cosmic-blue mb-2">889</div>
                <div className="text-sm text-muted-foreground">Multi-planet Systems</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-cosmic-gold mb-2">194</div>
                <div className="text-sm text-muted-foreground">In Habitable Zone</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discoveries Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-cosmic-gold">Notable Discoveries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discoveries.map((planet, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-cosmic-purple">{planet.name}</CardTitle>
                    <Badge className={getStatusColor(planet.status)}>
                      {planet.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-cosmic-blue font-medium">
                    {planet.type} • {planet.distance}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {planet.description}
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Discovered: {planet.year}</span>
                    <span>Mission: {planet.mission}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Discoveries;