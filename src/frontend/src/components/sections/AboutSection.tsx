import { Award, Shield, Users, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Committed to on-time delivery and safe handling of your cargo'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in logistics and transport services'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through exceptional service'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Continuously expanding our capabilities to serve you better'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Leading Transport Solutions in Assam
          </h2>
          <p className="text-lg text-muted-foreground">
            RS LOGISTICS OF TRANSPORT BUSINESS is a trusted name in the logistics industry, 
            specializing in the efficient transport of coal, agricultural products, and general goods 
            throughout Assam and neighboring regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-muted-foreground">
              Based in Bishnupur, Guwahati, Assam 781018, we have built our reputation on 
              reliability, safety, and customer satisfaction. Our experienced team understands 
              the unique challenges of transporting diverse cargo types across varied terrain.
            </p>
            <p className="text-muted-foreground">
              From coal mining operations to agricultural produce and general merchandise, 
              we provide comprehensive logistics solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              To deliver exceptional transport and logistics services that exceed customer 
              expectations while maintaining the highest standards of safety, efficiency, 
              and environmental responsibility.
            </p>
            <p className="text-muted-foreground">
              We are committed to supporting the economic growth of Assam by providing 
              reliable transport infrastructure that businesses can depend on.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-industrial transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
