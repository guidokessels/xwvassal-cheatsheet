import React from 'react';
import Icon from './Icon';
import KeyCombo from './KeyCombo';

const Command = ({ text, maneuver, keys }) => {
  return (
    <div className="command">
      <span className="description">
        {text} {maneuver && <Icon name={maneuver} />}
      </span>
      <KeyCombo>{keys}</KeyCombo>
    </div>
  );
};

export default Command;
