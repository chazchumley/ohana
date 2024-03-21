import parse from 'html-react-parser';

import twigTemplate from './colors.twig';
import data from './colors.yml';

const settings = {
  title: 'Base/Colors',
};

export const Colors = {
  name: 'Colors',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
