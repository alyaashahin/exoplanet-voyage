import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "5,000+",
    label: "Confirmed Exoplanets",
    description: "Planets discovered outside our solar system"
  },
  {
    number: "3,900+",
    label: "Planetary Systems",
    description: "Star systems hosting confirmed exoplanets"
  },
  {
    number: "160+",
    label: "Habitable Zone Planets",
    description: "Potentially Earth-like worlds in the goldilocks zone"
  },
  {
    number: "1995",
    label: "First Discovery",
    description: "51 Pegasi b was the first exoplanet found around a sun-like star"
  }
];

const ExoplanetStats = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold">
            Exoplanet Facts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The universe is vast and full of incredible worlds waiting to be discovered
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-cosmic group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-cosmic-blue mb-2 group-hover:text-cosmic-gold transition-colors duration-300">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExoplanetStats;