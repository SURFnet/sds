import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import BlockSwitchChoice from "./BlockSwitchChoice";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/BlockSwitchChoice',
    component: BlockSwitchChoice,
} as ComponentMeta<typeof BlockSwitchChoice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlockSwitchChoice> = (args) => <BlockSwitchChoice {...args} />;

export const BlockSwitchChoiceDefault = Template.bind({});
BlockSwitchChoiceDefault.args = {
    setValue: () => true,
    firstActive: true,
    firstTitle: "Active title",
    secondTitle: "Non-active title",
    firstTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
    secondTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};
