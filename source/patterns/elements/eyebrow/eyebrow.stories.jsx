import parse from 'html-react-parser';

import twigTemplate from './eyebrow.twig';
import data from './eyebrow.yml';
import './eyebrow.css';

const settings = {
  title: 'Elements/Eyebrow',
};

export const Eyebrow = {
  name: 'Plain text label',
  render: (args) => parse(twigTemplate(args)),
  args: {
    ...data,
    eyebrow: {
      modifier: '',
      text: 'This is a plain text label',
      url: '',
    },
  },
};

export const Linked = {
  ...Eyebrow,
  name: 'Label as a link',
  args: {
    ...data,
    eyebrow: {
      modifier: 'some-class',
      text: 'This is a label as a link',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export default settings;
