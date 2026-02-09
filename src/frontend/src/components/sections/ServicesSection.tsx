import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: 'Coal Transport',
      icon: '/assets/generated/rs-icon-coal.dim_256x256.png',
      description: 'Specialized transport solutions for coal mining operations with proper safety measures and compliance.',
      features: [
        'Bulk coal transportation',
        'Mining site logistics',
        'Safety-compliant vehicles',
        'Timely delivery schedules'
      ]
    },
    {
      title: 'Agriculture Transport',
      icon: '/assets/generated/rs-icon-agriculture.dim_256x256.png',
      description: 'Careful handling and transport of agricultural products ensuring freshness and quality preservation.',
      features: [
        'Fresh produce transport',
        'Temperature-controlled options',
        'Farm-to-market delivery',
        'Seasonal harvest support'
      ]
    },
    {
      title: 'Goods Transport',
      icon: '/assets/generated/rs-icon-goods.dim_256x256.png',
      description: 'Reliable transport services for general merchandise and commercial goods of all types.',
      features: [
        'General cargo transport',
        'Secure packaging',
        'Door-to-door delivery',
        'Real-time tracking'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Comprehensive Transport Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in three core transport services, each tailored to meet the unique 
            requirements of different cargo types and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-industrial transition-shadow border-2">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center p-4">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Available round the clock for your transport needs</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Licensed</div>
              <p className="text-sm text-muted-foreground">Fully licensed and insured transport services</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Experienced</div>
              <p className="text-sm text-muted-foreground">Skilled drivers with extensive route knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
