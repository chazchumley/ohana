import parse from 'html-react-parser';

import callout from './callout.twig';
import data from './callout.yml';

const settings = {
  title: 'Components/Callout',
  args: { ...data },
  render: (args) => parse(callout(args)),
};

const Stacked = {
  name: 'Callout',
  args: { ...data },
};

const Horizontal = {
  ...Stacked,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-horizontal',
  },
};

const Reversed = {
  ...Stacked,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-horizontal is-reversed',
  },
};

const Quote = {
  ...Stacked,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-quote',
  },
};

const QuoteHorizontal = {
  ...Stacked,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-quote is-horizontal',
  },
};

const HorizontalReversed = {
  ...Stacked,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-quote is-horizontal is-reversed',
  },
};

export default settings;
export { Stacked, Horizontal, Reversed, Quote, QuoteHorizontal, HorizontalReversed };
