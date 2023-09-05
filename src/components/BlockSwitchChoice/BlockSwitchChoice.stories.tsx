import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import BlockSwitchChoice from "./BlockSwitchChoice";
import {ReactComponent as HrIcon} from "../../icons/illustrative-icons/hr.svg";
import {ReactComponent as AccountingIcon} from "../../icons/illustrative-icons/accounting.svg";
import {ReactComponent as DataBaseIcon} from "../../icons/illustrative-icons/database-refresh.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/BlockSwitchChoice',
    component: BlockSwitchChoice,
} as Meta<typeof BlockSwitchChoice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BlockSwitchChoice> = (args) => <BlockSwitchChoice {...args} />;

export const BlockSwitchChoiceDefault = Template.bind({});
BlockSwitchChoiceDefault.args = {
    setValue: () => true,
    value: "val3",
    titleResolver: (value: string) => `Title for val ${value}`,
    items: [
        {
            value: "val1",
            title: "Non-active title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            icon: <HrIcon/>
        },
        {
            value: "val2",
            title: "Also non-active",
            text: "labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            value: "val3",
            title: "Active choice",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            icon: <DataBaseIcon/>
        }
    ],

};
