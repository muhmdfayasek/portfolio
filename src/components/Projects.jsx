export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto animate-fade-in delay-100"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 animate-fade-in delay-200">
            Here are some of my recent projects showcasing my diverse skill set.
          </p>
        </div>
        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card rounded-xl overflow-hidden animate-fade-in delay-200 shadow-lg">
            <div className="relative">
              <img src="/src/assets/qeydrop.webp" alt="project-image" className="w-full h-full object-cover" />
              
              <div className="project-overlay absolute inset-0 bg-indigo-600 flex items-center justify-center opacity-0 transition duration-300">
                <a href="https://github.com/muhmdfayasek/QeyDrop" className="text-white px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-indigo-600">View Details</a>  
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">QeyDrop</h3>
              <p className="text-gray-300 mb-4">A vibecoded platform for content creators to share links with audience</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-800 text-indigo-100 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-indigo-800 text-indigo-100 px-3 py-1 rounded-full text-xs">Supabase</span>
                <span className="bg-indigo-800 text-indigo-100 px-3 py-1 rounded-full text-xs">PostgreSQL</span>
                <span className="bg-indigo-800 text-indigo-100 px-3 py-1 rounded-full text-xs">Vibecode</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 animate-fade-in delay-300">
          <a
            href="https://github.com/muhmdfayasek?tab=repositories"
            className="text-indigo-300 px-6 py-3 border border-indigo-600 rounded-lg hover:text-indigo-600 hover:border-indigo-300"
          >View all Projects</a>
        </div>
      </div>
    </section>
  );
}