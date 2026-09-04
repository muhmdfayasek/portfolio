import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particleOptions from "../lib/particle";
import { Icon } from "@iconify/react";

const initParticles = async (engine) => {
  await loadSlim(engine);
};

export default function Home() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center landscape:pt-14 border-b border-b-border"
      id="home"
    >
      {/* Particles background */}
      <ParticlesProvider init={initParticles}>
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="absolute inset-0 -z-10"
        />
        {/* {Hero section}*/}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="font-bold font-rock-salt text-text-primary text-5xl md:text-6xl mb-8">
                Muhammed Fayas EK
              </h1>
              <h2 className="text-accent-primary text-xl md:text-2xl mb-8">
                {" "}
                Fontend Developer | Open Source Enthuasist | n8n Automation
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-8 text-shadow-2xs text-shadow-border text-text-secondary font-fira">
                Living in a world of bugs, ideas, and endless curiosity.
                <br />
                Building things I probably could have just left alone.
              </p>
              <div className="flex justify-center gap-8 mt-4 pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gray-500 text-text-primary rounded-lg hover:bg-text-primary hover:text-text-inverse transition shadow-lg"
                >
                  Let's Talk
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-text-primary rounded-lg hover:bg-text-primary hover:text-text-inverse transition"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center chevron-down">
          <a href="#about" className="inline-block animate-bounce">
            <Icon icon="akar-icons:chevron-down" className="text-2xl" />
          </a>
        </div>
      </ParticlesProvider>
    </section>
  );
}
