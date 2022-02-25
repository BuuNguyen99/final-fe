import React from 'react';

function Description({ content }) {
  return (
    <div className="description text-center">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Description;
