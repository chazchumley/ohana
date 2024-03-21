import parse from 'html-react-parser';

import twigTemplate from './person-listing.twig';
import data from './person-listing.yml';
import './person-listing.css';

const settings = {
  title: 'Collections/Person listing',
};

export const PersonListing = {
  name: 'Person listing',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
