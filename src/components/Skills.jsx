import { Icon } from "@iconify/react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-b-border bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl mb-4 animate-fade-in">My Skills</h2>
          <div className="w-20 h-1 bg-accent-soft mx-auto animate-fade-in delay-150"></div>
          <p className="text-text-tertiary max-w-2xl mx-auto mt-6 animate-fade-in"
          >I've developed expertise in various technologies through
            continuous learning and hands-on projects.</p>
        </div>
        {/* Languages and skills */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:javascript" className="text-5xl" />
            <p className="text-text-tertiary mt-2">JavaScript</p>
          </div>
          
          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:react" className="text-5xl" />
            <p className="text-text-tertiary mt-2">React</p>
          </div>
          
          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:html5" className="text-5xl" />
            <p className="text-text-tertiary mt-2">HTML5</p>
          </div>
          
          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:css3" className="text-5xl" />
            <p className="text-text-tertiary mt-2">CSS3</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:linux" className="text-5xl" />
            <p className="text-text-tertiary mt-2">Linux</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:c" className="text-5xl" />
            <p className="text-text-tertiary mt-2">C</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:cplusplus" className="text-5xl" />
            <p className="text-text-tertiary mt-2">C++</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:python" className="text-5xl" />
            <p className="text-text-tertiary mt-2">Python</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:tailwindcss" className="text-5xl" />
            <p className="text-text-tertiary mt-2">Tailwind</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:bootstrap" className="text-5xl" />
            <p className="text-text-tertiary mt-2">Bootstrap</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:figma" className="text-5xl" />
            <p className="text-text-tertiary mt-2">Figma</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon-plain:wordpress" className="text-5xl" />
            <p className="text-text-tertiary mt-2">WordPress</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="simple-icons:penpot" className="text-5xl" />
            <p className="text-text-tertiary mt-2">Penpot</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="devicon:supabase" className="text-5xl" />
            <p className="text-text-tertiary mt-2">Supabase</p>
          </div>

          <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
            <Icon icon="selfhst:n8n" className="text-5xl" />
            <p className="text-text-tertiary mt-2">n8n</p>
          </div>
        </div>
      </div>
    </section>
  );
}