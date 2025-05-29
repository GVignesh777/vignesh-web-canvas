
import { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting state to true
    setIsSubmitting(true);
    
    try {
      // EmailJS credentials - using the ones you provided
      
      // User's Sending id's
      const user_serviceId = 'service_aqwj46k';
      const user_templateId = 'template_twc28yt';
      const user_publicKey = 'Wc6K1JoCxajhtQ67r';

      // Sending mail to owner
      const owner_serviceId = 'service_aqwj46k';
      const owner_templateId = 'template_ed8t02o_owner';
      const owner_publicKey = 'Wc6K1JoCxajhtQ67r';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: `Hi ${formData.name}`, // Only the name without "Hi" prefix
        reply_to: formData.email,
        to_email: formData.email // Adding recipient email explicitly
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Send email to User using EmailJS
      const user_response = await emailjs.send(user_serviceId, user_templateId, templateParams, user_publicKey);
      console.log('Email sent successfully:', user_response);

      // Send email to Owner using EmailJS
      const owner_response = await emailjs.send(owner_serviceId, owner_templateId, templateParams, owner_publicKey);
      // console.log('Email sent successfully:', owner_response);
      
      // Show success message
      toast({
        title: "Message sent!",
        description: `Thank you ${formData.name} for reaching out. I'll get back to you soon.`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error message with more details
      toast({
        title: "Failed to send message",
        description: "Please check your connection and try again later.",
        variant: "destructive",
      });
    } finally {
      // Set submitting state back to false
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="bg-portfolio-gray py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-softBlue rounded-full flex items-center justify-center mr-3 md:mr-4 shrink-0">
                  <Mail className="text-portfolio-blue" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm md:text-base break-words">vignesh.portfolio@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-softBlue rounded-full flex items-center justify-center mr-3 md:mr-4 shrink-0">
                  <Phone className="text-portfolio-blue" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600 text-sm md:text-base">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-softBlue rounded-full flex items-center justify-center mr-3 md:mr-4 shrink-0">
                  <Linkedin className="text-portfolio-blue" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">LinkedIn</h4>
                  <p className="text-gray-600 text-sm md:text-base">linkedin.com/in/vignesh-web-dev</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="order-1 md:order-2 bg-white rounded-lg shadow-sm p-5 md:p-8 mb-8 md:mb-0">
            <h3 className="text-xl md:text-2xl font-semibold mb-5">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1.5 text-sm md:text-base">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent text-sm md:text-base"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1.5 text-sm md:text-base">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent text-sm md:text-base"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1.5 text-sm md:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent text-sm md:text-base"
                  placeholder="What would you like to discuss?"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue text-white font-medium py-2 md:py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2" size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
