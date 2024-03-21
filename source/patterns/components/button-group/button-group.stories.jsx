import parse from 'html-react-parser';

import twigTemplate from './button-group.twig';
import data from './button-group.yml';
import './button-group.css';

const settings = {
  title: 'Components/Buttons Group',
};

export const ButtonGroup = {
  name: 'Buttons Group',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
