import parse from 'html-react-parser';

import twigTemplate from './media-quote.twig';
import data from './media-quote.yml';
import './media-quote.css';

const settings = {
  title: 'Components/Media quote',
};

export const Quote = {
  name: 'Media quote',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
