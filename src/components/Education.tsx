
import { Book } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="bg-portfolio-gray">
      <div className="section-wrapper">
        <h2 className="section-title">Education</h2>
        
        <div className="portfolio-card mt-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-portfolio-blue"></div>
          
          <div className="pl-6">
            <div className="flex items-center mb-4">
              <Book size={24} className="text-portfolio-blue mr-3" />
              <h3 className="text-2xl font-semibold">Diploma in Engineering</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-500">Currently in 2nd Year</p>
              <p className="text-gray-500">Expected Graduation: 2026</p>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-medium mb-3">Learning Focus</h4>
              <p className="text-gray-700 leading-relaxed">
                Throughout my diploma program, I've been dedicated to building a strong foundation in engineering principles while also pursuing my passion for web development. I actively seek out additional learning resources online to complement my formal education and develop practical skills in HTML, CSS, and JavaScript.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I believe in continuous learning and regularly challenge myself with new concepts and technologies. My education extends beyond the classroom as I work on personal projects that help me apply theoretical knowledge to real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
