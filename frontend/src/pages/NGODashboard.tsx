import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import {
  Package,
  Clock,
  CheckCircle2,
  Truck,
  Recycle,
  MapPin,
  BookOpen,
  Notebook,
  ChevronRight,
  Building2,
  TrendingUp,
  Filter,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data for demonstration
const donationsData = [
  {
    id: 1,
    title: "Physics NCERT Class 12 (5 copies)",
    category: "textbook",
    donor: "Rahul S.",
    location: "Mumbai",
    status: "pending",
    condition: "reusable",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Mathematics Notes Collection",
    category: "notebook",
    donor: "Priya M.",
    location: "Pune",
    status: "collected",
    condition: "reusable",
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "Old Chemistry Books (10 copies)",
    category: "textbook",
    donor: "Amit K.",
    location: "Mumbai",
    status: "distributed",
    condition: "reusable",
    date: "2024-01-12",
  },
  {
    id: 4,
    title: "Used Notebooks Batch",
    category: "notebook",
    donor: "Sneha P.",
    location: "Thane",
    status: "recycled",
    condition: "recycling",
    date: "2024-01-10",
  },
  {
    id: 5,
    title: "Engineering Textbooks Set",
    category: "textbook",
    donor: "Various",
    location: "Nashik",
    status: "collected",
    condition: "reusable",
    date: "2024-01-16",
  },
];

const collectionPointsData = [
  {
    id: 1,
    name: "Mumbai Central School",
    address: "123 Education Lane, Mumbai",
    city: "Mumbai",
    pendingCount: 12,
    collectedCount: 45,
  },
  {
    id: 2,
    name: "Pune Engineering College",
    address: "456 Tech Park Road, Pune",
    city: "Pune",
    pendingCount: 8,
    collectedCount: 32,
  },
  {
    id: 3,
    name: "Nashik Community Center",
    address: "789 Community Road, Nashik",
    city: "Nashik",
    pendingCount: 5,
    collectedCount: 18,
  },
];

const NGODashboard = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");

  const statuses = [
    { value: "pending", label: "Pending", icon: Clock, color: "text-warning" },
    { value: "collected", label: "Collected", icon: Package, color: "text-info" },
    { value: "distributed", label: "Distributed", icon: Truck, color: "text-primary" },
    { value: "recycled", label: "Recycled", icon: Recycle, color: "text-secondary" },
  ];

  const filteredDonations = donationsData.filter((donation) => {
    const matchesStatus = statusFilter === "all" || donation.status === statusFilter;
    const matchesCity = cityFilter === "all" || donation.location === cityFilter;
    return matchesStatus && matchesCity;
  });

  const getStatusInfo = (status: string) => {
    return statuses.find((s) => s.value === status) || statuses[0];
  };

  const stats = [
    { label: "Pending", value: donationsData.filter((d) => d.status === "pending").length, icon: Clock },
    { label: "Collected", value: donationsData.filter((d) => d.status === "collected").length, icon: Package },
    { label: "Distributed", value: donationsData.filter((d) => d.status === "distributed").length, icon: Truck },
    { label: "Recycled", value: donationsData.filter((d) => d.status === "recycled").length, icon: Recycle },
  ];

  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="icon-container-secondary h-12 w-12">
                <Building2 className="h-6 w-6" />
              </div>
              <h1 className="font-display text-2xl md:text-3xl font-bold">
                NGO Dashboard
              </h1>
            </div>
            <p className="text-muted-foreground">
              Manage donations, track distributions, and oversee collection points
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <TrendingUp className="h-4 w-4" />
              View Reports
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="card-elevated p-4">
              <div className="flex items-center gap-3">
                <div className="icon-container h-10 w-10">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="donations" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="collection-points">Collection Points</TabsTrigger>
          </TabsList>

          {/* Donations Tab */}
          <TabsContent value="donations" className="space-y-4">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Nashik">Nashik</SelectItem>
                  <SelectItem value="Thane">Thane</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Flow Diagram */}
            <div className="card-elevated p-4 mb-6">
              <h3 className="font-semibold mb-4">Status Flow</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                {statuses.map((status, index) => (
                  <div key={status.value} className="flex items-center gap-2 md:gap-4">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted">
                      <status.icon className={`h-4 w-4 ${status.color}`} />
                      <span className="text-sm font-medium">{status.label}</span>
                    </div>
                    {index < statuses.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-muted-foreground hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Donations List */}
            <div className="space-y-3">
              {filteredDonations.map((donation) => {
                const statusInfo = getStatusInfo(donation.status);
                return (
                  <div
                    key={donation.id}
                    className="card-elevated p-4 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className={`${donation.category === "textbook" ? "icon-container" : "icon-container-secondary"} h-12 w-12 flex-shrink-0`}>
                      {donation.category === "textbook" ? (
                        <BookOpen className="h-6 w-6" />
                      ) : (
                        <Notebook className="h-6 w-6" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate">
                        {donation.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                        <span>From: {donation.donor}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {donation.location}
                        </span>
                        <span
                          className={
                            donation.condition === "reusable"
                              ? "badge-reusable"
                              : "badge-recycling"
                          }
                        >
                          {donation.condition === "reusable" ? "Reusable" : "For Recycling"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted`}>
                        <statusInfo.icon className={`h-4 w-4 ${statusInfo.color}`} />
                        <span className="text-sm font-medium">{statusInfo.label}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* Collection Points Tab */}
          <TabsContent value="collection-points" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collectionPointsData.map((point) => (
                <div key={point.id} className="card-feature">
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-container h-12 w-12">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <span className="badge-info">{point.city}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{point.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {point.address}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-xl font-bold text-warning">{point.pendingCount}</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-primary">{point.collectedCount}</p>
                      <p className="text-xs text-muted-foreground">Collected</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default NGODashboard;
