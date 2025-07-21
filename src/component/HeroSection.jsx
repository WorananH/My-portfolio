import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden'
    >
      {/* Content over video - Assuming your text and image are here based on the screenshot */}
      <div className='relative z-10 flex flex-col items-center text-primary text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Welcome to my portfolio!
        </h1>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>
          I'm Pang Hernandez
        </h2>
        <p className='text-lg md:text-xl max-w-2xl mb-8'>
          As a CAPM-aligned Communication graduate, I craft web solutions that
          seamlessly connect technical development with non-technical business
          goals, fostering unified teams and impactful projects
        </p>

        <video
          autoPlay
          loop
          muted
          playsInline
          // Video now covers 90% of viewport height
          //className='contianer inset-0 w-full h-full object-cover z-0 opacity-50' // Changed h-full to h-[90vh]
          className='w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg mt-20'
        >
          <source src='/projects/post.mp4' type='video/mp4' />
        </video>
      </div>

      {/* Scroll Arrow */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20'>
        <span className='text-sm text-white mb-2'> Scroll </span>
        <ArrowDown className='h-5 w-5 text-primary' />
      </div>
    </section>
  );
};
