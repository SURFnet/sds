import "../src/styles/sds.css";
import "react-tooltip/dist/react-tooltip.css";

import React from 'react';

// export const decorators = [
//   (Story) => (
//     <div className={"sds--page-container sds--color-palette--orange"}>
//       <Story />
//     </div>
//   ),
// ];

export const decorators = [
  (Story, context) => {
    const className = context.globals.colorPalette;
    return (
      <div className={`sds--page-container ${className}`}>
        <Story />
      </div>
    );
  },
];

export const globalTypes = {
  colorPalette: {
    name: 'Color palette',
    description: 'Color palette to apply',
    defaultValue: 'sds--color-palette--orange',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'sds--color-palette--blue', title: 'Blue' },
        { value: 'sds--color-palette--green', title: 'Green' },
        { value: 'sds--color-palette--neutral', title: 'Neutral' },
        { value: 'sds--color-palette--orange', title: 'Orange' },
      ],
      showName: true,
    },
  },
};

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