import React from 'react';

export const ProjectCard = ({ project, onSelectProject }) => {
  const { id, title, role, image, technologies, summary, comingSoon } = project;

  return (
    <div className='bg-card dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <div className='p-6'>
        <h3 className='text-2xl font-bold text-foreground dark:text-foreground mb-2'>
          {title}
        </h3>
        <p className='text-primary dark:text-primary font-semibold mb-3'>
          {role}
        </p>

        {comingSoon ? (
          <p className='text-foreground dark:text-gray-300 text-sm mb-4'>
            Coming soon
          </p>
        ) : (
          <p className='text-foreground dark:text-gray-300 text-sm mb-4'>
            {summary}
          </p>
        )}

        <div className='flex flex-wrap gap-2 mb-4'>
          {technologies.map((tech, key) => (
            <span
              key={key}
              className='bg-background dark:bg-gray-700 text-foreground dark:text-gray-300 text-xs px-3 py-1 rounded-full'
            >
              {tech}
            </span>
          ))}
        </div>

        {!comingSoon && (
          <button
            onClick={() => onSelectProject(id)}
            className='inline-block bg-primary hover:bg-accent text-primary-foreground text-sm font-medium py-2 px-4 rounded-full transition duration-300'
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};
