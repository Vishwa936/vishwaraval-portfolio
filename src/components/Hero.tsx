import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg">
            VR
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 animate-fade-in">
          Vishwa Raval
        </h1>

        <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
          AI & Machine Learning Engineer
        </p>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building intelligent AI systems, integrating LLMs, and developing data-driven solutions with Python and Cloud Technologies
        </p>

        <div className="flex items-center justify-center gap-2 text-slate-600 mb-8">
          <MapPin className="w-5 h-5" />
          <span>Sydney, NSW, Australia</span>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <a
            href="https://github.com/Vishwa936"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all hover:scale-105 shadow-md"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/vishwa-raval-063938216"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href="mailto:vishwaraval369@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all hover:scale-105 shadow-md"
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </div>

        <a
          href="#about"
          className="inline-block text-slate-600 hover:text-blue-600 transition-colors animate-bounce"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
