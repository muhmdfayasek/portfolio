import { IconRing } from "./Parts";

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-b-border bg-background min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="font-bold text-3xl mb-4 animate-fade-in">About me</h2>
          <div className="w-20 h-1 bg-accent-soft mx-auto animate-fade-in delay-150"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 animate-fade-in delay-200">
            <div className="text-center">
              <img src="src/assets/profile.webp" alt="Profile" className="w-full min-h-50 max-h-full ml-3 mt-10 rounded-full shadow-xl shadow-slate-950 border-accent-hover border-4"/>
            </div>
          </div>
          <div className="md:w-2/3 animate-fade-in delay-300">
            {/* Introduction */}
            <h3 className="font-semibold text-2xl mb-4 mt-10">Wait, Who's This Guy?</h3>
            <p className="text-text-tertiary mb-6 font-fira">
              I’m Muhammed Fayas EK, a BCA student and developer who enjoys turning ideas into real, working projects. I like learning by building, experimenting with new technologies, and occasionally creating problems just so I can figure out how to fix them. I’m also interested in open source and enjoy exploring, contributing to, and learning from the work of developers around the world.
            </p>

            {/* Education, Experience and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <IconRing icon="fa6-solid:graduation-cap" size="text-md"/>
                <div>
                  <h4 className="font-semibold text-text-primary">Education</h4>
                  <p className="text-text-secondary font-fira">
                    Bachelor of Computer Applications<br />
                    SAFA College of Arts and Science Pookattiri <span>(Ongoing)</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <IconRing icon="fa6-solid:briefcase" size="text-md"/>
                <div>
                  <h4 className="font-semibold text-text-primary">Experience</h4>
                  <p className="text-text-secondary font-fira">
                    One year of experience in breaking and fixing my own system
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <IconRing icon="fa6-solid:code" size="text-md"/>
                <div>
                  <h4 className="font-semibold text-text-primary">Specialization</h4>
                  <p className="text-text-secondary font-fira">
                    Frontend Development<br />
                    Linux
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <IconRing icon="fa6-solid:globe" size="text-md"/>
                <div>
                  <h4 className="font-semibold text-text-primary">Languages</h4>
                  <p className="text-text-secondary font-fira">
                    English, Malayalam
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* <a href="#" className="px-6 py-2 font-ibm-plex bg-accent hover:bg-text-primary border border-accent hover:text-text-inverse rounded-lg transition">
                Download CV</a>*/}
              <a href="#contact" className="px-6 py-2 font-ibm-plex border border-text-primary text-text-primary hover:bg-text-primary hover:text-text-inverse rounded-lg transition">
                Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}