import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OE</span>
            </div>
            <span className="text-xl font-semibold text-foreground">OphthalmoEducate</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/cases">
              <Button variant="ghost">Case Library</Button>
            </Link>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">Menu</Button>
          </div>
        </div>
      </div>
    </header>
  );
};