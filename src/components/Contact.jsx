import { Icon } from "@iconify/react";
import { IconRing } from "./Parts";

// Social Media Icons
function SocialIcon(props) {
  return (
    <a
      href={props.link}
      className="text-text-primary w-10 h-10 bg-accent-muted rounded-full flex items-center justify-center">
      <Icon icon={props.icon} />
      <span className="sr-only">{props.label}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-b border-b-border bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Get in Touch</h2>
          <div className="w-20 h-1 bg-accent-soft mx-auto animate-fade-in delay-100"></div>
          <p className="text-text-tertiary max-w-2xl mx-auto mt-8 animate-fade-in delay-200">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 mt-15">
          
          {/* Contact Form */}
          <div className="md:w-1/2 animate-fade-in delay-200">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-secondary mb-1"
                >Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 outline-none border border-border rounded-lg focus:ring-1 focus:ring-accent-soft focus:border-accent-soft transition" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-secondary mb-1"
                >Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 outline-none border border-border rounded-lg focus:ring-1 focus:ring-accent-soft focus:border-accent-soft transition" />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-secondary mb-1"
                >Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 outline-none border border-border rounded-lg focus:ring-1 focus:ring-accent-soft focus:border-accent-soft transition" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary mb-1"
                >Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 outline-none border border-border rounded-lg focus:ring-1 focus:ring-accent-soft focus:border-accent-soft transition"
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-accent rounded-lg shadow-lg transition hover:bg-text-primary hover:text-text-inverse">Send Message</button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="md:w-1/2 animate-fade-in delay-300">
            <div className="p-8 rounded-xl shadow-lg h-full bg-surface-elevated">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <IconRing icon="carbon:location" size="text-xl"/>
                  <div>
                    <h4 className="font-semibold text-text-primary">Location</h4>
                    <p className="text-text-tertiary">Pattambi, Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <IconRing icon="carbon:email" size="text-xl"/>
                  <div>
                    <h4 className="font-semibold text-text-primary">Email</h4>
                    <p className="text-text-tertiary">muhmdfayasek@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <a href="https://t.me/muhmdfayasek">
                    <IconRing icon="bi:telegram" size="text-xl" />
                  </a>
                  <div>
                    <h4 className="font-semibold text-text-primary">Message</h4>
                    <p className="text-text-tertiary">t.me/muhmdfayasek</p>
                  </div>
                </div>
              </div>

              {/* Social media Profiles */}
              <div className="mt-8">
                <h4 className="font-semibold text-text-primary">Follow Me</h4>
                <div className="flex space-x-4 mt-4">
                  
                  <SocialIcon link="https://github.com/muhmdfayasek" icon="bi:github" label="Github Profile" />
                  
                  <SocialIcon link="https://www.linkedin.com/in/muhmdfayasek" icon="bi:linkedin" label="LinkedIn Profile" />
                  
                  <SocialIcon link="https://www.instagram.com/muhmdfayasek" icon="bi:instagram" label="Instagram Profile" />
                  
                  <SocialIcon link="https://bsky.app/profile/muhmdfayasek.bsky.social" icon="bi:bluesky" label="Bluesky Profile" />
                  
                  <SocialIcon link="https://www.facebook.com/muhmdfayasek" icon="bi:facebook" label="Facebook Profile" />
                  
                  <SocialIcon link="https://x.com/muhmdfayasek" icon="bi:twitter-x" label="X(Twitter) Profile" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
