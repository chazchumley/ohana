import parse from 'html-react-parser';

import twigTemplate from './person-directory.twig';
import data from './person-directory.yml';
import './person-directory.css';

const settings = {
  title: 'Collections/Person directory',
};

export const GridDisplay = {
  name: 'Person directory - Grid',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const ListDisplay = {
  ...GridDisplay,
  name: 'Person directory - List',
  args: {
    ...data,
    modifier: 'is-list',
  },
};

export default settings;
