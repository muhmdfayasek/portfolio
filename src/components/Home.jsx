import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particleOptions from "../lib/particle";
import { Icon } from "@iconify/react";


const initParticles = async (engine) => {
  await loadSlim(engine);
};

export default function Home() {
  return (
    <ParticlesProvider init={initParticles}>
      <section className="relative min-h-screen flex items-center justify-center landscape:pt-14">
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="absolute inset-0 -z-10"
        />
        {/* {Hero section}*/}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="font-bold text-white text-5xl md:text-6xl mb-4 name-heading">Muhammed Fayas EK</h1>
              <h2 className="text-indigo-300 text-xl md:text-2xl mb-8 sub-heading"> Fontend Developer | Open Source Enthuasist | n8n Automation</h2>
              <p className="text-lg max-w-2xl mx-auto mb-8 text-shadow-2xs text-shadow-slate-700 text-gray-200">
                Living in a world of bugs, ideas, and endless curiosity.<br/>
                Building things I probably could have just left alone.
              </p>
              <div className="flex justify-center gap-8 mt-4 pt-2">
                <a
                  href="#contact"
                  class="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition shadow-lg"
                >Let's Talk</a>
                <a
                  href="#projects"
                  class="px-6 py-3 border border-indigo-300 text-indigo-400 rounded-lg hover:bg-indigo-50 transition"
                >View Projects</a>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-5 landscape:hidden left-0 right-0 text-center">
          <a href="#about" class="inline-block animate-bounce">
            <Icon icon="akar-icons:chevron-down" className="text-2xl"/>
          </a>
        </div>
      </section>
    </ParticlesProvider>
  );
}
