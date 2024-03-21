import parse from 'html-react-parser';

import twigTemplate from './borders.twig';

const settings = {
  title: 'Base/Borders',
};

export const Borders = {
  name: 'Borders',
  render: (args) => parse(twigTemplate(args)),
};

export default settings;
