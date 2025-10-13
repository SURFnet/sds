import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import NavigationMenu from "./NavigationMenu";
import {ReactComponent as HomeIcon} from "../../icons/illustrative-icons/home.svg";
import {ReactComponent as CustomIcon} from "../../icons/check.svg";
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
    groups: [
        {
            label: "Organization maintenance",
            items: [{
                Logo: HomeIcon,
                label: "Home",
                href: "/home",
                active: false
            }, {
                Logo: LockIcon,
                label: "App accessibility",
                href: "/accessibility",
                active: false
            }, {
                Logo: ScreenIcon,
                label: "Application maintenance",
                href: "/maintenance",
                active: false
            }
            ]
        },
        {
            label: "SURF app catalogue",
            items: [{
                Logo: LaptopIcon,
                label: "SURF App catalog",
                href: "/catalog",
                active: false
            },
                {
                    Logo: PathIcon,
                    label: "Collaborations",
                    href: "/collaborations",
                    active: true
                },
                {
                    Logo: TeamIcon,
                    label: "Teams",
                    href: "/teams",
                    active: false
                }
            ]
        }],
    logoLabel: "Access",
    title: "Shareworks",
    settingToolTip: "<p>Line1</p><p>Line2</p><p>Line3</p>",
    setActiveMenuItem: () => true,
    children: <div style={{color: "white", marginTop: "140px"}}><span>NL</span> | <span>EN</span></div>
}
;

export const NavigationMenuMinimalTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavigationMenuMinimalTemplate.args = {
    groups: [
        {
            label: "Minimal",
            items: [{
                Logo: HomeIcon,
                label: "Home",
                href: "/home",
                active: true
            }]
        }
    ],
    logoLabel: "Access",
    setActiveMenuItem: () => true
};

export const NavigationMenuCustomTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavigationMenuCustomTemplate.args = {
    groups: [
        {
            label: "Minimal",
            items: [{
                Logo: HomeIcon,
                label: "Home",
                href: "/home",
                active: true
            }]
        }
    ],
    title: "Approved Org",
    logoLabel: "Access",
    SettingLogo: CustomIcon,
    settingToolTip: "Custom logo",
    setActiveMenuItem: () => true
};

export const NavigationMenuHomeTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavigationMenuHomeTemplate.args = {
    groups: [
        {
            items: [{
                Logo: HomeIcon,
                label: "Home",
                href: "/home",
                active: true
            }]
        }
    ],
    title: "Approved Org",
    logoLabel: "Access",
    SettingLogo: CustomIcon,
    settingToolTip: "Custom logo",
    setActiveMenuItem: () => true
};

export const NavigationMenuEmptyTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavigationMenuEmptyTemplate.args = {
    groups: [],
    logoLabel: "Access"
};