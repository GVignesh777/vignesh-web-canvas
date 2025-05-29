
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-display">
              <span className="text-portfolio-blue">V</span>ignesh
            </a>
            <p className="text-gray-600 mt-2">
              Aspiring Web Developer
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-portfolio-blue text-white rounded-full flex items-center justify-center hover:bg-portfolio-darkBlue transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-portfolio-blue text-white rounded-full flex items-center justify-center hover:bg-portfolio-darkBlue transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-portfolio-blue text-white rounded-full flex items-center justify-center hover:bg-portfolio-darkBlue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {currentYear} G Vignesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
