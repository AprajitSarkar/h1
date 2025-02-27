import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Account", path: "/account" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms", path: "/terms-and-conditions" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-background shadow-sm z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand Logo/Name */}
        <Link to="/" className="text-xl font-bold text-primary">
          Watch Together
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={cn(
                  "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="p-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      "block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    )}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};

export default Navbar;
