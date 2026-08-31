import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-b-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="font-bold text-3xl mb-4 animate-fade-in">About me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto animate-fade-in delay-150"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 animate-fade-in delay-200">
            <div className="text-center">
              <img src="src/assets/profile.webp" alt="Profile" className="w-full min-h-50 max-h-full ml-3 mt-10 rounded-full shadow-xl shadow-slate-950 border-indigo-300 border-4"/>
            </div>
          </div>
          <div className="md:w-2/3 animate-fade-in delay-300">
            <h3 className="font-semibold text-2xl mb-4">Wait, Who's This Guy?</h3>
            <p className="text-gray-300 mb-6">
              I’m Muhammed Fayas EK, a BCA student and developer who enjoys turning ideas into real, working projects. I like learning by building, experimenting with new technologies, and occasionally creating problems just so I can figure out how to fix them. I’m also interested in open source and enjoy exploring, contributing to, and learning from the work of developers around the world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-indigo-700 p-3 rounded-full mr-4">
                  <Icon icon="fa6-solid:graduation-cap" className="text-md"/>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-50">Education</h4>
                  <p className="text-gray-200">
                    Bachelor of Computer Applications<br />
                    SAFA College of Arts and Science Pookattiri
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-700 p-3 rounded-full mr-4">
                  <Icon icon="fa6-solid:briefcase" className="text-md"/>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-50">Experience</h4>
                  <p className="text-gray-200">
                    One year of experience in breaking and fixing my own system
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-700 p-3 rounded-full mr-4">
                  <Icon icon="fa6-solid:code" className="text-md"/>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-50">Specialization</h4>
                  <p className="text-gray-200">
                    Frontend Development<br />
                    Linux
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-700 p-3 rounded-full mr-4">
                  <Icon icon="fa6-solid:globe" className="text-md"/>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-50">Languages</h4>
                  <p className="text-gray-200">
                    English, Malayalam
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-6 py-2 bg-indigo-600 hover:bg-transparent border border-indigo-500 hover:text-indigo-300 rounded-lg transition">
                Download CV</a>
              <a href="#contact" className="px-6 py-2 border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white rounded-lg transition">
                Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}