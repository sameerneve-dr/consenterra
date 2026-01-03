import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "PriXplainer",
    description: "Understand before you consent.",
    href: "/solutions/prixplainer",
  },
  {
    title: "FoundrFATE",
    description: "Founder success shouldn't feel like luck.",
    href: "/solutions/foundrfate",
  },
  {
    title: "TrustEarthy",
    description: "Small swaps. Real impact.",
    href: "/solutions/trusteartthy",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Text Logo */}
        <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
          ConsenTerra
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger 
                      className={cn(
                        "bg-transparent hover:bg-transparent hover:text-primary text-sm font-normal",
                        isActive(link.href) && "text-primary"
                      )}
                    >
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[280px] p-2 bg-popover border border-border rounded-lg shadow-lg">
                        {solutions.map((solution) => (
                          <li key={solution.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={solution.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary"
                              >
                                <div className="text-sm font-medium text-foreground">
                                  {solution.title}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {solution.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.href}
                      className={cn(
                        "inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-normal transition-colors hover:text-primary",
                        isActive(link.href) && "text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="section-container py-4 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className={cn(
                      "flex items-center justify-between w-full py-2 px-3 rounded-md text-sm transition-colors hover:bg-secondary",
                      isActive(link.href) && "text-primary"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isSolutionsOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isSolutionsOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.title}
                          to={solution.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {solution.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block py-2 px-3 rounded-md text-sm transition-colors hover:bg-secondary",
                    isActive(link.href) && "text-primary"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}