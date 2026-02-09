import { Link } from "react-router-dom";
import { BookOpen, Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Donate Resources", href: "/donate" },
      { label: "Browse Materials", href: "/browse" },
      { label: "Collection Points", href: "/collection-points" },
    ],
    support: [
      { label: "FAQs", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Partner With Us", href: "#" },
      { label: "NGO Registration", href: "/register" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="icon-container h-9 w-9">
                <img src="/logo.svg" alt="EduCycle Logo" className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Edu<span className="text-primary">Cycle</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Connecting students through sustainable education resource sharing.
              Donate, reuse, and recycle study materials.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Mail className="h-4 w-4" />
              <span>hello@educycle.org</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EduCycle. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive fill-current" /> for sustainable education
          </p>
          <p>By Shivtej Patil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
