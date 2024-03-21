import parse from 'html-react-parser';

import twigTemplate from './typography.twig';

const settings = {
  title: 'Base/Typography',
};

export const Typography = {
  name: 'Typography',
  render: (args) => parse(twigTemplate(args)),
};

export default settings;
