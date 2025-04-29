
import React from "react";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "FlowApp has completely transformed how our team works. We're more organized, more efficient, and actually enjoy our project management process now.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupLabs",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "As our company grew, we needed a solution that could scale with us. FlowApp not only met our needs but exceeded our expectations in every way.",
    stars: 5,
  },
  {
    name: "Alex Rodriguez",
    role: "Marketing Director at GrowthBrand",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "The analytics and reporting features have given us insights we never had before. Now we can make data-driven decisions that impact our business positively.",
    stars: 4,
  },
  {
    name: "Emily Parker",
    role: "Design Team Lead at CreativeStudio",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The collaborative features in FlowApp have been a game-changer for our creative team. We can share feedback and iterate much faster than before.",
    stars: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
    <div className="flex mb-4">
      {Array.from({ length: testimonial.stars }).map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      ))}
      {Array.from({ length: 5 - testimonial.stars }).map((_, i) => (
        <Star key={i} className="h-5 w-5 text-gray-300" />
      ))}
    </div>
    <blockquote className="text-gray-600 italic mb-6 flex-grow">
      "{testimonial.quote}"
    </blockquote>
    <div className="flex items-center">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="h-12 w-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-semibold">{testimonial.name}</h4>
        <p className="text-gray-500 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by thousands of teams
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about how FlowApp has transformed their workflows and productivity.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Testimonial Carousel */}
        <div className="lg:hidden animate-fade-in">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10" />
              <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-16 gap-12 opacity-60">
          <div className="w-32">
            <svg viewBox="0 0 124 40" className="h-10">
              <path d="M115.7,5h8.3v8.5h-8.3V5z M115.7,15.5h8.3v19.2h-8.3V15.5z M94.9,15.5h7.9v2.7h0.1c1.1-1.5,3.7-3.1,7.7-3.1 c8.2,0,9.7,5.4,9.7,12.4v7.2h-8.3v-6.4c0-3.1-0.1-7-4.3-7c-4.3,0-5,3.3-5,6.8v6.7h-8.3V15.5z M81.9,15.5h8.3v19.2h-8.3V15.5z M81.9,5h8.3v8.5h-8.3V5z M68.9,8.7c0-0.3,0-0.9,0.9-0.9c0.9,0,7,0,7,0v-7c0,0-4.3,0-7.5,0c-4,0-8.5,2.9-8.5,8.5c0,0.2,0,5.5,0,5.5 h-4.6v7.6h4.6c0,0,0,9.8,0,19.2h8.3c0,0,0-9.3,0-19.2H76V8.7H68.9z M43.3,15.5h7.9v2.7h0.1c1.1-1.5,3.7-3.1,7.7-3.1 c8.2,0,9.7,5.4,9.7,12.4v7.2h-8.3v-6.4c0-3.1-0.1-7-4.3-7c-4.3,0-5,3.3-5,6.8v6.7h-8.3V15.5z M20.1,5v12.7h0.1 c0.6-1.8,3.8-2.7,6.8-2.7c7.3,0,12.9,5.9,12.9,14.8c0,7-4.3,14.4-12.7,14.4c-5.3,0-8-2-9.4-3.5H18v3h-8V5H20.1z M8.7,34.7h8.3 c1.4,1.9,5,2.9,7.7,0.9c1.1-0.9,1.6-2,1.6-3.1c0-3.1-2.5-4-5.1-4.8c-2.6-0.7-5.4-1.5-7.9-3.1c-2.7-1.8-4.5-4.6-4.5-8.9 C8.7,9,14.6,5,20.8,5c2.6,0,7.3,0.5,10,4.1V5h8v8.5h-8c-1.4-2.3-4.3-2.9-6.7-1.3c-0.9,0.7-1.4,1.5-1.4,2.9c0,1.8,1.3,2.7,2.7,3.2 c4.8,1.7,12.8,1.1,16.5,7.8c1.4,2.5,1.8,5.5,1.8,8.3c0,7.2-5.5,12.9-12.8,12.9c-3.4,0-7.8-1.1-10.3-3.8V35H0v-8.5h8.7V34.7z"></path>
            </svg>
          </div>
          <div className="w-32">
            <svg viewBox="0 0 124 40" className="h-8">
              <path d="M49.8,25.2c0,3.8-3.1,6.9-6.9,6.9s-6.9-3.1-6.9-6.9s3.1-6.9,6.9-6.9l0,0C46.7,18.3,49.8,21.4,49.8,25.2z  M36.1,25.2c0,3.8,3.1,6.8,6.9,6.8c3.7,0,6.8-3.1,6.8-6.8c0-3.8-3.1-6.8-6.8-6.8C39.1,18.4,36.1,21.4,36.1,25.2z M33.9,25.2 c0-5,4-9.1,9-9.1c5,0,9,4,9,9.1c0,5-4,9.1-9,9.1C37.9,34.2,33.9,30.2,33.9,25.2z M27.5,16.7v17.2h-2.2V16.7H27.5z M22,28.3 c1.8,1.3,4,2,6.2,2c3.8,0,6.2-1.8,6.2-5.3v-0.2c-1.8,2-3.9,2.7-6.5,2.7c-4.8,0-8.1-3.3-8.1-8.1c0-4.7,3.5-8.2,8.4-8.2 c2.5-0.1,4.9,1,6.5,3v-2.4H37v13.4c0,2.2-0.7,4-2.1,5.3c-1.4,1.3-3.6,1.9-6.6,1.9c-2.6,0-5.1-0.7-7.1-2.2v-2.3H22z  M19.4,20.8c-0.6-0.5-1.2-1.1-1.7-1.7c-0.4-0.7-0.6-1.4-0.6-2.2c0-1.1,0.5-2.2,1.4-2.9c0.9-0.7,2-1.1,3.1-1.1c1.1,0,2.2,0.3,3.1,1 c0.8,0.7,1.3,1.7,1.3,2.8c-0.1,1.4-0.8,2.6-2.1,3.3l-1.3,0.9l-1.6,1c-0.4,0.3-0.8,0.7-1.1,1.1c-0.3,0.5-0.4,1-0.4,1.6h-2.3 c0-0.9,0.2-1.7,0.6-2.5c0.4-0.7,0.9-1.3,1.6-1.8L19.4,20.8z M17,29.3h6.2v1.9H17V29.3z M12.2,10.5v18.4H10V10.5H3.6V8.4h15v2.1 H12.2z M57,24.8l6.6-8.1h2.7l-6.6,7.9l7.3,9h-2.8l-7.2-9v9h-2.2V16.7h2.2V24.8z M72.8,25.1v8.8h-2.2V16.7h2.2v2.4 c0.4-0.8,1-1.4,1.8-1.9c0.8-0.4,1.7-0.7,2.6-0.7c1.8,0,3.6,0.7,4.8,2.2c1.3,1.5,1.9,3.5,1.9,5.5c0,2-0.7,4-1.9,5.5 c-1.3,1.5-3,2.3-4.9,2.3c-1.9,0-3.5-1-4.4-2.6l0,0V25.1z M82.7,24.1c0-1.4-0.5-2.8-1.4-3.9c-0.9-1-2.2-1.6-3.5-1.6 c-1.4,0-2.7,0.6-3.6,1.6c-0.9,1.1-1.4,2.4-1.4,3.9s0.5,2.8,1.4,3.9c1,1.1,2.2,1.7,3.6,1.7c1.3,0,2.6-0.6,3.5-1.6 C82.2,27,82.7,25.6,82.7,24.1L82.7,24.1z M92.4,30.9h9.1V33h-11V8.4h2.2v22.5H92.4z M114.1,24.2c0-1.3-0.5-2.6-1.4-3.6 c-0.9-1-2.1-1.6-3.5-1.6s-2.6,0.6-3.5,1.5c-0.9,1-1.5,2.3-1.4,3.7H114.1z M104.4,25.8c0.1,1.5,0.6,2.9,1.7,3.8 c1,0.9,2.3,1.3,3.7,1.3c1.8,0,3.2-0.7,4.3-2.1l1.5,1.3c-1.5,1.9-3.7,3-6,2.9c-2,0.1-3.9-0.7-5.3-2.2c-1.4-1.5-2.1-3.5-2.1-5.5 c0-2,0.7-4,2-5.5c1.4-1.5,3.3-2.4,5.3-2.3c1.9-0.1,3.8,0.7,5.1,2.1c1.3,1.4,2,3.3,2,5.3c0,0.3,0,0.6-0.1,0.9H104.4z"></path>
            </svg>
          </div>
          <div className="w-32">
            <svg viewBox="0 0 124 40" className="h-10">
              <path d="M35.108 7.134h4.504v9.226c.984-1.476 2.789-2.624 5.415-2.624 5.577 0 8.366 3.772 8.366 9.472v11.32h-4.504V23.867c0-3.935-1.969-6.068-5.342-6.068-3.373 0-5.415 2.214-5.415 6.15v10.58h-4.504v-27.4l1.48.005zM57.831 23.208v-.082c0-6.56 4.585-11.971 11.145-11.971 6.56 0 11.063 5.33 11.063 11.89v.08c0 6.561-4.585 11.971-11.145 11.971-6.559 0-11.063-5.328-11.063-11.889zm17.555-.082v-.082c0-3.854-2.706-7.138-6.491-7.138-3.936 0-6.394 3.202-6.394 7.057v.081c0 3.854 2.705 7.138 6.476 7.138 3.935 0 6.41-3.202 6.41-7.057zM85.661 12.005h4.504v3.691c.984-2.132 2.953-4.175 6.23-4.175 4.422 0 7.057 2.953 7.057 7.628v15.38h-4.504V20.258c0-3.037-1.641-4.914-4.504-4.914-2.788 0-4.585 1.959-4.585 4.995v14.19h-4.504V12.004h.306zM106.347 30.02v-.082c0-3.373 2.624-5.25 6.559-5.25a19.674 19.674 0 0 1 5.33.738v-.328c0-2.871-1.886-4.422-5.095-4.422-1.969 0-3.61.492-5.002 1.15l-1.149-3.364c1.723-.82 3.774-1.394 6.479-1.394 2.625 0 4.586.656 5.908 1.968 1.231 1.231 1.804 3.037 1.804 5.33v10.16h-4.341v-2.132c-1.148 1.476-2.952 2.46-5.74 2.46-3.364.082-8.753-1.067-8.753-4.834zm11.97-1.313v-1.314a14.702 14.702 0 0 0-4.504-.738c-2.953 0-4.258 1.149-4.258 2.706v.081c0 1.56 1.476 2.46 3.446 2.46 3.201.082 5.316-1.632 5.316-3.195zM7 8.898h23V9.9H7zM7 14.5h17v1H7zM7 20h23v1H7zM7 25.5h17v1H7z"></path>
            </svg>
          </div>
          <div className="w-32">
            <svg viewBox="0 0 124 40" className="h-8">
              <path d="M36.2,19.2a6.6,6.6,0,0,0-6.5-7c-3.8,0-6.8,2.9-6.8,7s3,7,6.8,7A6.6,6.6,0,0,0,36.2,19.2Zm-10.1,0c0-2.2,1.4-4.1,3.6-4.1s3.5,1.9,3.5,4.1-1.4,4.1-3.5,4.1S26.1,21.4,26.1,19.2Zm42.2-6.5h-3V9.3H62.2v3.4H60v2.6h2.2v7.5c0,2.6,1.9,4,4.2,4a7.7,7.7,0,0,0,3-.6l-.7-2.5a4.1,4.1,0,0,1-1.8.4c-1.1,0-1.6-.7-1.6-1.7V15.3h3Zm-22.5,3.1V12.7H42.5V25.8h3.3V19.5c0-2.5,1.8-3.8,3.4-3.8a5.3,5.3,0,0,1,1.3.2l.8-3a5.7,5.7,0,0,0-1.5-.2A4.1,4.1,0,0,0,45.8,15.8Zm-18.6,3c0,4.3,3,7.4,7.6,7.4a7,7,0,0,0,5.2-2l-1.7-2a5,5,0,0,1-3.5,1.3,3.9,3.9,0,0,1-4.1-3.7Z M75.2,19.2a6.8,6.8,0,0,0-6.5-7c-3.8,0-6.8,2.9-6.8,7s3,7,6.8,7A6.6,6.6,0,0,0,75.2,19.2Zm-10.1,0c0-2.2,1.4-4.1,3.6-4.1s3.5,1.9,3.5,4.1-1.4,4.1-3.5,4.1S65.1,21.4,65.1,19.2ZM79.6,8.1a1.9,1.9,0,0,0-1.9,1.9,2,2,0,0,0,1.9,1.9A1.9,1.9,0,0,0,79.6,8.1Zm1.6,4.6H77.9V25.8h3.3Zm2.7,6.5c0,4.3,3.1,7.4,7.6,7.4a6.8,6.8,0,0,0,5.2-2l-1.7-2a4.8,4.8,0,0,1-3.4,1.3,3.9,3.9,0,0,1-4.2-3.7h10V18.6c0-4.3-2.6-7.4-6.9-7.4S83.9,14.5,83.9,19.2Zm7-4.5a3.4,3.4,0,0,1,3.5,3.3H87.2A3.4,3.4,0,0,1,90.9,14.7ZM104,21.3c0-3.1,2-4.1,4.4-4.1h1.1V12.5a4.8,4.8,0,0,0-4,2.3V12.7h-3.2V25.8H104Zm12.6-13.2a1.9,1.9,0,0,0-1.9,1.9,1.9,1.9,0,0,0,1.9,1.9,1.9,1.9,0,0,0,1.9-1.9A1.9,1.9,0,0,0,116.6,8.1Zm1.7,4.6h-3.3V25.8h3.3Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
