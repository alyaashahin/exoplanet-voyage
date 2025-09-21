import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const videos = [
  {
    title: "How We Find Exoplanets",
    description: "Learn about the transit method and other techniques astronomers use to discover planets beyond our solar system.",
    embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual educational video
    duration: "10:30"
  },
  {
    title: "The Search for Earth 2.0",
    description: "Explore the quest to find potentially habitable worlds that could harbor life as we know it.",
    embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual educational video
    duration: "15:45"
  },
  {
    title: "TRAPPIST-1: Seven Worlds, One Star", 
    description: "Dive deep into the TRAPPIST-1 system and its remarkable collection of Earth-sized planets.",
    embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual educational video
    duration: "12:20"
  },
  {
    title: "Exoplanet Atmospheres Revealed",
    description: "Discover how scientists study the atmospheres of distant worlds using spectroscopy and other advanced techniques.",
    embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual educational video 
    duration: "8:15"
  }
];

const ExoplanetVideos = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-blue">
            Educational Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deepen your understanding of exoplanets with these carefully curated educational videos
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-cosmic group overflow-hidden"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-cosmic-blue transition-colors duration-300">
                  {video.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExoplanetVideos;