import parse from 'html-react-parser';

import twigTemplate from './callout.twig';
import data from './callout.yml';
import './callout.css';

const settings = {
  title: 'Components/Callout',
};

export const Stacked = {
  name: 'Callout',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const Horizontal = {
  ...Stacked,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-horizontal',
  },
};

export const Reversed = {
  ...Stacked,
  name: 'Callout Horizontal Reversed',
  args: {
    ...data,
    modifier: 'is-horizontal is-reversed',
  },
};

export default settings;
