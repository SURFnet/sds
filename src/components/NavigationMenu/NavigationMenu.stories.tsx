import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import NavigationMenu, {NavigationMenuItem} from "./NavigationMenu";
import {ReactComponent as HomeIcon} from "../../icons/illustrative-icons/home.svg";
import {ReactComponent as LaptopIcon} from "../../icons/illustrative-icons/laptop.svg";
import {ReactComponent as PathIcon} from "../../icons/illustrative-icons/path.svg";
import {ReactComponent as LockIcon} from "../../icons/illustrative-icons/lock.svg";
import {ReactComponent as ScreenIcon} from "../../icons/illustrative-icons/screen.svg";
import {ReactComponent as TeamIcon} from "../../icons/illustrative-icons/team.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/NavigationMenu",
    component: NavigationMenu,
} as Meta<typeof NavigationMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NavigationMenu> = (args) => <NavigationMenu {...args} />;

export const NavigationMenuTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavigationMenuTemplate.args = {
    items: [{
        Logo: HomeIcon,
        label: "Home",
        href: "/home"
    }, {
        Logo: LockIcon,
        label: "App accessibility",
        href: "/accessibility"
    }, {
        Logo: ScreenIcon,
        label: "Application maintenance",
        href: "/maintenance"
    }, {
        Logo: LaptopIcon,
        label: "SURF App catalog",
        href: "/catalog"
    },
    {
        Logo: PathIcon,
        label: "Collaborations",
        href: "/collaborations"
    },
    {
        Logo: TeamIcon,
        label: "Teams",
        href: "/teams"
    }],
    logoLabel: "Access",
    title: "Shareworks",
    settingToolTip: "<p>Line1</p><p>Line2</p><p>Line3</p>",
    active: "Collaborations",
    children: <div style={{color:"white", marginTop:"140px"}}><span>NL</span> | <span>EN</span></div>
};