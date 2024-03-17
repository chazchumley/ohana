import parse from 'html-react-parser';

import person from './person-directory.twig';
import data from './person-directory.yml';

const settings = {
  title: 'Collections/Person directory',
  args: { ...data },
  render: (args) => parse(person(args)),
};

const Grid = {
  name: 'Person directory',
  args: { ...data },
};

const List = {
  name: 'Person directory',
  ...Grid,
  args: {
    ...data,
    modifier: 'is-list',
  },
};

export default settings;
export { Grid, List };
