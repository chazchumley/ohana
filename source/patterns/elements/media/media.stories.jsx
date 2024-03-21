import parse from 'html-react-parser';

import twigTemplate from './media.twig';
import data from './media.yml';
import './media.css';

const settings = {
  title: 'Elements/Media',
};

export const Media = {
  name: 'Media',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
