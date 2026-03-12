import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <a
              href="mailto:vishwaraval369@gmail.com"
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Send Email</h3>
                  <p className="text-slate-600 text-sm">Click to send an email</p>
                </div>
              </div>
            </a>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-700">Sydney, NSW, Australia</p>
                  <p className="text-slate-600 text-sm mt-1">Full Work Rights | Open to Relocation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-xl text-white shadow-lg">
              <h3 className="font-bold text-2xl mb-4">Let's Connect!</h3>
              <p className="mb-6 leading-relaxed opacity-90">
                I'm always interested in discussing new opportunities, innovative projects, or potential collaborations in AI and software development.
              </p>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/vishwa-raval-063938216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/Vishwa936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub Portfolio</span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Resume Available Upon Request</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-slate-900 mb-2">Current Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-700">Available for opportunities</span>
              </div>
              <p className="text-slate-600 text-sm mt-2">
                Open to roles in AI, Machine Learning, Data Engineering, and Backend Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
