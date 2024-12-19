import "../src/styles/sds.css";
import "react-tooltip/dist/react-tooltip.css";

import React from 'react';

export const decorators = [
  (Story) => (
    <div className={"sds--page-container sds--color-palette--orange"}>
      <Story />
    </div>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
 backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'light',
        value: '#F8F8F8',
      },
      {
        name: 'dark',
        value: '#4b4c54',
      },
      {
        name: 'blue',
        value: '#0077c8',
      },
    ],
  },
}
export const tags = ['autodocs'];