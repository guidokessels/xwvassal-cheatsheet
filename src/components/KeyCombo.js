import React from 'react';
import Key from './Key';

const KeyCombo = ({ children }) => {
  const keys = children.split(' ');

  return (
    <span className="keycombo">
      {keys.reduce((a, value, i) => {
        const child = <Key key={value}>{value}</Key>;

        if (i > 0) {
          return [...a, ' + ', child];
        }

        return [...a, child];
      }, [])}
    </span>
  );
};

export default KeyCombo;
