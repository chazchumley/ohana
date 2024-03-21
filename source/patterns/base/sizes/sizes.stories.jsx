import parse from 'html-react-parser';

import twigTemplate from './sizes.twig';
import data from './sizes.yml';

const settings = {
  title: 'Base/Sizes',
  args: { ...data },
};

export const Sizes = {
  name: 'Sizes',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
