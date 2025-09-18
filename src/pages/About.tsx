import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
            About Exoplanets
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Understanding the diverse worlds beyond our solar system and the revolutionary science behind their discovery.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-card/50 backdrop-blur border-cosmic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-cosmic-gold">What are Exoplanets?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Exoplanets, or extrasolar planets, are planets that orbit stars outside our solar system. 
                  Since the first confirmed detection in 1995, astronomers have discovered thousands of these 
                  distant worlds, each with unique characteristics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These planets range from gas giants larger than Jupiter to rocky worlds smaller than Earth, 
                  and some may even harbor conditions suitable for life as we know it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-cosmic-purple/20">
              <CardHeader>
                <CardTitle className="text-2xl text-cosmic-purple">Types of Exoplanets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-cosmic-blue">Gas Giants</h4>
                    <p className="text-sm text-muted-foreground">Large planets composed primarily of hydrogen and helium</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cosmic-blue">Super-Earths</h4>
                    <p className="text-sm text-muted-foreground">Rocky planets larger than Earth but smaller than Neptune</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cosmic-blue">Hot Jupiters</h4>
                    <p className="text-sm text-muted-foreground">Gas giants orbiting very close to their host stars</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cosmic-blue">Terrestrial Planets</h4>
                    <p className="text-sm text-muted-foreground">Rocky planets similar in composition to Earth</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-cosmic-gold">5,000+</CardTitle>
                <CardDescription>Confirmed Exoplanets</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  As of 2024, astronomers have confirmed the existence of over 5,000 exoplanets across the galaxy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-cosmic-purple">100+ Billion</CardTitle>
                <CardDescription>Estimated in Milky Way</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Scientists estimate there could be over 100 billion exoplanets in our galaxy alone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-cosmic-blue">50+</CardTitle>
                <CardDescription>Potentially Habitable</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  More than 50 exoplanets have been identified as potentially habitable worlds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;