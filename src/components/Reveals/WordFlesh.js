import React from 'react';

import Fade from 'react-reveal/Fade';

const WordFlesh = () => {
  return (
    <h4 style={{color: 'black', fontSize: 24}}>
      <Fade left>
         <span>And the word </span>
      </Fade>
      <Fade right>
         <span>became flesh</span>
      </Fade>
    </h4>
  );
};

export default WordFlesh;

