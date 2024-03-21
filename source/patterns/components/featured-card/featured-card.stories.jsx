import parse from 'html-react-parser';

import twigTemplate from './featured-card.twig';
import dataEvent from './featured-card.yml';
import dataArticle from './featured-card-article.yml';
import './featured-card.css';

const settings = {
  title: 'Components/Featured Card',
};

export const FeaturedArticle = {
  name: 'Featured Article',
  render: (args) => parse(twigTemplate(args)),
  args: { ...dataArticle },
};

export const FeaturedEvent = {
  name: 'Featured Event',
  render: (args) => parse(twigTemplate(args)),
  args: { ...dataEvent },
};

export default settings;
