import parse from 'html-react-parser';

import twigTemplate from './event-card.twig';
import data from './event-card.yml';
import './event-card.css';

const settings = {
  title: 'Components/Event list card',
};

export const Card = {
  name: 'Event list card',
  args: { ...data },
  render: (args) => parse(twigTemplate(args)),
};

export default settings;
