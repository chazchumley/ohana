import parse from 'html-react-parser';

import twigTemplate from './tables.twig';
import data from './tables.yml';
import './tables.css';

const settings = {
  title: 'Base/Tables',
};

export const Base = {
  name: 'Base table',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const PrimaryTable = {
  name: 'Primary table',
  render: (args) => parse(twigTemplate(args)),
  args: {
    ...data,
    modifier: 'table--primary',
  },
};

export const StrippedTable = {
  name: 'Stripped table',
  render: (args) => parse(twigTemplate(args)),
  args: {
    ...data,
    modifier: 'table--primary table--striped',
  },
};

export const NoBorder = {
  name: 'Table without border',
  render: (args) => parse(twigTemplate(args)),
  args: {
    ...data,
    modifier: 'table--hover',
  },
};

export default settings;
