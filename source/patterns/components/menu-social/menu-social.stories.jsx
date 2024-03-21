import parse from 'html-react-parser';

// Imports decorator to add background to the white social icons.
import { withBackground } from '../../../../.storybook/decorators';

import twigTemplate from './menu-social.twig';
import data from './menu-social.yml';
import './menu-social.css';

const settings = {
  title: 'Components/Menu social',
};

export const Social = {
  name: 'Menu social',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
  decorators: [ withBackground ],
};

export default settings;
