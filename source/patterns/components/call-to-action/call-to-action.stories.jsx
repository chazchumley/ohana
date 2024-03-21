import parse from 'html-react-parser';

import twigTemplate from './call-to-action.twig';
import data from './call-to-action.yml';
import './call-to-action.css';

const settings = {
  title: 'Components/Call to action',
};

export const CTA = {
  name: 'Call to action',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
