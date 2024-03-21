import parse from 'html-react-parser';
import { withBackground } from '../../../../.storybook/decorators';

import twigTemplate from './date-badge.twig';
import data from './date-badge.yml';
import './date-badge.css';

const settings = {
  title: 'Elements/Date Badge',
};

export const dateBadge = {
  name: 'Date badge',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const dateBadgeLight = {
  ...dateBadge,
  name: 'Light date badge',
  args: {
    ...data,
    modifier: 'date-badge--light',
  },
  decorators: [withBackground],
};

export default settings;
