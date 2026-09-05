// ToolChip
function ToolChip({ label }) {
  return (
    <span className="bg-accent-muted text-text-secondary px-3 py-1 rounded-full text-xs"
    >{label}</span>
  );
}

// ProjectCard
function ProjectCard(props) {
  return (
    <div className="project-card rounded-xl overflow-hidden animate-fade-in delay-200 shadow-lg bg-surface-elevated">
      <div className="relative">
        <img src={props.image} alt="project-image" className="w-full h-full object-cover" />
        
        <div className="project-overlay absolute inset-0 bg-accent/90 flex items-center justify-center opacity-0 transition duration-300">
          <a href={props.link} className="text-text-primary font-ibm-plex bg-accent-soft px-4 py-2 border border-text-primary rounded-lg hover:bg-white hover:text-text-inverse">View Details</a>  
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
        <p className="text-gray-300 font-fira mb-4">{props.description}</p>
        <div className="flex flex-wrap gap-2">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-b-border bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-15">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Projects</h2>
          <div className="w-20 h-1 bg-accent-soft mx-auto animate-fade-in delay-100"></div>
          <p className="text-text-tertiary font-fira max-w-2xl mx-auto mt-6 animate-fade-in delay-200">
            Here are some of my recent projects showcasing my diverse skill set.
          </p>
        </div>
        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <ProjectCard
            image="/qeydrop.webp"
            link="https://github.com/muhmdfayasek/QeyDrop"
            title="QeyDrop"
            description="A vibecoded platform for content creators to share links with audience"
          >
            <ToolChip label="React" />
            <ToolChip label="Supabase" />
            <ToolChip label="PostgreSQL" />
            <ToolChip label="Vibecode" />
          </ProjectCard>
          
        </div>
        <div className="text-center mt-20 animate-fade-in delay-300">
          <a
            href="https://github.com/muhmdfayasek?tab=repositories"
            className="text-text-primary font-ibm-plex px-6 py-3 border border-text-primary rounded-lg hover:text-text-inverse hover:bg-text-primary hover:border-text-primary"
          >View all Projects</a>
        </div>
      </div>
    </section>
  );
}