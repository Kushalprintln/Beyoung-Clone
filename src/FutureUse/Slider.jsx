// NOT USING THIS COMPONENT ANYWHERE
// IMPORTING REACT AND HOOK;
import React, { useState } from 'react';

// SLIDER COMPONENT
function Slider({ style }) {

  // CREATING STATES
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  return (
    <>
      <UncontrolledCarousel
        items={[
          {
            key: 1,
            src: 'https://www.beyoung.in/api/catalog/homepage-5-dec/strip/offfer-strip-desktop9.jpg'
          },
          {
            key: 2,
            src: 'https://www.beyoung.in/api/catalog/homepage-5-dec/strip/desktop/offfer-strip-desktop4.jpg'
          },
          {
            key: 3,
            src: 'https://www.beyoung.in/api/catalog/homepage-5-dec/strip/desktop/offfer-strip-desktop8.jpg'
          }
        ]}
        interval={4000}
        style={style}
        indicators={false}
        controls={false}
      />
    </>
  );
}

export default Slider;
