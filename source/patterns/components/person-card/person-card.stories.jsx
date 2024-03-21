import parse from 'html-react-parser';

import twigTemplate from './person-card.twig';
import data from './person-card.yml';
import './person-card.css';

const settings = {
  title: 'Components/Person card',
};

export const PersonCard = {
  name: 'Person card',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
