import parse from 'html-react-parser';

import twigTemplate from './card.twig';
import data from './card.yml';
import './card.css';

const settings = {
  title: 'Components/Card',
};

export const EventCard = {
  name: 'Event card',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const ArticleCard = {
  ...EventCard,
  name: 'Article card',
  args: {
    ...data,
    event_type: '',
    more_dates: false,
    short_date_month: '',
    organization: '',
  },
};

export default settings;
