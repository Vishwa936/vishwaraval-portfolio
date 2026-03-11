import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vishwa Raval
            </h3>
            <p className="text-slate-400 leading-relaxed">
              AI-focused Software Engineer passionate about building intelligent systems and data-driven solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-400 hover:text-blue-400 transition-colors">
                About Me
              </a>
              <a href="#skills" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#experience" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Experience
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Vishwa936"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwaraval-063938216"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vishwaraval369@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Sydney, NSW, Australia
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Vishwa Raval © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
