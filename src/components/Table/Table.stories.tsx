import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import {ReactComponent as ArrowDownIcon} from "../../icons/functional-icons/arrow-down-2.svg";
import Table, {defaultTableProps} from './Table';
import Button from "../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Table',
    component: Table,
    args: {
        ...defaultTableProps
    }
} as Meta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    newEntityFunc: () => alert("New entity"),
    searchAttributes: ["name"],
    children: <Button txt={"Custom children"}/>,
    columns: [
        {key: "name", hasLink: false, showHeader: true},
        {key: "name", hasLink: false, mapper: (obj: any) => obj.birthday.toDateString(), showHeader: true}
    ],
    title: "Persons",
    defaultSort: "name",
    newLabel: "New Person",
    searchPlaceHolder: "Search...",
    entities:[
        {name:"John Doe", birthday: new Date("1978-04-09")},
        {name:"Mary Doe", birthday: new Date("1977-04-09")},
        {name:"Paul Doe", birthday: new Date("1979-04-09")}
    ],
};

