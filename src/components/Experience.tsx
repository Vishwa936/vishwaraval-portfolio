import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: 'AML/KYC Analyst',
    company: 'PwC Australia',
    location: 'Sydney, NSW',
    period: 'Jan 2025 – Present',
    current: true,
    achievements: [
      'Analysed structured and unstructured client datasets across 20–30 cases daily to identify compliance risks and data inconsistencies',
      'Investigated complex company ownership structures and identified Ultimate Beneficial Owners (UBOs) across multi-layered datasets',
      'Applied data validation and quality assurance techniques to improve data accuracy and ensure regulatory compliance standards',
      'Identified anomalies and potential risk indicators through analysis of financial and operational data',
      'Collaborated with cross-functional teams to support risk-based decision-making and maintain audit-ready documentation'
    ]
  },
  {
    title: 'Winter Research Scholar — Machine Learning & Data Analytics',
    company: 'Western Sydney University',
    location: 'Sydney, NSW',
    period: 'Jul 2025 – Nov 2025',
    current: false,
    achievements: [
      'Performed data preprocessing, feature engineering, and analysis on global health datasets (~9,000 records) to extract meaningful insights',
      'Developed and evaluated machine learning models (Decision Tree, Random Forest, Logistic Regression, Neural Networks) using Python (scikit-learn)',
      'Achieved 92.3% model accuracy through systematic model evaluation and performance optimisation',
      'Analysed obesity datasets to identify statistical patterns and predictive indicators for data-driven insights',
      'Built interactive Tableau dashboards with TabPy integration to visualise model outputs and support analytical decision-making'
    ]
  },
  {
    title: 'PASS Facilitator (Peer Assisted Study Sessions)',
    company: 'Western Sydney University',
    location: 'Sydney, NSW',
    period: 'Feb 2024 – Nov 2025',
    current: false,
    achievements: [
      'Led 40+ academic support sessions simplifying complex programming and computer science concepts for students',
      'Mentored students in structured problem-solving approaches, improving analytical thinking and technical confidence',
      'Facilitated collaborative learning environments that enhanced student engagement and academic performance'
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
