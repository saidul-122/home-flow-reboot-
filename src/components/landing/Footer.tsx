import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="ml-3 text-white font-bold text-2xl">FlowApp</span>
            </Link>
            <p className="mb-6 max-w-md">
              FlowApp is the all-in-one platform that helps teams collaborate,
              manage projects, and deliver results faster than ever before.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* Twitter */}
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v9h4v-9h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C5.68 2 4 3.68 4 5.75v12.5C4 20.32 5.68 22 7.75 22h8.5C18.32 22 20 20.32 20 18.25V5.75C20 3.68 18.32 2 16.25 2h-8.5zM12 8a4 4 0 110 8 4 4 0 010-8zm6-2a1 1 0 110 2 1 1 0 010-2zm-6 3a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.3h.07c.67-1.27 2.3-2.6 4.73-2.6C22.5 7.7 24 10.1 24 14.2V24h-5v-9.5c0-2.3-.05-5.3-3.23-5.3-3.23 0-3.72 2.52-3.72 5.13V24H7.5V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links - Product */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">Roadmap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Webinars</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Saidul Hoque. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-white py-2 px-4 rounded focus:outline-none">
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
