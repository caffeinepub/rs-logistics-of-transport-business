import { MapPin, Navigation, Truck } from 'lucide-react';

export function ServiceAreaSection() {
  const coverageAreas = [
    'Bishnupur, Guwahati',
    'Greater Guwahati Region',
    'Kamrup District',
    'Across Assam State',
    'Neighboring States'
  ];

  return (
    <section id="service-area" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Service Area
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Serving Assam and Beyond
          </h2>
          <p className="text-lg text-muted-foreground">
            Based in Bishnupur, Guwahati, Assam 781018, we provide comprehensive transport 
            services throughout the region with extensive route coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Coverage Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Base Location</h3>
                <p className="text-muted-foreground">
                  Strategically located in Bishnupur, Guwahati, Assam 781018, our facility 
                  provides easy access to major highways and transport routes across the region.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Navigation className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Wide Coverage Network</h3>
                <p className="text-muted-foreground">
                  Our transport network extends throughout Assam and into neighboring states, 
                  ensuring we can meet your logistics needs wherever your business takes you.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Flexible Routes</h3>
                <p className="text-muted-foreground">
                  We offer flexible routing options to accommodate your specific pickup and 
                  delivery requirements, ensuring efficient and cost-effective transport solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Coverage List */}
          <div className="bg-card border-2 border-border rounded-lg p-8 shadow-industrial">
            <h3 className="text-2xl font-bold mb-6 text-center">Coverage Areas</h3>
            <ul className="space-y-4">
              {coverageAreas.map((area, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-medium">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-center font-semibold text-primary">
                Need service in a different area? Contact us to discuss your requirements!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
