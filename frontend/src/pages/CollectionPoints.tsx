import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Building2,
  Phone,
  Clock,
  CheckCircle2,
  Info,
  Truck,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample collection points data
const collectionPoints = [
  {
    id: 1,
    name: "St. Xavier's High School",
    type: "School",
    address: "123 Education Road, Andheri West",
    city: "Mumbai",
    phone: "+91 98765 43210",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    acceptedItems: ["Textbooks", "Notebooks", "Stationery"],
    isPartner: true,
  },
  {
    id: 2,
    name: "COEP Technological University",
    type: "College",
    address: "Wellesley Road, Shivajinagar",
    city: "Pune",
    phone: "+91 98765 43211",
    hours: "Mon-Fri: 10:00 AM - 4:00 PM",
    acceptedItems: ["Engineering Books", "Reference Materials"],
    isPartner: true,
  },
  {
    id: 3,
    name: "Nashik Public Library",
    type: "Community Center",
    address: "456 Library Lane, College Road",
    city: "Nashik",
    phone: "+91 98765 43212",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    acceptedItems: ["All Study Materials"],
    isPartner: true,
  },
  {
    id: 4,
    name: "Thane Municipal School",
    type: "School",
    address: "789 Main Street, Thane West",
    city: "Thane",
    phone: "+91 98765 43213",
    hours: "Mon-Fri: 9:00 AM - 3:00 PM",
    acceptedItems: ["School Textbooks", "Notebooks"],
    isPartner: true,
  },
  {
    id: 5,
    name: "Aurangabad Science College",
    type: "College",
    address: "321 Science Road, Station Area",
    city: "Aurangabad",
    phone: "+91 98765 43214",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    acceptedItems: ["Science Books", "Lab Manuals"],
    isPartner: false,
  },
  {
    id: 6,
    name: "Nagpur Central Library",
    type: "Community Center",
    address: "555 Central Avenue, Sitabuldi",
    city: "Nagpur",
    phone: "+91 98765 43215",
    hours: "Mon-Sun: 7:00 AM - 8:00 PM",
    acceptedItems: ["All Study Materials"],
    isPartner: true,
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Reduced Transportation",
    description: "Bulk collection from central points minimizes individual pickup costs",
  },
  {
    icon: Building2,
    title: "Trusted Locations",
    description: "Partner schools and colleges serve as verified collection centers",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Multiple time slots to drop off donations at your convenience",
  },
  {
    icon: CheckCircle2,
    title: "Proper Handling",
    description: "Trained volunteers ensure proper sorting and storage of materials",
  },
];

const CollectionPoints = () => {
  const cities = [...new Set(collectionPoints.map((p) => p.city))];

  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="icon-container h-14 w-14 mx-auto mb-4">
            <MapPin className="h-7 w-7" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Collection Points
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Drop off your donations at partner schools and colleges near you. 
            Our bulk collection model reduces transportation costs and environmental impact.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card-feature text-center p-5">
              <div className="icon-container h-12 w-12 mx-auto mb-3">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="card-elevated p-6 md:p-8 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5 text-primary" />
            <h2 className="font-display text-xl font-semibold">
              How Bulk Collection Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="icon-container h-8 w-8 flex-shrink-0">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Find a Collection Point</h4>
                <p className="text-sm text-muted-foreground">
                  Locate the nearest partner school or college from the list below
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="icon-container h-8 w-8 flex-shrink-0">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Drop Off Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Visit during operating hours and hand over your donations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="icon-container h-8 w-8 flex-shrink-0">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">NGO Collects in Bulk</h4>
                <p className="text-sm text-muted-foreground">
                  Partner NGOs collect donations periodically for distribution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Points by City */}
        <div className="space-y-8">
          {cities.map((city) => (
            <div key={city}>
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {city}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {collectionPoints
                  .filter((point) => point.city === city)
                  .map((point) => (
                    <div key={point.id} className="card-elevated p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="icon-container-secondary h-10 w-10">
                            <Building2 className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{point.name}</h3>
                            <span className="text-xs text-muted-foreground">{point.type}</span>
                          </div>
                        </div>
                        {point.isPartner && (
                          <Tooltip>
                            <TooltipTrigger>
                              <span className="badge-reusable text-xs">
                                <CheckCircle2 className="h-3 w-3" />
                                Partner
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Verified EduCycle collection partner</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>

                      <div className="space-y-2 text-sm mb-4">
                        <p className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          {point.address}
                        </p>
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {point.hours}
                        </p>
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          {point.phone}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-2">Accepts:</p>
                        <div className="flex flex-wrap gap-1">
                          {point.acceptedItems.map((item) => (
                            <span
                              key={item}
                              className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-full mt-4" size="sm">
                        Get Directions
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Partner CTA */}
        <div className="mt-12 card-elevated bg-accent/30 p-8 text-center">
          <h2 className="font-display text-xl font-bold mb-2">
            Want to become a collection point?
          </h2>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Schools, colleges, and community centers can partner with EduCycle 
            to host collection drives.
          </p>
          <Button>Partner With Us</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default CollectionPoints;
