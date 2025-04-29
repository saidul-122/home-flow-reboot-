
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, UserPlus, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="ml-2 font-bold text-xl">FlowApp</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="/#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
            Testimonials
          </a>
          <a href="/#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
            Pricing
          </a>
          <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </a>
          {isAuthenticated && (
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-2 mr-2">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 flex items-center"
                onClick={handleLogout}
              >
                <LogOut className="mr-1 h-4 w-4" />
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 flex items-center"
                >
                  <LogIn className="mr-1 h-4 w-4" />
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
                >
                  <UserPlus className="mr-1 h-4 w-4" />
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a href="/#features" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="/#testimonials" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="/#pricing" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="/#contact" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            {isAuthenticated && (
              <Link to="/dashboard" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            )}
            <div className="pt-4 flex flex-col space-y-3">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-2 py-2">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">{user?.name}</span>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-1 h-4 w-4" />
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center"
                    >
                      <LogIn className="mr-1 h-4 w-4" />
                      Log in
                    </Button>
                  </Link>
                  <Link to="/signup" className="w-full">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
                    >
                      <UserPlus className="mr-1 h-4 w-4" />
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
