import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Operational Delivery Centre (ODC) Analyst',
      company: 'PwC Australia',
      location: 'Sydney, NSW',
      period: 'Jan 2025 – Present',
      current: true,
      achievements: [
        'Improved data quality and operational reliability by performing comprehensive validation and quality checks on client datasets, reducing reporting errors by enforcing consistency standards',
        'Enhanced operational reporting workflows using Microsoft Excel and enterprise systems, enabling faster data-driven insights for stakeholders',
        'Maintained accurate structured documentation and compliance standards, ensuring seamless knowledge transfer and operational continuity across teams',
        'Collaborated with cross-functional teams to standardize operational deliverables, increasing process reliability and team efficiency'
      ]
    },
    {
      title: 'Winter Research Scholar — Machine Learning & Data Automation',
      company: 'Western Sydney University',
      location: 'Sydney, NSW',
      period: 'Jul 2025 – Nov 2025',
      current: false,
      achievements: [
        'Designed and developed automated Python data pipelines that accelerated large-scale dataset processing, reducing manual processing time and improving data consistency across global health datasets',
        'Implemented and evaluated multiple machine learning models using scikit-learn, achieving statistically significant predictions on complex health datasets',
        'Analyzed global obesity datasets to identify critical statistical patterns and predictive insights, contributing to evidence-based research findings',
        'Built production-ready, modular Python code with comprehensive documentation, establishing best practices for reproducible research workflows'
      ]
    },
    {
      title: 'PASS Facilitator (Peer Assisted Study Sessions)',
      company: 'Western Sydney University',
      location: 'Sydney, NSW',
      period: 'Feb 2024 – Nov 2025',
      current: false,
      achievements: [
        'Led 40+ academic support sessions that significantly improved student understanding of complex programming and computer science concepts',
        'Mentored students through structured problem-solving methodologies, building confidence and fostering deeper technical understanding',
        'Fostered collaborative learning environment that improved student academic performance and confidence in technical coursework'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Professional Experience
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Hands-on experience in data analytics, machine learning research, and educational leadership
        </p>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-cyan-600 to-slate-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2"></div>

                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ml-8 md:ml-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-xl mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                        <p className="text-slate-600 text-sm">{exp.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold ml-2">
                          Current
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex gap-2 text-slate-700">
                          <span className="text-blue-600 mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
