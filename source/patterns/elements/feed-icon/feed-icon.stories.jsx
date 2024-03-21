import parse from 'html-react-parser';

import twigTemplate from './feed-icon.twig';
import data from './feed-icon.yml';
import './feed-icon.css';

const settings = {
  title: 'Elements/Feed icon',
};

export const feedIcon = {
  name: 'Feed icon',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
