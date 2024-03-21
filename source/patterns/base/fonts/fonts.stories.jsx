import parse from 'html-react-parser';

import twigTemplate from './fonts.twig';
import data from './fonts.yml';

const settings = {
  title: 'Base/Fonts',
};

export const Fonts = {
  name: 'Fonts',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
