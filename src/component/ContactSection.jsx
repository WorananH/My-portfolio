import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export const ContactSection = () => {
  const { toast } = useToast();
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes to update state
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault(); // Prevent default form submission behavior

    setIsSubmitting(true); // Set submitting state to true

    try {
      // This is the endpoint your Lambda function is exposed through
      const API_ENDPOINT =
        'https://0jq9syvkyh.execute-api.us-west-1.amazonaws.com/default/contactFormSender';

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the response status is 200-299 (success)
        toast({
          title: 'Message sent!',
          description: "Thank you for your message. I'll get back to you soon.",
        });
        console.log("Thank you for your message. I'll get back to you soon.");
        // Clear the form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle HTTP errors (e.g., 400, 500 status codes from API)
        const errorData = await response.json(); // Attempt to parse error message from Lambda
        toast({
          title: 'Error sending message',
          description:
            errorData.message || 'Something went wrong. Please try again.', // Use Lambda's message or a generic one
          variant: 'destructive',
        });
      }
    } catch (error) {
      // Handle network errors (e.g., no internet connection, unreachable API)
      console.error('Submission error:', error);
      toast({
        title: 'Network Error',
        description:
          'Could not connect to the server. Please check your internet connection.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'> Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Whether you have an exciting project in mind or a potential
          partnership, I'd love to hear from you. Let's create something
          impactful together.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Information Column */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'> Email</h4>
                  <a
                    href='mailto:worananher@gmail.com'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    worananher@gmail.com
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'> Phone</h4>
                  <a
                    href='tel:+11234567890'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'> Location</h4>
                  <span className='text-muted-foreground'>
                    {' '}
                    Los Angeles, CA, U.S.A
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='pt-8'>
              <h4 className='font-medium mb-4'> Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {' '}
                  <Linkedin />
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <Twitter />
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <Instagram />
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* Send a Message Form Column */}
          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                  placeholder='Your Name...'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2'
                >
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                  placeholder='Your Email'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2'
                >
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2',
                  isSubmitting && 'opacity-70 cursor-not-allowed'
                )}
              >
                {isSubmitting ? (
                  <>
                    <Send size={16} className='animate-pulse' />{' '}
                    {/* Added a subtle animation */}
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
