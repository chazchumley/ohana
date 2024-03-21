import parse from 'html-react-parser';

import twigTemplate from './content-highlight.twig';
import data from './content-highlight.yml';
import dataArticle from './content-highlight-article.yml';
import './content-highlight.css';

const settings = {
  title: 'Collections/Content Highlight',
};

export const ArticlesHighlight = {
  name: 'Articles Highlight',
  render: (args) => parse(twigTemplate(args)),
  args: { ...dataArticle },
};

export const EventsHighlight = {
  name: 'Events Highlight',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
