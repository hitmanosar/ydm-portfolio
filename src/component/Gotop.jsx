import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Gotop = () => {


    const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <React.Fragment>
        <div>

       

  <i className= {`fa fa-chevron-up up gotop  fa-xl ${isVisible ? 'visible' : 'hidden'}`}  onClick={scrollToTop}  aria-hidden="true"></i>
</div>
    </React.Fragment>
  )
}

export default Gotop