import { ArrowRight, Brain, Bot, Microchip } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'An aspiring developer currently learning the ropes of coding and loving every step of the journey.';
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, isTyping]);
  return <section id="home" className="min-h-screen relative bg-gradient-to-br from-white to-portfolio-softBlue/30 flex items-center pt-20 overflow-hidden">
      {/* AI Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="ai-particles"></div>
        <div className="ai-grid"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="flex items-center mb-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Brain size={24} className="text-portfolio-blue mr-2 animate-pulse" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>AI-Powered Development</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <h2 className="text-xl md:text-2xl font-semibold text-portfolio-darkBlue">
                Hello, I'm
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 flex items-center">
              G <span className="text-gradient glow-text">Vignesh</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Bot size={30} className="ml-3 text-portfolio-darkBlue/70" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Building AI-Enhanced Experiences</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h1>
            
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 typing-text h-auto max-w-lg">
              {text}
              <span className={`cursor ${isTyping ? 'blinking' : 'hidden'}`}>|</span>
            </h3>
            
            <p className="text-gray-600 mb-8 text-base">Hi, I'm Vignesh from Hyderabad. I'm building my skills  in HTML, CSS, JavaScript and Python and this portfolio is where I share my progress, projects, and growth.developer.</p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary ai-button-glow">
                View Portfolio <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-outline">
                About Me
              </a>
            </div>
            
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="profile-image w-64 h-64 md:w-80 md:h-80 ai-profile-glow">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://iili.io/3jskd8B.md.jpg" alt="Vignesh profile picture" className="object-cover" />
                <AvatarFallback className="w-full h-full bg-gradient-to-tr from-portfolio-blue to-portfolio-lightBlue flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-2">V</div>
                    <div className="text-sm">Profile Picture</div>
                  </div>
                </AvatarFallback>
              </Avatar>
              <div className="ai-orbiting-icon">
                <Microchip className="text-portfolio-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;