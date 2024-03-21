import parse from 'html-react-parser';

import twigTemplate from './list.twig';
import data from './list.yml';

const settings = {
  title: 'Elements/List',
};

export const List = {
  name: 'List',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
