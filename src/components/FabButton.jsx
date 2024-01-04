import { useState, useEffect } from 'react';
import '../styles/FabButton.css';
import { ExpandLess } from '@mui/icons-material';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <div className={`scroll-to-top ${isVisible ? 'active' : ''}`}>
      {isVisible && (
        <div className='icon' onClick={scrollToTop}>
          <ExpandLess />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
