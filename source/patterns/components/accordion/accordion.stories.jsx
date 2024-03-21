import parse from 'html-react-parser';

import twigTemplate from './accordion.twig';
import data from './accordion.yml';
import './accordion';
import './accordion.css';

const settings = {
  title: 'Components/Accordion',
};

export const Accordion = {
  name: 'Accordion',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
