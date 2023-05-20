import React from 'react';
import './Section.css';
function Section({ title, children }) {
  return (
    <div>
      {title && <h2 className="Statistics__title"> {title} </h2>}
      {children}
    </div>
  );
}
export default Section;
