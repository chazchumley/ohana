import parse from 'html-react-parser';

import twigTemplate from './shadows.twig';

const settings = {
  title: 'Base/Shadows',
};

export const Shadows = {
  name: 'Shadows',
  render: (args) => parse(twigTemplate(args)),
};

export default settings;
