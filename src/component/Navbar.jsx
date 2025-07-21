import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Added Accept 'onHeightChange' prop
export const Navbar = ({ onHeightChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Create a ref for the nav element

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use effect to manage body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function: ensures overflow is reset if component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Use effect to observe navbar height changes using ResizeObserver
  useEffect(() => {
    if (!navRef.current || !onHeightChange) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === navRef.current) {
          onHeightChange(entry.contentRect.height);
        }
      }
    });

    observer.observe(navRef.current);

    // Initial height calculation: call onHeightChange immediately after mount
    onHeightChange(navRef.current.offsetHeight);

    return () => {
      observer.disconnect(); // Cleanup the observer
    };
  }, [onHeightChange]); // Dependency on onHeightChange ensures re-run if callback changes

  // Use Memoized callback for menu toggle
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Use Memoized callback for nav item click to close menu
  const handleNavItemClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav
      ref={navRef} // Attach the ref to the nav element
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
      )}
    >
      <div className='container flex items-center justify-between'>
        <a
          className='text-4xl font-bold text-primary flex items-center'
          href='#hero'
          onClick={() => setIsMenuOpen(false)} // Close menu if logo is clicked
        >
          <span className='relative z-10'>
            <span className='text-grow text-foreground text-4xl'>Pang's </span>{' '}
            Portfolio
          </span>
        </a>

        {/* destop nav */}
        <div className='hidden md:flex space-x-8'>
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className='text-foreground/80 hover:text-primary transition-colors duration-300'
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile nav */}

        <button
          onClick={toggleMenu} // Use memoized toggleMenu
          className='md:hidden p-2 text-foreground z-50'
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
            'transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className='flex flex-col space-y-8 text-xl'>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                onClick={handleNavItemClick} // Use memoized handleNavItemClick
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
