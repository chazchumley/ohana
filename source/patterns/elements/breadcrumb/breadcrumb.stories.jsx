import parse from 'html-react-parser';

import twigTemplate from './breadcrumb.twig';
import data from './breadcrumb.yml';
import './breadcrumb.css';

const settings = {
  title: 'Elements/Breadcrumb',
};

export const Breadcrumb = {
  name: 'Breadcrumb',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
