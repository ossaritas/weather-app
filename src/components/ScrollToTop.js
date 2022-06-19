import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {' '}
      {showTopBtn && (
        <Button
          w="12"
          h="12"
          bg="mc4"
          position="fixed"
          bottom="20"
          right={['16px', '60px']}
          zIndex={1}
          onClick={goToTop}
        >
          {' '}
          <ArrowUpIcon w={8} h={8} color="mc1" />
        </Button>
      )}
    </div>
  );
};
export default ScrollToTop;
