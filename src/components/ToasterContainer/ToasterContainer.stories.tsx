import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import Toaster from '../Toaster/Toaster';
import ToasterContainer from "./ToasterContainer";
import ToasterType from "../Toaster/ToasterType";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/ToasterContainer',
    component: ToasterContainer,
} as Meta<typeof ToasterContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ToasterContainer> = (args) => <ToasterContainer {...args} />;

export const ToasterContainerDefault = Template.bind({});
ToasterContainerDefault.args = {
    children: <Toaster message={"Hello world!"} toasterType={ToasterType.Info}/>
};
