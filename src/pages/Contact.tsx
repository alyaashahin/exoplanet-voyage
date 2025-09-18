import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get in touch with our team of exoplanet researchers and educators.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur border-cosmic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-cosmic-gold">Send us a Message</CardTitle>
                <CardDescription>
                  Have questions about exoplanets or want to collaborate? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-cosmic-blue outline-none"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-cosmic-blue outline-none"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-cosmic-blue outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-cosmic-blue outline-none">
                    <option>General Inquiry</option>
                    <option>Research Collaboration</option>
                    <option>Educational Partnership</option>
                    <option>Media Request</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-cosmic-blue outline-none resize-none"
                    placeholder="Tell us about your inquiry or how we can help you..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-cosmic-blue hover:bg-cosmic-blue/80 text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur border-cosmic-purple/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-cosmic-purple">Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our exoplanet research team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cosmic-blue/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cosmic-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@exoplanet-explorer.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cosmic-purple/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cosmic-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cosmic-gold/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cosmic-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        123 Observatory Drive<br />
                        Space Science Center<br />
                        Research City, RC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cosmic-blue/20 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-cosmic-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-muted-foreground">www.exoplanet-explorer.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-cosmic-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl text-cosmic-gold">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Emergency research consultations available 24/7 for active missions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;