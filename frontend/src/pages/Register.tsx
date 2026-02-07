import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PageLayout from "@/components/layout/PageLayout";
import {
  BookOpen,
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  GraduationCap,
  Building2,
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt:", formData);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="icon-container h-12 w-12">
                <img src="/logo.svg" alt="EduCycle Logo" className="h-6 w-6" />
              </div>
            </Link>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Join EduCycle
            </h1>
            <p className="text-muted-foreground">
              Create your account to start making an impact
            </p>
          </div>

          {/* Registration Form */}
          <div className="card-elevated p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label>I am a</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => updateFormData("role", value)}
                  className="grid grid-cols-2 gap-3"
                >
                  <div>
                    <RadioGroupItem
                      value="student"
                      id="student"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="student"
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:bg-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent"
                    >
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <span className="font-medium">Student</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="ngo"
                      id="ngo"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="ngo"
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border cursor-pointer transition-all hover:bg-muted peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-accent"
                    >
                      <Building2 className="h-6 w-6 text-secondary" />
                      <span className="font-medium">NGO</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">
                  {formData.role === "ngo" ? "Organization Name" : "Full Name"}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder={formData.role === "ngo" ? "Enter organization name" : "Enter your name"}
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => updateFormData("password", e.target.value)}
                    className="pl-10 pr-10"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Account
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By creating an account, you agree to our{" "}
            <Link to="#" className="underline hover:text-foreground">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="#" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Register;
