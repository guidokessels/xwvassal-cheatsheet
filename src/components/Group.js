import React from 'react';

const ENABLE_COLORS = false;

const Group = ({ title, children, color }) => {
  const sectionStyles = {};
  const headerStyles = {};

  if (ENABLE_COLORS && color) {
    sectionStyles.borderColor = color;
    headerStyles.backgroundColor = color;
  }

  return (
    <section className="group" style={sectionStyles}>
      <h1 style={headerStyles}>{title}</h1>
      {children}
    </section>
  );
};

export default Group;
