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
import {ReactComponent as HeadPhoneIcon} from "../../icons/illustrative-icons/headphones.svg";
import {ReactComponent as ConnectedIcon} from "../../icons/illustrative-icons/connected.svg";

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
            items: [
                {
                    Logo: HomeIcon,
                    label: "Home",
                    href: "/home",
                    active: false,
                    tooltip: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque "
                }, {
                    Logo: LockIcon,
                    label: "App accessibility",
                    href: "/accessibility",
                    active: false,
                    tooltip: "Access tooltip"
                }, {
                    Logo: ScreenIcon,
                    label: "Application maintenance",
                    href: "/maintenance",
                    active: false,
                    tooltip: "Maintenance tooltip"
                }
            ]
        },
        {
            label: "SURF app catalogue",
            items: [
                {
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
        },
        {
            label: "Support",
            className: "custom-group",
            items: [
                {
                    Logo: HeadPhoneIcon,
                    label: "SURF Servicedesk",
                    href: "/servicedesk",
                    active: false
                },
                {
                    Logo: ConnectedIcon,
                    label: "Help us improve",
                    href: "/collaborations",
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