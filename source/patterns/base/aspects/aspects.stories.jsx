import parse from 'html-react-parser';

import twigTemplate from './aspects.twig';

const settings = {
  title: 'Base/Aspect ratios',
};

export const Aspects = {
  name: 'Aspect ratios',
  render: (args) => parse(twigTemplate(args)),
};

export default settings;
