import parse from 'html-react-parser';

import twigTemplate from './date.twig';
import data from './date.yml';

const settings = {
  title: 'Elements/Date',
};

// Plain text title story.
export const Date = {
  name: 'Date',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
