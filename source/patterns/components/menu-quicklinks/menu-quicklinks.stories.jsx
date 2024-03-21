import parse from 'html-react-parser';

import twigTemplate from './menu-quicklinks.twig';
import data from './menu-quicklinks.yml';
import './menu-quicklinks.css';

const settings = {
  title: 'Components/Menu quicklinks',
};

export const menuQuicklinks = {
  name: 'Menu quicklinks',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
