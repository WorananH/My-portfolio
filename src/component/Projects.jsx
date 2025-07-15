import { ProjectsData } from '../data/ProjectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { useState } from 'react';

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  // State to hold the ID of the currently selected project for detail view
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const filteredProjects = ProjectsData.filter(project => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  // Find the selected project for the detail view
  const selectedProject = selectedProjectId
    ? ProjectsData.find(p => p.id === selectedProjectId)
    : null;

  // Function to open the detail view
  const openProjectDetail = id => {
    setSelectedProjectId(id);
    // Optional: Scroll to the detail view or modal if it's inline
  };

  // Function to close the detail view
  const closeProjectDetail = () => {
    setSelectedProjectId(null);
  };

  return (
    <section id='projects' className='py-16 px-4'>
      {' '}
      <div className='container mx-auto max-w-5xl'>
        {' '}
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-glow dark:text-white'>
          Featured <span className='text-primary'>Projects</span>
        </h2>
        <div className='flex justify-center space-x-4 mb-12'>
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('project-management')}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              filter === 'project-management'
                ? 'bg-primary text-primary-foreground'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Project Management
          </button>

          <button
            onClick={() => setFilter('web-development')}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              filter === 'web-development'
                ? 'bg-primary text-primary-foreground'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Web Development
          </button>
        </div>
        {/* Project Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={openProjectDetail}
            />
          ))}
        </div>
        {/* Project Detail Modal/Inline View */}
        {selectedProject && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto'>
            <div className='relative w-full max-w-4xl bg-card dark:bg-gray-800 rounded-lg shadow-xl p-8 my-8'>
              <button
                onClick={closeProjectDetail}
                className='absolute top-4 right-4 text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-2xl font-bold'
              >
                &times;
              </button>
              <ProjectDetail project={selectedProject} />{' '}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
