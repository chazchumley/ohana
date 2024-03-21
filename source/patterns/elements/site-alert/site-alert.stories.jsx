import parse from 'html-react-parser';

import twigTemplate from './site-alert.twig';
import data from './site-alert.yml';

const settings = {
  title: 'Elements/Site alert',
};

export const SiteAlert = {
  name: 'Site alert',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data},
};

export default settings;
