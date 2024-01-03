import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import {ReactComponent as EditIcon} from "../../icons/functional-icons/edit.svg";

import IconButton from './IconButton';
import {GhostLight} from "../Button/Button.stories";
import Tooltip from "../Tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/IconButton',
    component: IconButton,
} as Meta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const IconButtonTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconButtonTemplate.args = {
    children: <Tooltip tip={"Edit"}
                       children={<EditIcon/>}
                       standalone={true}/>,
    onClick: () => true,
};
IconButtonTemplate.parameters = {backgrounds: {default: 'light'}}
