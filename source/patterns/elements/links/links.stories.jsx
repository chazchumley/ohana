import parse from 'html-react-parser';

import twigTemplate from './links.twig';
import data from './links.yml';
import './links.css';

const settings = {
  title: 'Elements/Links',
};

export const Links = {
  name: 'Links',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const DropButton = {
  ...Links,
  name: 'Links drop button',
  args: {
    ...data,
    modifier: 'links--dropbutton',
  },
};

export const LinksWithTitle = {
  ...Links,
  name: 'Links with Title',
  args: {
    ...data,
    heading: { text: 'Links with title'},
  },
};

export default settings;
