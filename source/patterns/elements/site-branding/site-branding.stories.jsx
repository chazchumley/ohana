import parse from 'html-react-parser';

import twigTemplate from './site-branding.twig';
import data from './site-branding.yml';

const settings = {
  title: 'Elements/Site branding',
};

export const siteBranding = {
  name: 'Site branding',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const NoImage = {
  ...siteBranding,
  name: 'Site branding without image',
  args: {
    ...data,
    logo: '',
    site_name: 'Ohana',
  },
};

export default settings;
