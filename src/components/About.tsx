import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a recent Computer Science graduate from Western Sydney University with specialized expertise in artificial intelligence and machine learning. My passion lies in building intelligent systems that solve complex real-world problems through data-driven approaches and LLM integration.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Currently working at PwC Australia, I drive operational excellence by implementing data validation frameworks and analytical dashboards that improve data quality and enable better decision-making. I combine software engineering best practices with AI/ML expertise to deliver production-ready solutions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I specialize in designing AI systems, integrating large language models, building automated data pipelines, and developing machine learning models using Python, scikit-learn, and cloud technologies. My academic excellence (Merit-Listed Graduate, GPA 6.5/7) and hands-on experience demonstrate my commitment to technical mastery and continuous innovation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Education</h3>
                  <p className="text-slate-700">Bachelor of Computer Science</p>
                  <p className="text-slate-600 text-sm">Western Sydney University</p>
                  <p className="text-blue-600 font-semibold text-sm mt-1">Merit-Listed | GPA: 6.5/7</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Current Role</h3>
                  <p className="text-slate-700">ODC Analyst</p>
                  <p className="text-slate-600 text-sm">PwC Australia</p>
                  <p className="text-cyan-600 font-semibold text-sm mt-1">Jan 2025 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Certifications</h3>
                  <p className="text-slate-700 text-sm">CAPM® (PMI) • AWS Cloud Quest</p>
                  <p className="text-slate-700 text-sm">AWS Academy • Kaggle Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
