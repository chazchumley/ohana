import parse from 'html-react-parser';
import { withProse } from '../../../../.storybook/decorators';

import twigTemplate from './title.twig';
import data from './title.yml';

const settings = {
  title: 'Elements/Title',
  decorators: [withProse],
};

export const Title = {
  name: 'Title',
  render: (args) => parse(twigTemplate(args)),
  args: {
    ...data,
    title: {
      level: 1,
      modifier: '',
      text: 'A vibrant, supportive culture is essential to advancing our mission to heal humankind.',
    },
  },
};

// Linked title story.
export const Linked = {
  name: 'Title as a link',
  ...Title,
  args: {
    ...data,
    title: {
      level: 1,
      modifier: '',
      text: 'A vibrant, supportive culture is essential to advancing our mission to heal humankind.',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export default settings;
