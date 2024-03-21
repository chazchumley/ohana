import parse from 'html-react-parser';

import twigTemplate from './quote.twig';
import data from './quote.yml';
import './quote.css';

const settings = {
  title: 'Components/Quote',
};

export const Quote = {
  name: 'Quote',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
