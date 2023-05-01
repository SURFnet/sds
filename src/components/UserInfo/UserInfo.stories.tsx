import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import UserInfo from './UserInfo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/UserInfo',
    component: UserInfo,
} as Meta<typeof UserInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof UserInfo> = (args) => <UserInfo {...args} />;

export const UserInfoTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UserInfoTemplate.args = {
    userName: "John Doe",
    organisationName: "example.com",
    isOpen: false,
    toggle: () => true,
    children: <>
        <ul>
            <li>
                <a href="#">Mijn contacthistorie</a>
            </li>
            <li>
                <a href="#">Mijn gegevens</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#">Uitloggen</a>
            </li>
        </ul>
    </>
};

export const UserInfoActiveTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UserInfoActiveTemplate.args = {
    userName: "John Doe",
    organisationName: "example.com",
    isOpen: true,
    toggle: () => true,
    children: <>
        <ul>
            <li>
                <a href="#">Mijn contacthistorie</a>
            </li>
            <li>
                <a href="#">Mijn gegevens</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#">Uitloggen</a>
            </li>
        </ul>
    </>
};

