import parse from 'html-react-parser';

import twigTemplate from './copyright.twig';
import data from './copyright.yml';
import './copyright.css';

const settings = {
  title: 'Elements/Copyright',
};

export const Copyright = {
  name: 'Copyright',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
