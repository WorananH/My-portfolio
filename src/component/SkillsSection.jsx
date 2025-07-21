import { useState } from 'react';
//import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

const skills = [
  // Category 1: Project Management Methodologies & Planning
  { name: 'Agile Methodologies', level: 90, category: 'Project Management' },
  { name: 'Scrum Framework', level: 85, category: 'Project Management' },
  { name: 'Waterfall Methodology', level: 75, category: 'Project Management' }, // If you have some exposure
  { name: 'Project Planning', level: 90, category: 'Project Management' },
  { name: 'Scope Management', level: 88, category: 'Project Management' },
  { name: 'Risk Management', level: 80, category: 'Project Management' },
  { name: 'Resource Allocation', level: 85, category: 'Project Management' },
  { name: 'Budget Management', level: 70, category: 'Project Management' }, // Adjust based on your experience
  { name: 'Timeline & Scheduling', level: 90, category: 'Project Management' },
  { name: 'Requirements Gathering', level: 85, category: 'Project Management' },

  // Category 2: Communication, Leadership & Stakeholder Management
  { name: 'Stakeholder Communication', level: 95, category: 'Soft Skills' }, // High because of comms degree
  {
    name: 'Cross-functional Collaboration',
    level: 90,
    category: 'Soft Skills',
  },
  { name: 'Team Leadership', level: 85, category: 'Soft Skills' },
  { name: 'Conflict Resolution', level: 80, category: 'Soft Skills' },
  { name: 'Expectation Management', level: 88, category: 'Soft Skills' },
  { name: 'Presentations & Reporting', level: 90, category: 'Soft Skills' },
  { name: 'Active Listening', level: 92, category: 'Soft Skills' },
  { name: 'Negotiation', level: 75, category: 'Soft Skills' }, // Adjust based on experience

  // Category 3: Project Management Tools & Related (Your technical understanding is a plus here)
  { name: 'Jira / Confluence', level: 70, category: 'PM Tools' }, // If you've used them in courses/simulations
  { name: 'Asana / Trello', level: 85, category: 'PM Tools' },
  { name: 'Microsoft Project / Planner', level: 65, category: 'PM Tools' }, // If you've touched upon it
  { name: 'Google Workspace', level: 90, category: 'PM Tools' }, // Very common, often overlooked
  { name: 'Slack / Microsoft Teams', level: 90, category: 'PM Tools' },
  { name: 'Data Analysis (Basic)', level: 70, category: 'PM Tools' }, // Relevant for project metrics
  { name: 'Version Control (Git)', level: 75, category: 'PM Tools' }, // Important for understanding dev workflows
  { name: 'Cloud Concepts (AWS)', level: 70, category: 'PM Tools' }, // Highlight your general understanding
];

const categories = ['all', 'Project Management', 'Soft Skills', 'PM Tools'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          My <span className='text-primary'>Skills</span>
        </h2>
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className='bg-card p-6 rounded-lg shadow-xs card-hover'
            >
              <div className='text-left mb-4'>
                <h3 className='font-semibold text-lg'>{skill.name}</h3>
              </div>
              <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                <div
                  className='bg-primary h-2 rounded-full origin-left animate-[grow-1.5s_ease-out'
                  style={{ width: skill.level + '%' }}
                />
              </div>
              <div className='text-right mt-1'>
                <span className='text-sm text-muted-foreground'>
                  {skill.level} %{' '}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Section: Certifications & Languages */}
        <div className='bg-primary dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 mt-12'>
          <h3 className='text-2xl font-semibold text-black dark:text-indigo-400 mb-4 flex items-end-safe'>
            <Award className='mr-3 text-3xl text-black' /> Certifications &
            Languages
          </h3>
          <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2'>
            <li>
              <span className='font-semibold'>
                CAPM (Certified Associate in Project Management):
              </span>{' '}
              Pursuing, Exam Planned for [Month, Year]
            </li>
            <li>
              <span className='font-semibold'>ScrumMaster (CSM/PSM I):</span>{' '}
              Preparing for Certification
            </li>
            <li>
              <span className='font-semibold'>Languages:</span> English
              (Fluent), Thai (Native)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
