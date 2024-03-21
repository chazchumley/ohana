import parse from 'html-react-parser';

import twigTemplate from './byline.twig';
import data from './byline.yml';
import './byline.css';

const settings = {
  title: 'Elements/Byline',
};

export const Byline = {
  name: 'Byline',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
