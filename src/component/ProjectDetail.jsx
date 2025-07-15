import React from 'react';
import { ExternalLink, Github, Home } from 'lucide-react';

export const ProjectDetail = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  const { title, role, image, technologies, details } = project;

  // Define a common block style for reusability
  const detailBlockClasses =
    'bg-card-foreground dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6';
  const headingClasses =
    'text-2xl font-semibold text-primary dark:text-primary-foreground mb-3';
  const paragraphClasses = 'text-foreground dark:text-gray-200 leading-relaxed';
  const listClasses =
    'list-disc list-inside text-foreground dark:text-gray-200 space-y-2 leading-relaxed';

  return (
    <div className='max-w-4xl mx-auto'>
      <img
        src={image}
        alt={title}
        className='w-full h-80 object-cover rounded-lg mb-8'
      />
      <h2 className='text-4xl font-bold text-foreground dark:text-foreground mb-2'>
        {title}
      </h2>
      <p className='text-primary dark:text-primary font-semibold text-xl mb-6'>
        {role}
      </p>
      <div className='flex flex-wrap gap-2 mb-6'>
        {technologies.map((tech, key) => (
          <span
            key={key}
            className='bg-background dark:bg-gray-700 text-foreground dark:text-gray-300 text-sm px-4 py-2 rounded-full'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Problem/Opportunity Block */}
      {details.problem && (
        <div className={detailBlockClasses}>
          {' '}
          {/* Added block styling */}
          <h3 className={headingClasses}>Problem/Opportunity</h3>
          <p className={paragraphClasses}>{details.problem}</p>
        </div>
      )}

      {/* Objective/Goal Block */}
      {details.objective && (
        <div className={detailBlockClasses}>
          {' '}
          {/* Added block styling */}
          <h3 className={headingClasses}>Objective/Goal</h3>
          <p className={paragraphClasses}>{details.objective}</p>
        </div>
      )}

      {/* My Contributions Block */}
      {details.contributions && (
        <div className={detailBlockClasses}>
          {' '}
          {/* Added block styling */}
          <h3 className={headingClasses}>My Contributions</h3>
          <ul className={listClasses}>
            {details.contributions.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Outcome & Results Block */}
      {details.outcome && (
        <div className={detailBlockClasses}>
          {' '}
          {/* Added block styling */}
          <h3 className={headingClasses}>Outcome & Results</h3>
          <p className={paragraphClasses}>{details.outcome}</p>
        </div>
      )}

      {/* Lessons Learned Block */}
      {details.lessonsLearned && (
        <div className={detailBlockClasses}>
          {' '}
          {/* Added block styling */}
          <h3 className={headingClasses}>Lessons Learned</h3>
          <p className={paragraphClasses}>{details.lessonsLearned}</p>
        </div>
      )}

      {details.links && details.links.length > 0 && (
        <div className='mt-8'>
          <h3 className='text-2xl font-semibold text-foreground dark:text-foreground mb-4'>
            Links
          </h3>
          <div className='flex flex-wrap gap-4'>
            {details.links.map((link, key) => (
              <a
                key={key}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center bg-primary hover:bg-accent text-primary-foreground font-medium py-2 px-4 rounded-full transition duration-300'
              >
                {link.name.includes('GitHub') ? (
                  <Github size={20} className='mr-2' />
                ) : (
                  <ExternalLink size={20} className='mr-2' />
                )}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* New "Back to Home" button with Home icon */}
      <div className='mt-8 text-center'>
        <button
          onClick={onClose}
          className='inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-medium py-2 px-6 rounded-full transition duration-300'
        >
          <Home size={20} className='mr-2' />
          Back to Projects
        </button>
      </div>
    </div>
  );
};
