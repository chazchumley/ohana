import parse from 'html-react-parser';

import twigTemplate from './video.twig';
import data from './video.yml';

const settings = {
  title: 'Elements/Video',
};

export const Video = {
  name: 'Video',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
