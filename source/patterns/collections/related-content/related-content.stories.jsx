import parse from 'html-react-parser';

import twigTemplate from './related-content.twig';
import data from './related-content.yml';
import eventsData from './related-content-events.yml';

const settings = {
  title: 'Collections/Related content',
};

export const RelatedArticles = {
  name: 'Related Articles',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const RelatedEvents = {
  ...RelatedArticles,
  name: 'Related Events',
  args: { ...eventsData },
};

export default settings;
