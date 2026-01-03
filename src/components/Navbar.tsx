import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/ConsenTerra_Logo.png";
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
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="ConsenTerra" className="h-9 w-9" />
          <span className="text-lg font-semibold text-foreground">
            ConsenTerra
          </span>
        </Link>

        {/* Desktop Navigation - Always visible, no hamburger */}
        <div className="flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger 
                      className={cn(
                        "bg-transparent hover:bg-transparent hover:text-primary text-sm font-normal px-2 sm:px-4",
                        isActive(link.href) && "text-primary"
                      )}
                    >
                      <span className="hidden sm:inline">{link.name}</span>
                      <span className="sm:hidden">Solutions</span>
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
                        "inline-flex h-10 items-center justify-center px-2 sm:px-4 py-2 text-xs sm:text-sm font-normal transition-colors hover:text-primary whitespace-nowrap",
                        isActive(link.href) && "text-primary"
                      )}
                    >
                      <span className="hidden md:inline">{link.name}</span>
                      <span className="md:hidden">
                        {link.name === "Privacy Policy" ? "Privacy" : 
                         link.name === "About Us" ? "About" : link.name}
                      </span>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}