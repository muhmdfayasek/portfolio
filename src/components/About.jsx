export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="font-bold text-3xl mb-4 animate-fade-in">About me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto animation-fade-in delay-150"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 animate-fade-in delay-200">
            <div className="text-center">
              <img src="src/assets/profile.webp" alt="Profile" className="w-50 h-50 mt-10 rounded-full shadow-xl shadow-slate-950 border-indigo-300 border-4"/>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-2xl mb-4">Wait, Who's This Guy?</h3>
            <p className="text-gray-300 mb-6">
              I’m Muhammed Fayas EK, a BCA student and developer who enjoys turning ideas into real, working projects. I like learning by building, experimenting with new technologies, and occasionally creating problems just so I can figure out how to fix them. I’m also interested in open source and enjoy exploring, contributing to, and learning from the work of developers around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}