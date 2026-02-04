import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageLayout from "@/components/layout/PageLayout";
import {
  Search,
  BookOpen,
  Notebook,
  MapPin,
  Filter,
  X,
  GraduationCap,
  Recycle,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Sample data for demonstration
const sampleResources = [
  {
    id: 1,
    title: "Physics NCERT Class 12",
    category: "textbook",
    subject: "Physics",
    academicLevel: "Class 11-12",
    condition: "unused",
    location: "Mumbai, Maharashtra",
    donor: "Rahul S.",
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "Mathematics Notes - JEE",
    category: "notebook",
    subject: "Mathematics",
    academicLevel: "JEE Mains",
    condition: "few-pages",
    location: "Pune, Maharashtra",
    donor: "Priya M.",
    postedDate: "3 days ago",
  },
  {
    id: 3,
    title: "Chemistry HC Verma",
    category: "textbook",
    subject: "Chemistry",
    academicLevel: "JEE Advanced",
    condition: "unused",
    location: "Nagpur, Maharashtra",
    donor: "Amit K.",
    postedDate: "1 week ago",
  },
  {
    id: 4,
    title: "Biology NEET Preparation",
    category: "textbook",
    subject: "Biology",
    academicLevel: "NEET",
    condition: "few-pages",
    location: "Thane, Maharashtra",
    donor: "Sneha P.",
    postedDate: "5 days ago",
  },
  {
    id: 5,
    title: "English Grammar Notes",
    category: "notebook",
    subject: "English",
    academicLevel: "Class 9-10",
    condition: "mostly-used",
    location: "Mumbai, Maharashtra",
    donor: "Vikram R.",
    postedDate: "1 day ago",
  },
  {
    id: 6,
    title: "Computer Science Textbook",
    category: "textbook",
    subject: "Computer Science",
    academicLevel: "Engineering",
    condition: "unused",
    location: "Nashik, Maharashtra",
    donor: "Neha D.",
    postedDate: "4 days ago",
  },
];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    academicLevel: "",
    location: "",
    condition: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [requestedItems, setRequestedItems] = useState<number[]>([]);

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
  ];

  const locations = [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Thane",
    "Nashik",
    "Aurangabad",
  ];

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      academicLevel: "",
      location: "",
      condition: "",
    });
  };

  const filteredResources = sampleResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !filters.category || resource.category === filters.category;
    const matchesLevel =
      !filters.academicLevel || resource.academicLevel === filters.academicLevel;
    const matchesLocation =
      !filters.location || resource.location.includes(filters.location);
    const matchesCondition =
      !filters.condition || resource.condition === filters.condition;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLevel &&
      matchesLocation &&
      matchesCondition
    );
  });

  const handleRequest = (id: number) => {
    setRequestedItems((prev) => [...prev, id]);
  };

  const getConditionBadge = (condition: string) => {
    if (condition === "mostly-used") {
      return (
        <span className="badge-recycling">
          <Recycle className="h-3.5 w-3.5" />
          For Recycling
        </span>
      );
    }
    return (
      <span className="badge-reusable">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Reusable
      </span>
    );
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Browse Study Materials
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Find textbooks, notebooks, and study materials donated by fellow students
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
              className="relative"
            >
              <Filter className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </div>

          {/* Collapsible Filters */}
          <Collapsible open={showFilters} onOpenChange={setShowFilters}>
            <CollapsibleContent className="mt-4">
              <div className="card-elevated p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filter Results</h3>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <X className="h-4 w-4 mr-1" />
                      Clear All
                    </Button>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select
                      value={filters.category}
                      onValueChange={(value) => updateFilter("category", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="textbook">Textbooks</SelectItem>
                        <SelectItem value="notebook">Notebooks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Academic Level</Label>
                    <Select
                      value={filters.academicLevel}
                      onValueChange={(value) => updateFilter("academicLevel", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All levels" />
                      </SelectTrigger>
                      <SelectContent>
                        {academicLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Select
                      value={filters.location}
                      onValueChange={(value) => updateFilter("location", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All locations" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Condition</Label>
                    <Select
                      value={filters.condition}
                      onValueChange={(value) => updateFilter("condition", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All conditions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unused">Unused</SelectItem>
                        <SelectItem value="few-pages">Few Pages Used</SelectItem>
                        <SelectItem value="mostly-used">Mostly Used (Recycling)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            Showing {filteredResources.length} result{filteredResources.length !== 1 ? "s" : ""}
          </p>

          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <div className="icon-container h-16 w-16 mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="card-elevated p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  {/* Icon */}
                  <div className={`${resource.category === "textbook" ? "icon-container" : "icon-container-secondary"} h-14 w-14 flex-shrink-0`}>
                    {resource.category === "textbook" ? (
                      <BookOpen className="h-7 w-7" />
                    ) : (
                      <Notebook className="h-7 w-7" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground truncate">
                        {resource.title}
                      </h3>
                      {getConditionBadge(resource.condition)}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="h-3.5 w-3.5" />
                        {resource.academicLevel}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {resource.location}
                      </span>
                      <span>Posted {resource.postedDate}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0">
                    {requestedItems.includes(resource.id) ? (
                      <Button variant="outline" disabled>
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Requested
                      </Button>
                    ) : (
                      <Button onClick={() => handleRequest(resource.id)}>
                        Request
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Browse;
