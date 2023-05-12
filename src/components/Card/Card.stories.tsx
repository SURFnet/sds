import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import Card from './Card';
import CardType from "./CardType";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Card',
    component: Card,
    args: {}
} as Meta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const CardDefault = Template.bind({});
CardDefault.args = {
    children: <div><h2>Header</h2><p>Default card</p></div>
};

export const CardBig = Template.bind({});
CardBig.args = {
    children: <div><h2>Header</h2><p>Big card</p></div>,
    cardType: CardType.Big
};
