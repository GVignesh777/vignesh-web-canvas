
import { Code, Pen } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="section-wrapper">
        <h2 className="section-title">What I Aim to Offer</h2>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gray-700">
            While I'm still developing my skills, I'm excited about the services I plan to offer in the future after completing my diploma education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="portfolio-card text-center flex flex-col items-center hover:border-portfolio-blue transition-colors duration-300">
            <div className="w-20 h-20 bg-portfolio-softBlue rounded-full flex items-center justify-center mb-6">
              <Code size={32} className="text-portfolio-blue" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Creating responsive and user-friendly websites that provide excellent experiences across all devices. Focusing on clean, semantic code and modern design principles.
            </p>
            <ul className="text-left w-full space-y-2 mt-auto">
              <li className="flex items-center">
                <span className="text-portfolio-blue mr-2">✓</span>
                <span className="text-gray-700">Responsive website development</span>
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-blue mr-2">✓</span>
                <span className="text-gray-700">Interactive web elements</span>
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-blue mr-2">✓</span>
                <span className="text-gray-700">Modern web practices</span>
              </li>
            </ul>
          </div>
          
          <div className="portfolio-card text-center flex flex-col items-center hover:border-portfolio-blue transition-colors duration-300">
            <div className="w-20 h-20 bg-portfolio-softBlue rounded-full flex items-center justify-center mb-6">
              <Pen size={32} className="text-portfolio-blue" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">
              Creating intuitive, aesthetically pleasing interfaces that enhance user experience and help businesses connect with their audience effectively.
            </p>
            <ul className="text-left w-full space-y-2 mt-auto">
              <li className="flex items-center">
                <span className="text-portfolio-blue mr-2">✓</span>
                <span className="text-gray-700">User-centered design approach</span>
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-blue mr-2">✓</span>
                <span className="text-gray-700">Interface design and prototyping</span>
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-blue mr-2">✓</span>
                <span className="text-gray-700">User experience improvements</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-6">
            I'm eager to collaborate and build creative web solutions that make an impact. As my skills grow, so will my service offerings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
