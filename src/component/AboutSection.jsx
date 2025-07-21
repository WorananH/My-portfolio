import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {''}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              {' '}
              Aspiring Project Manager with a Background in Communication and
              Web Development
            </h3>
            <p className='text-muted-foreground'>
              With 10 years of customer service experience, I’ve built a strong
              understanding of client needs, stakeholder priorities, and
              cross-functional collaboration. Currently completing a degree in
              Communication (graduating November 2026), I’ve developed strategic
              skills in stakeholder engagement and team dynamics — a foundation
              essential to effective project leadership.
            </p>

            <p className='text-muted-foreground'>
              My hands-on expertise in web development and cloud deployments
              empowers me to translate technical complexities into clear,
              actionable insights, ensuring projects move smoothly from concept
              to completion.
            </p>
            <p className='text-muted-foreground'>
              I’m a proactive, adaptable learner with a strong focus on Agile
              methodologies. I thrive in fast-paced environments where clear
              communication and thoughtful planning drive real-world results.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center '>
              <a href='#contact' className='cosmic-button'>
                Get In Touch
              </a>
              <a
                href=''
                className='px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
              >
                Download CV
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-xl'>Project Management</h4>
                  <p className='text-muted-foreground'>
                    Driving projects from concept to completion through
                    strategic planning, organized execution, and proactive
                    problem-solving.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-xl'>
                    Strategic Communication & Team Leadership
                  </h4>
                  <p className='text-muted-foreground'>
                    Building alignment and fostering collaboration through clear
                    communication and empathetic leadership across diverse
                    teams.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-xl'>Technical Insight</h4>
                  <p className='text-muted-foreground'>
                    Leveraging a strong grasp of development and deployment
                    lifecycles to ensure seamless project delivery and
                    cross-functional understanding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
