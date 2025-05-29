
import { Code, ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="section-wrapper">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="portfolio-card">
            <div className="h-48 bg-portfolio-softBlue rounded-md mb-6 flex items-center justify-center">
              <Code size={64} className="text-portfolio-blue" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Coding Language Store Page</h3>
            <p className="text-gray-600 mb-4">
              A personal project that showcases a variety of coding languages with dedicated pages, built using HTML, CSS, and JavaScript. The design focuses on responsive layout and interactive elements.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">Responsive Design</span>
            </div>
            <a href="#" className="inline-flex items-center text-portfolio-blue hover:underline">
              Coming Soon <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="portfolio-card bg-gray-50 border-dashed border-2 border-gray-200 flex flex-col items-center justify-center text-center p-12">
            <div className="w-20 h-20 rounded-full bg-portfolio-softBlue flex items-center justify-center mb-4">
              <span className="text-3xl font-semibold text-portfolio-blue">+</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Future Project</h3>
            <p className="text-gray-600">
              This space is reserved for my next web development project. As I continue to learn and grow, I'll be adding more projects to showcase my expanding skill set.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#contact" className="btn-primary">
            Interested in collaborating? <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
