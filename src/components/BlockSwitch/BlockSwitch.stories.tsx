import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import BlockSwitch from './BlockSwitch';
import BlockSwitchType from "./BlockSwitchType";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/BlockSwitch',
    component: BlockSwitch,
    args: {
        active: true,
        disabled: false,
        setValue : () => true,
        title: "Public team",
        txt: "List team in public teams index. Others can request membership.",
        type: BlockSwitchType.Horizontal
    }
} as Meta<typeof BlockSwitch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BlockSwitch> = (args) => <BlockSwitch {...args} />;

export const ActiveHorizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ActiveHorizontal.args = {
    value:"value"
};
export const NotActiveHorizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotActiveHorizontal.args = {
    active: false,
    value:"value"
};
export const ActiveVertical = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ActiveVertical.args = {
    type: BlockSwitchType.Vertical,
    value:"value"
};

