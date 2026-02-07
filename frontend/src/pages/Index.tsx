import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import {
  BookOpen,
  Gift,
  ClipboardCheck,
  Users,
  Recycle,
  ArrowRight,
  GraduationCap,
  Building2,
  Leaf,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Index = () => {
  const howItWorksSteps = [
    {
      icon: Gift,
      title: "Donate",
      description: "Students donate textbooks and notebooks they no longer need",
      color: "primary" as const,
    },
    {
      icon: ClipboardCheck,
      title: "Classify",
      description: "Resources are classified as reusable or for recycling",
      color: "secondary" as const,
    },
    {
      icon: Users,
      title: "Distribute",
      description: "Reusable materials reach students who need them",
      color: "primary" as const,
    },
    {
      icon: Recycle,
      title: "Recycle",
      description: "Unusable materials are recycled responsibly",
      color: "secondary" as const,
    },
  ];

  const impactPoints = [
    {
      icon: GraduationCap,
      label: "Students Helped",
      value: "Educational access",
    },
    {
      icon: Leaf,
      label: "Environmental Impact",
      value: "Sustainable future",
    },
    {
      icon: Building2,
      label: "NGO Partners",
      value: "Community driven",
    },
  ];

  const features = [
    "Free textbooks and notebooks for students in need",
    "Easy donation process for study materials",
    "NGO-organized collection and distribution",
    "Environmentally responsible recycling",
    "School and college collection points",
    "Track your donation impact",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <Leaf className="h-4 w-4" />
                <span>Sustainable Education Initiative</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Give Your Books a{" "}
                <span className="text-gradient-primary">Second Life</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Connect with students who need study materials. Donate textbooks 
                and notebooks to help others learn while reducing waste.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donate">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    <Gift className="h-5 w-5" />
                    Donate Resources
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                    <BookOpen className="h-5 w-5" />
                    Find Study Materials
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                {impactPoints.map((point) => (
                  <div key={point.label} className="flex items-center gap-3">
                    <div className="icon-container h-10 w-10">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{point.value}</p>
                      <p className="text-xs text-muted-foreground">{point.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Students sharing educational resources"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 card-elevated p-4 animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="icon-container-secondary h-12 w-12">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Growing Impact</p>
                    <p className="text-sm text-muted-foreground">Join our community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-primary">EduCycle</span> Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A simple four-step process to connect donors with students in need
              while promoting sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="card-feature text-center h-full">
                  <div className="flex flex-col items-center">
                    {/* Step Number */}
                    <div className="absolute -top-3 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`${step.color === "primary" ? "icon-container" : "icon-container-secondary"} h-16 w-16 mb-4`}>
                      <step.icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connector Arrow */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Making Education{" "}
                <span className="text-primary">Accessible</span> &{" "}
                <span className="text-secondary">Sustainable</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                EduCycle bridges the gap between students who have extra resources 
                and those who need them, while ensuring responsible recycling of 
                materials that can't be reused.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/register">
                  <Button variant="default" size="lg">
                    Join EduCycle Today
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-feature">
                <div className="icon-container h-12 w-12 mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">For Students</h3>
                <p className="text-sm text-muted-foreground">
                  Donate or request textbooks, notebooks, and study materials based on your academic needs.
                </p>
              </div>

              <div className="card-feature">
                <div className="icon-container-secondary h-12 w-12 mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">For NGOs</h3>
                <p className="text-sm text-muted-foreground">
                  Manage collection points, organize distributions, and track impact across communities.
                </p>
              </div>

              <div className="card-feature sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="icon-container h-12 w-12 flex-shrink-0">
                    <Recycle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Sustainable Cycle</h3>
                    <p className="text-sm text-muted-foreground">
                      Materials that can't be reused are responsibly recycled, reducing environmental 
                      impact and creating a truly circular economy for educational resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="card-elevated bg-card p-8 md:p-12 text-center max-w-3xl mx-auto">
            <div className="icon-container h-16 w-16 mx-auto mb-6">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Whether you're a student looking to donate or find resources, or an NGO 
              wanting to help distribute materials, EduCycle is here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button variant="hero" size="lg">
                  <Gift className="h-5 w-5" />
                  Start Donating
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg">
                  Create Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
