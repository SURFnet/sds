import React from 'react';
import {ComponentMeta, ComponentStory, Meta, StoryFn} from '@storybook/react';

import MenuButton from './MenuButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/MenuButton',
    component: MenuButton,
} as Meta<typeof MenuButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const MenuButtonTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MenuButtonTemplate.args = {
    txt: "Click me",
    isOpen: false,
    toggle: () => true,
};

export const MenuButtonActiveTemplate = Template.bind({});
MenuButtonActiveTemplate.args = {
    txt: "Click me",
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
    </>
};

