import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageLayout from "@/components/layout/PageLayout";
import {
  BookOpen,
  Notebook,
  CheckCircle2,
  Gift,
  ArrowRight,
  MapPin,
  Info,
  Users,
  Building2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Donate = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    subject: "",
    academicLevel: "",
    condition: "",
    preference: "",
    quantity: "1",
    location: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const academicLevels = [
    "Class 1-5",
    "Class 6-8",
    "Class 9-10",
    "Class 11-12",
    "MHT-CET",
    "JEE Mains",
    "JEE Advanced",
    "NEET",
    "Engineering",
    "Other Competitive Exams",
  ];

  const conditions = [
    {
      value: "unused",
      label: "Unused",
      description: "Brand new, never used",
      badge: "reusable",
    },
    {
      value: "few-pages",
      label: "Few Pages Used",
      description: "Minimal writing, mostly clean",
      badge: "reusable",
    },
    {
      value: "mostly-used",
      label: "Mostly Used",
      description: "Significant use, suitable for recycling",
      badge: "recycling",
    },
  ];

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageLayout>
        <div className="container py-16 md:py-24">
          <div className="max-w-lg mx-auto text-center">
            <div className="icon-container h-20 w-20 mx-auto mb-6 animate-scale-in">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="font-display text-3xl font-bold mb-4 animate-fade-in">
              Thank You for Your Donation!
            </h1>
            <p className="text-muted-foreground mb-8 animate-fade-in delay-100">
              Your contribution will help students in need. We'll notify you
              once your donation is collected.
            </p>
            <div className="card-elevated p-6 mb-8 animate-fade-in delay-200">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="icon-container h-8 w-8 flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our team will review your donation details
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-container h-8 w-8 flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You'll receive pickup instructions or collection point details
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-container h-8 w-8 flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your materials will be distributed to students or recycled responsibly
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setSubmitted(false)}>
                <Gift className="h-4 w-4" />
                Donate More
              </Button>
              <Button variant="outline" asChild>
                <a href="/browse">Browse Materials</a>
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="icon-container h-14 w-14 mx-auto mb-4">
              <Gift className="h-7 w-7" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Donate Study Materials
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Help students in need by donating your textbooks and notebooks. 
              Every contribution makes a difference.
            </p>
          </div>

          {/* Donation Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Category Selection */}
            <div className="card-elevated p-6">
              <Label className="text-base font-semibold mb-4 block">
                What are you donating?
              </Label>
              <RadioGroup
                value={formData.category}
                onValueChange={(value) => updateFormData("category", value)}
                className="grid sm:grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem value="textbook" id="textbook" className="peer sr-only" />
                  <Label
                    htmlFor="textbook"
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:bg-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent"
                  >
                    <div className="icon-container h-12 w-12">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-medium block">Textbook</span>
                      <span className="text-sm text-muted-foreground">
                        Academic books, guides
                      </span>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="notebook" id="notebook" className="peer sr-only" />
                  <Label
                    htmlFor="notebook"
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:bg-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent"
                  >
                    <div className="icon-container-secondary h-12 w-12">
                      <Notebook className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-medium block">Notebook</span>
                      <span className="text-sm text-muted-foreground">
                        Notes, registers
                      </span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Resource Details */}
            <div className="card-elevated p-6 space-y-5">
              <h3 className="font-semibold text-lg">Resource Details</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title / Book Name</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Physics NCERT Class 12"
                    value={formData.title}
                    onChange={(e) => updateFormData("title", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Physics, Mathematics"
                    value={formData.subject}
                    onChange={(e) => updateFormData("subject", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="academic-level">Academic Level / Exam</Label>
                  <Select
                    value={formData.academicLevel}
                    onValueChange={(value) => updateFormData("academicLevel", value)}
                  >
                    <SelectTrigger id="academic-level">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      {academicLevels.map((level) => (
                        <SelectItem key={level} value={level.toLowerCase().replace(/\s+/g, "-")}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max="100"
                    value={formData.quantity}
                    onChange={(e) => updateFormData("quantity", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Condition Selection */}
            <div className="card-elevated p-6">
              <div className="flex items-center gap-2 mb-4">
                <Label className="text-base font-semibold">Condition</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>
                      "Unused" and "Few Pages Used" items can be reused by other students. 
                      "Mostly Used" items will be recycled responsibly.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <RadioGroup
                value={formData.condition}
                onValueChange={(value) => updateFormData("condition", value)}
                className="space-y-3"
              >
                {conditions.map((condition) => (
                  <div key={condition.value}>
                    <RadioGroupItem
                      value={condition.value}
                      id={condition.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={condition.value}
                      className="flex items-center justify-between p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:bg-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent"
                    >
                      <div>
                        <span className="font-medium block">{condition.label}</span>
                        <span className="text-sm text-muted-foreground">
                          {condition.description}
                        </span>
                      </div>
                      <span className={`badge-${condition.badge}`}>
                        {condition.badge === "reusable" ? "Reusable" : "For Recycling"}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Donation Preference */}
            <div className="card-elevated p-6">
              <Label className="text-base font-semibold mb-4 block">
                Donation Preference
              </Label>
              <RadioGroup
                value={formData.preference}
                onValueChange={(value) => updateFormData("preference", value)}
                className="grid sm:grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem value="direct" id="direct" className="peer sr-only" />
                  <Label
                    htmlFor="direct"
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:bg-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent"
                  >
                    <div className="icon-container h-10 w-10">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-medium block">Direct to Student</span>
                      <span className="text-sm text-muted-foreground">
                        Connect directly with recipients
                      </span>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="ngo" id="ngo-preference" className="peer sr-only" />
                  <Label
                    htmlFor="ngo-preference"
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:bg-muted peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-accent"
                  >
                    <div className="icon-container-secondary h-10 w-10">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-medium block">Via NGO</span>
                      <span className="text-sm text-muted-foreground">
                        Organized bulk distribution
                      </span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Location & Notes */}
            <div className="card-elevated p-6 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="location">Your Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => updateFormData("location", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional information about the materials..."
                  value={formData.notes}
                  onChange={(e) => updateFormData("notes", e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" size="xl" className="w-full">
              Submit Donation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Donate;
