import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExoplanetStats from "@/components/ExoplanetStats";
import FeaturedExoplanets from "@/components/FeaturedExoplanets";
import ExoplanetVideos from "@/components/ExoplanetVideos";
import DiscoveryMethods from "@/components/DiscoveryMethods";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ExoplanetStats />
      <FeaturedExoplanets />
      <ExoplanetVideos />
      <DiscoveryMethods />
      <Footer />
    </div>
  );
};

export default Index;
