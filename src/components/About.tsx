
import { User, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-wrapper">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="portfolio-card">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <User className="mr-2 text-portfolio-blue" /> Personal Bio
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a diploma engineering student with a passion for web development. What excites me most about this field is the ability to create responsive, user-friendly websites that solve real problems. I enjoy the creative and technical aspects of building for the web.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Although I'm still early in my journey, I'm dedicated to continually improving my skills and learning new technologies. My goal is to build a career in web development with a specialization in UI/UX design after completing my diploma.
            </p>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-2 text-portfolio-blue" />
              <p>Meerpet, Hyderabad</p>
            </div>
          </div>
          
          <div className="portfolio-card">
            <h3 className="text-2xl font-semibold mb-4">Career Vision</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-portfolio-blue font-bold text-lg mr-2">➤</span>
                <p className="text-gray-700">Become a skilled full-stack web developer</p>
              </li>
              <li className="flex">
                <span className="text-portfolio-blue font-bold text-lg mr-2">➤</span>
                <p className="text-gray-700">Specialize in UI/UX design after diploma completion</p>
              </li>
              <li className="flex">
                <span className="text-portfolio-blue font-bold text-lg mr-2">➤</span>
                <p className="text-gray-700">Build a portfolio of responsive and user-friendly websites</p>
              </li>
              <li className="flex">
                <span className="text-portfolio-blue font-bold text-lg mr-2">➤</span>
                <p className="text-gray-700">Collaborate with other developers on meaningful projects</p>
              </li>
              <li className="flex">
                <span className="text-portfolio-blue font-bold text-lg mr-2">➤</span>
                <p className="text-gray-700">Continuously improve my skills and stay updated with latest technologies</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
