
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log("Form submitted");
  };

  return (
    <section className="py-20 bg-saas-gray" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our product, pricing, or anything else? Our team is ready to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fade-in">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-medium">
                    First name
                  </label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 font-medium">
                    Last name
                  </label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-saas-blue hover:bg-saas-dark-blue text-white py-6">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact information</h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-saas-light-blue p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-saas-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@flowapp.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-saas-light-blue p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-saas-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-saas-light-blue p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-saas-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Office</h4>
                    <p className="text-gray-600">
                      123 Main Street, Suite 400<br />San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-saas-blue text-white rounded-xl p-8 mt-6 lg:mt-0">
              <h4 className="text-xl font-bold mb-4">Looking for a demo?</h4>
              <p className="mb-6">
                Our team can provide a personalized walkthrough of our platform
                to help you see if it's the right fit for your needs.
              </p>
              <Button variant="outline" className="text-black border-white hover:bg-saas-dark-blue">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
