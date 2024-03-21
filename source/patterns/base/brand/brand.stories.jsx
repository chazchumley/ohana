import parse from 'html-react-parser';

import twigTemplate from './brand.twig';
import data from './brand.yml';

const settings = {
  title: 'Base/Branding',
};

export const Branding = {
  name: 'Branding',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
