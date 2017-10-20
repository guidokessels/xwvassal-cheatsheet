import React from 'react';
import 'xwing-miniatures-font/dist/xwing-miniatures.css';

const Icon = ({ name, ship }) => {
  let classes = [];

  if (name) {
    classes = classes.concat([
      'xwing-miniatures-font',
      `xwing-miniatures-font-${name.toLowerCase()}`,
    ]);
  } else if (ship) {
    classes = classes.concat([
      'xwing-miniatures-ship',
      `xwing-miniatures-ship-${ship.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
    ]);
  }

  return <i className={classes.join(' ')} title={name || ship} />;
};

export default Icon;
