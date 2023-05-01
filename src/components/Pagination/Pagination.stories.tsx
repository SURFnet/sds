import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import Pagination from './Pagination';
import {stopEvent} from "../../common/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Pagination',
    component: Pagination,
} as Meta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    currentPage: 6, onChange: (e: any) => stopEvent(e), total: 120, pageCount: 10
};
