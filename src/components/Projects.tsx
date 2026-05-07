import { Brain, FileText, TrendingUp, Globe, Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SkillSync AI',
      description: 'A Python-based AI application that analyzes resumes and job descriptions using Large Language Models and natural language processing to evaluate skill alignment and generate match scores.',
      icon: Brain,
      type: 'AI Project',
      technologies: ['Python', 'pandas', 'OpenAI API', 'Grok API', 'LLM', 'scikit-learn', 'NLP'],
      features: [
        'Resume and job description text analysis',
        'LLM-powered skill extraction',
        'AI-generated match scoring',
        'Skill comparison and recommendation'
      ],
      links: [
        { label: 'Live Demo', url: 'https://skillsync-ai-analyzer.streamlit.app/' },
        { label: 'View Code', url: 'https://github.com/Vishwa936/SkillSync-AI' }
      ],
      color: 'blue'
    },
    {
      title: 'AI Support Ticket Assistant',
      description: 'An intelligent ticket classification system designed to automatically categorize technical support requests using machine learning and natural language processing techniques.',
      icon: FileText,
      type: 'Concept Project',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Classification'],
      features: [
        'Automatic ticket classification',
        'Priority detection',
        'Support workflow automation'
      ],
      color: 'cyan'
    },
    {
      title: 'AI Job Market Analyzer',
      description: 'A Python-based analytics tool designed to analyze technology job postings and identify trends in in-demand technical skills using data analysis and visualization techniques.',
      icon: TrendingUp,
      type: 'Concept Project',
      technologies: ['Python', 'Data Analysis', 'Visualization', 'pandas'],
      features: [
        'Job market data analysis',
        'Skill demand trend detection',
        'Visualization dashboards'
      ],
      color: 'slate'
    },
    {
      title: 'Global Travelar',
      description: 'A full-stack cloud-based mobile and backend application developed for a client, integrating modern backend technologies with mobile-first architecture.',
      icon: Globe,
      type: 'Client Project',
      technologies: ['React Native', 'PHP', 'MySQL', 'Node.js', 'Git', 'Cloud', 'Unity'],
      features: [
        'Mobile-first architecture',
        'Backend API development',
        'Database integration',
        'Cloud deployment',
        'Unity integration'
      ],
      color: 'blue'
    },
    {
      title: 'Django Web Application',
      description: 'A backend web application developed using Python and Django implementing server-side logic, authentication, and database integration using agile development methodologies.',
      icon: Code,
      type: 'Backend Project',
      technologies: ['Python', 'Django', 'Database Design', 'Authentication', 'Agile', 'Jira'],
      features: [
        'Server-side logic implementation',
        'Database integration and design',
        'User authentication system',
        'CRUD operations',
        'Sprint-based development',
        'Task tracking with Jira'
      ],
      links: [
        { label: 'View Code', url: 'https://github.com/Vishwa936/trail-management-system' }
      ],
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-50 to-cyan-50',
        border: 'border-blue-100',
        icon: 'bg-blue-600',
        badge: 'bg-blue-600 text-white',
        tech: 'bg-blue-100 text-blue-700'
      },
      cyan: {
        bg: 'from-cyan-50 to-blue-50',
        border: 'border-cyan-100',
        icon: 'bg-cyan-600',
        badge: 'bg-cyan-600 text-white',
        tech: 'bg-cyan-100 text-cyan-700'
      },
      slate: {
        bg: 'from-slate-50 to-blue-50',
        border: 'border-slate-200',
        icon: 'bg-slate-800',
        badge: 'bg-slate-800 text-white',
        tech: 'bg-slate-100 text-slate-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          A showcase of AI, machine learning, and full-stack development projects demonstrating technical expertise and problem-solving abilities
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const Icon = project.icon;

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} p-6 rounded-xl border ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl">{project.title}</h3>
                      <span className={`inline-block px-3 py-1 ${colors.badge} rounded-full text-xs font-semibold mt-1`}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-2 text-slate-700 text-sm">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 ${colors.tech} rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105 ${colors.badge}`}
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Vishwa936"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all hover:scale-105 shadow-lg font-semibold"
          >
            View More on GitHub
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
