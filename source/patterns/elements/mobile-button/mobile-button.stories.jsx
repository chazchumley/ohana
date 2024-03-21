import parse from 'html-react-parser';

import twigTemplate from './mobile-button.twig';
import data from './mobile-button.yml';
import './mobile-button.css';

const settings = {
  title: 'Elements/Mobile button',
};

export const mobileButton = {
  name: 'Mobile button',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
