import { Brain, Code, Database, Cloud, BarChart3, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      color: 'blue',
      skills: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Natural Language Processing', 'LLM Integration', 'Prompt Engineering', 'Model Evaluation', 'Data Preprocessing', 'Feature Engineering']
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'cyan',
      skills: ['Python', 'SQL', 'Java', 'JavaScript', 'C++', 'C', 'R']
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'slate',
      skills: ['Django', 'REST APIs', 'Node.js', 'Authentication', 'CRUD Operations', 'Database Design']
    },
    {
      title: 'Data Analytics & Visualization',
      icon: BarChart3,
      color: 'cyan',
      skills: ['Data Analysis', 'Data Visualization', 'Tableau', 'Power BI', 'Microsoft Excel', 'Data Pipelines', 'Analytical Dashboards']
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      color: 'blue',
      skills: ['AWS (EC2, S3, Lambda)', 'Git', 'Linux', 'Jira', 'Agile / Scrum']
    },
    {
      title: 'Core Competencies',
      icon: Wrench,
      color: 'slate',
      skills: ['AI Systems Design', 'LLM Integration', 'Data-Driven Solutions', 'Problem Solving', 'Software Engineering Practices', 'Collaborative Development']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-50 to-cyan-50',
        border: 'border-blue-100',
        icon: 'bg-blue-600',
        badge: 'bg-blue-100 text-blue-700'
      },
      cyan: {
        bg: 'from-cyan-50 to-blue-50',
        border: 'border-cyan-100',
        icon: 'bg-cyan-600',
        badge: 'bg-cyan-100 text-cyan-700'
      },
      slate: {
        bg: 'from-slate-50 to-blue-50',
        border: 'border-slate-200',
        icon: 'bg-slate-800',
        badge: 'bg-slate-100 text-slate-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building intelligent, scalable, and data-driven applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} p-6 rounded-xl border ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 ${colors.badge} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
