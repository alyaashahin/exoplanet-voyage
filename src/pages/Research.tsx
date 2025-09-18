import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Research = () => {
  const missions = [
    {
      name: "James Webb Space Telescope",
      status: "Active",
      launch: "2021",
      description: "Revolutionary infrared telescope studying exoplanet atmospheres and compositions.",
      achievements: ["Water vapor detection", "Atmospheric composition analysis", "Cloud mapping"],
      image: "🔭"
    },
    {
      name: "TESS Mission",
      status: "Active",
      launch: "2018",
      description: "Transiting Exoplanet Survey Satellite discovering planets around nearby stars.",
      achievements: ["7000+ candidate planets", "Nearby star surveying", "Small planet detection"],
      image: "🛰️"
    },
    {
      name: "Kepler Space Telescope",
      status: "Completed",
      launch: "2009",
      description: "Pioneering mission that discovered thousands of exoplanets using transit method.",
      achievements: ["4000+ confirmed planets", "Earth-size planet discovery", "Habitable zone planets"],
      image: "🌌"
    }
  ];

  const techniques = [
    {
      name: "Transit Photometry",
      description: "Detecting planets by observing the dimming of starlight as planets pass in front of their host stars.",
      success: "95% of discoveries",
      missions: ["Kepler", "TESS", "CoRoT"]
    },
    {
      name: "Radial Velocity",
      description: "Measuring the wobble of stars caused by gravitational pull of orbiting planets.",
      success: "First method",
      missions: ["HARPS", "HIRES", "CARMENES"]
    },
    {
      name: "Direct Imaging",
      description: "Directly photographing exoplanets by blocking out the light from their host stars.",
      success: "Young giants",
      missions: ["Hubble", "VLT", "Subaru"]
    },
    {
      name: "Gravitational Microlensing",
      description: "Using gravity as a lens to detect planets when they pass between Earth and distant stars.",
      success: "Free-floating planets",
      missions: ["OGLE", "MOA", "KMTNet"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
            Exoplanet Research
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Cutting-edge missions and technologies revolutionizing our understanding of worlds beyond our solar system.
          </p>
        </div>
      </section>

      {/* Active Missions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cosmic-gold">Current & Past Missions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-cosmic-blue/20">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{mission.image}</div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-cosmic-purple">{mission.name}</CardTitle>
                    <Badge className={mission.status === "Active" ? "bg-cosmic-blue text-white" : "bg-muted text-muted-foreground"}>
                      {mission.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-cosmic-blue">
                    Launched: {mission.launch}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-cosmic-gold">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {mission.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-cosmic-purple rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-16 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cosmic-purple">Detection Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg text-cosmic-gold">{technique.name}</CardTitle>
                  <CardDescription className="text-cosmic-blue">
                    Success Rate: {technique.success}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {technique.description}
                  </p>
                  <div>
                    <span className="text-xs font-semibold text-cosmic-purple">Key Missions: </span>
                    <span className="text-xs text-muted-foreground">
                      {technique.missions.join(", ")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Research */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-cosmic-gold">Future of Exoplanet Research</h2>
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-cosmic-purple/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cosmic-purple">Next-Generation Telescopes</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Upcoming missions like the Nancy Grace Roman Space Telescope and ground-based 
                  Extremely Large Telescopes will revolutionize our ability to study exoplanet atmospheres 
                  and search for signs of life.
                </p>
                <Button className="bg-cosmic-blue hover:bg-cosmic-blue/80 text-white">
                  Learn About Future Missions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;