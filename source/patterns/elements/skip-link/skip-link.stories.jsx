import parse from 'html-react-parser';

import twigTemplate from './skip-link.twig';
import './skip-link.css';

const settings = {
  title: 'Elements/Skip link',
};

export const skipLink = {
  name: 'Skip link',
  render: (args) => parse(twigTemplate(args)),
};

export default settings;
