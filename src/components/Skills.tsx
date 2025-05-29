
import { useState } from 'react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  const skills = [
    {
      name: "HTML",
      level: 75,
      description: "Strong understanding of HTML5 structure and semantic elements."
    },
    {
      name: "CSS",
      level: 70,
      description: "Comfortable with CSS styling, layouts, and basic animations."
    },
    {
      name: "JavaScript",
      level: 50,
      description: "Basic knowledge of JavaScript for interactive web elements."
    },
    {
      name: "Responsive Design",
      level: 65,
      description: "Ability to create websites that work well on various screen sizes."
    },
    {
      name: "Problem Solving",
      level: 80,
      description: "Strong analytical skills to tackle coding challenges."
    }
  ];
  
  const futureSkills = ["UI/UX Design", "React", "Node.js", "Web Accessibility"];
  
  return (
    <section id="skills" className="bg-portfolio-gray">
      <div className="section-wrapper">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="portfolio-card">
            <h3 className="text-2xl font-semibold mb-6">Current Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="skill-item"
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-portfolio-blue font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-portfolio-blue rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  {activeSkill === skill.name && (
                    <p className="text-sm text-gray-600 mt-2 animate-fade-in">{skill.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="portfolio-card">
            <h3 className="text-2xl font-semibold mb-6">Future Focus</h3>
            <p className="text-gray-700 mb-6">
              As I continue my learning journey, I'm excited to develop expertise in these areas:
            </p>
            <div className="flex flex-wrap gap-3">
              {futureSkills.map((skill, index) => (
                <div 
                  key={skill}
                  className="skill-badge border-2 border-portfolio-blue bg-white py-3 px-5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-portfolio-softBlue rounded-lg">
              <h4 className="text-xl font-medium mb-3 text-portfolio-darkBlue">Continuous Learning</h4>
              <p className="text-gray-700">
                I'm committed to expanding my skill set through online courses, tutorials, and personal projects. My approach involves building practical applications to reinforce my learning and solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
