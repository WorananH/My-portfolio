import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden'
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        // Video now covers 90% of viewport height
        className='contianer inset-0 w-[90vh] h-[90vh] object-cover z-0 opacity-50' // Changed h-full to h-[90vh]
      >
        <source src='/projects/post.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Scroll Arrow */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20'>
        <span className='text-sm text-white mb-2'> Scroll </span>
        <ArrowDown className='h-5 w-5 text-primary' />
      </div>
    </section>
  );
};

// import { ArrowDown } from 'lucide-react';

// export const HeroSection = () => {
//   return (
//     <section
//       id='hero'
//       className='relative min-h-screen flex flex-col items-center justify-center px-4'
//     >
//       <div className='container max-w-4xl mx-auto text-center z-10'>
//         <div className='space-y-6'>
//           <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
//             <span className='opacity-0 animate-fade-in'>Hello!</span>
//             <span className='text-primary opacity-0 animate-fade-in-delay-1'>
//               I'm Pang
//             </span>
//             <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>
//               Hernandez
//             </span>
//           </h1>

//           <p className='mb-4 text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 '>
//             I'm a Communication student graduating in November 2026, pursuing
//             Project Management. I'm preparing for{' '}
//             <span className='font-semibold text-indigo-600 dark:text-indigo-400'>
//               CAPM certification
//             </span>{' '}
//             exploring Agile, and bring hands-on web development experience to
//             bridge technical and non-technical teams.
//           </p>

//           <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
//             <a href='#projects' className='cosmic-button '>
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
//         <span className='text-sm text-muted-foreground mb-2'> Scroll </span>
//         <ArrowDown className='h-5 w-5 text-primary' />
//       </div>
//     </section>
//   );
// };
