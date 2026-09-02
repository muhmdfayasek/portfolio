import { Icon } from "@iconify/react";

// SkillCard
function SkillCard({ icon, title }) {
  return (
    <div className="animate-fade-in delay-200 border border-border flex flex-col justify-center items-center p-5 hover:border-accent-hover hover:bg-surface-hover transition">
      <Icon icon={icon} className="text-5xl" />
      <p className="text-text-tertiary mt-2">{title}</p>
    </div>
  );
}

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
          <SkillCard icon="devicon:javascript" title="JavaScript" />
          <SkillCard icon="devicon:react" title="React" />
          <SkillCard icon="devicon:html5" title="HTML5" />
          <SkillCard icon="devicon:css3" title="CSS3" />
          <SkillCard icon="devicon:linux" title="Linux" />
          <SkillCard icon="devicon:c" title="C" />
          <SkillCard icon="devicon:cplusplus" title="C++" />
          <SkillCard icon="devicon:python" title="Python" />
          <SkillCard icon="devicon:tailwindcss" title="Tailwind" />
          <SkillCard icon="devicon:bootstrap" title="Bootstrap" />
          <SkillCard icon="devicon:figma" title="Figma" />
          <SkillCard icon="devicon-plain:wordpress" title="WordPress" />
          <SkillCard icon="simple-icons:penpot" title="Penpot" />
          <SkillCard icon="devicon:supabase" title="Supabase" />
          <SkillCard icon="selfhst:n8n" title="n8n" />
        </div>
      </div>
    </section>
  );
}