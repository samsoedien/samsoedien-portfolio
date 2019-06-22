import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import './TypistHeadline.css';

const TypistHeadline = props => {
  const words = [
    ' Industrial',
    ' Interaction',
    ' UX',
    ' Product',
    ' Strategist',
    ' Experience',
    ' Empathy',
  ];
  for (let i = 6; i < 100000; i++) {
    words[i] = words[i - 6];
  }

  return (
    <div className="typist-headline">
      <h2>
        <span className="inline">{'Hello there, I am a '}</span>
        <br />
        <Typist className="typist-headline--removable-word">
          <span> </span>
          {words.map((word, i) => (
            <span key={word} className="inline">
              {word}
              <Typist.Backspace count={word.length} delay={(i + 1) * 1000} />
            </span>
          ))}
        </Typist>
        <span className="inline">{'Designer.'}</span>
      </h2>
    </div>
  );
};

export default TypistHeadline;
