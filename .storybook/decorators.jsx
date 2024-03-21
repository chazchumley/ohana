import React from 'react';

const withContainer = (Story) => (
  <div className="container">
    <Story />
  </div>
);

const withProse = (Story) => (
  <div className="prose">
    <Story />
  </div>
);

const withBackground = (Story) => (
  <div style={{ background: '#2874af', padding: '40px' }}>
    <Story />
  </div>
);

export { withContainer, withProse, withBackground };
