import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const newsArticles = [
    {
      title: "James Webb Discovers Water Vapor in Rocky Exoplanet Atmosphere",
      date: "2024-01-15",
      category: "Discovery",
      summary: "JWST detects water vapor around a small, rocky exoplanet, providing new insights into atmospheric retention on terrestrial worlds.",
      readTime: "3 min read",
      featured: true
    },
    {
      title: "TESS Finds Earth-Sized Planet in Habitable Zone",
      date: "2024-01-10",
      category: "Discovery",
      summary: "NASA's TESS mission discovers an Earth-sized exoplanet orbiting in the habitable zone of a nearby red dwarf star.",
      readTime: "4 min read",
      featured: true
    },
    {
      title: "New Technique Reveals Exoplanet Cloud Composition",
      date: "2024-01-05",
      category: "Research",
      summary: "Astronomers develop new method to analyze cloud compositions in exoplanet atmospheres using spectroscopy.",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Breakthrough in Direct Imaging of Young Exoplanets",
      date: "2023-12-28",
      category: "Technology",
      summary: "Advanced coronagraphy techniques enable direct imaging of planets around young stars, revealing formation processes.",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Multi-Planet System Shows Complex Orbital Dynamics",
      date: "2023-12-20",
      category: "Discovery",
      summary: "Researchers discover a seven-planet system with intricate gravitational interactions affecting habitability.",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Machine Learning Accelerates Exoplanet Classification",
      date: "2023-12-15",
      category: "Technology",
      summary: "AI algorithms help astronomers classify thousands of exoplanet candidates faster than ever before.",
      readTime: "3 min read",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Discovery":
        return "bg-cosmic-blue text-white";
      case "Research":
        return "bg-cosmic-purple text-white";
      case "Technology":
        return "bg-cosmic-gold text-black";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
            Exoplanet News
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay updated with the latest discoveries, research, and technological advances in exoplanet science.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-cosmic-gold">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-cosmic-purple hover:text-cosmic-blue cursor-pointer transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-cosmic-blue">
                    {formatDate(article.date)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-16 px-6 bg-card/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-cosmic-purple">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur hover:border-cosmic-blue/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg text-cosmic-purple hover:text-cosmic-blue cursor-pointer transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-cosmic-blue text-sm">
                    {formatDate(article.date)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/50 backdrop-blur border-cosmic-gold/20">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold mb-4 text-cosmic-gold">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Subscribe to our newsletter and never miss the latest exoplanet discoveries and research breakthroughs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md bg-background border border-border focus:border-cosmic-blue outline-none"
                />
                <button className="px-6 py-2 bg-cosmic-blue hover:bg-cosmic-blue/80 text-white rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;