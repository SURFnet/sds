import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import ColorPallet from "./ColorPallet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/ColorPallet",
    component: ColorPallet,
} as Meta<typeof ColorPallet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ColorPallet> = (args) => <ColorPallet {...args} />;

export const ColorPalletRoot = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorPalletRoot.args = {
    name: "Root",
    colors: [
        {name: "--sds--color--black", color: "#050E1D"},
        {name: "--sds--color--pitch-black--dimmed--15", color: "#00000026"},
        {name: "--sds--color--pitch-black--dimmed--25", color: "#00000040"},
        {name: "--sds--color--white", color: "#FFFFFF"},
        {name: "--sds--color--white--dimmed--70", color: "#FFFFFFB3"},
        {name: "--sds--color--gray--100", color: "#F4F6F8"},
        {name: "--sds--color--gray--200", color: "#EAECF0"},
        {name: "--sds--color--gray--300", color: "#B2B6BE"},
        {name: "--sds--color--gray--400", color: "#8C969F"},
        {name: "--sds--color--gray--500", color: "#5E6873"},
        {name: "--sds--color--yellow--200", color: "#FEF8D3"},
        {name: "--sds--color--yellow--500", color: "#FFC100"},
        {name: "--sds--color--green--100", color: "#DCF2E5"},
        {name: "--sds--color--green--200", color: "#B8E3C9"},
        {name: "--sds--color--green--300", color: "#17A95D"},
        {name: "--sds--color--green--400", color: "#008939"},
        {name: "--sds--color--green--500", color: "#006731"},
        {name: "--sds--color--blue--100", color: "#DFF4FF"},
        {name: "--sds--color--blue--200", color: "#B3E5FF"},
        {name: "--sds--color--blue--300", color: "#78BEFD"},
        {name: "--sds--color--blue--400", color: "#0077C8"},
        {name: "--sds--color--blue--500", color: "#004C97"},
        {name: "--sds--color--red--200", color: "#FFCDCA"},
        {name: "--sds--color--red--400", color: "#DA362D"},
        {name: "--sds--color--red--500", color: "#83201B"},
        {name: "--sds--color--orange--100", color: "#FFE6D2"},
        {name: "--sds--color--orange--200", color: "#FFC294"},
        {name: "--sds--color--orange--300", color: "#FF9A4E"},
        {name: "--sds--color--orange--400", color: "#E67300"},
        {name: "--sds--color--orange--500", color: "#C15500"},
    ],
};

export const ColorPalletBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorPalletBlue.args = {
    name: "Blue",
    colors: [
        {name: "--sds--palette--main-color--100", color: "var(--sds--color--blue--100)"},
        {name: "--sds--palette--main-color--200", color: "var(--sds--color--blue--200)"},
        {name: "--sds--palette--main-color--300", color: "var(--sds--color--blue--300)"},
        {name: "--sds--palette--main-color--400", color: "var(--sds--color--blue--400)"},
        {name: "--sds--palette--main-color--500", color: "var(--sds--color--blue--500)"},
        {name: "--sds--palette--support-color--100", color: "var(--sds--color--green--100)"},
        {name: "--sds--palette--support-color--400", color: "var(--sds--color--green--400)"},
        {name: "--sds--palette--support-color--500", color: "var(--sds--color--green--500)"}
    ],
};

export const ColorPalletGreen = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorPalletGreen.args = {
    name: "Green",
    colors: [
        {name: "--sds--palette--main-color--100", color: "var(--sds--color--green--100)"},
        {name: "--sds--palette--main-color--200", color: "var(--sds--color--green--200)"},
        {name: "--sds--palette--main-color--300", color: "var(--sds--color--green--300)"},
        {name: "--sds--palette--main-color--400", color: "var(--sds--color--green--400)"},
        {name: "--sds--palette--main-color--500", color: "var(--sds--color--green--500)"},
        {name: "--sds--palette--support-color--100", color: "var(--sds--color--blue--100)"},
        {name: "--sds--palette--support-color--400", color: "var(--sds--color--blue--400)"},
        {name: "--sds--palette--support-color--500", color: "var(--sds--color--blue--500)"}
    ],
};

export const ColorPalletNeutral = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorPalletNeutral.args = {
    name: "Neutral",
    colors: [
        {name: "--sds--palette--main-color--100", color: "var(--sds--color--gray--100)"},
        {name: "--sds--palette--main-color--200", color: "var(--sds--color--gray--200)"},
        {name: "--sds--palette--main-color--300", color: "var(--sds--color--gray--300)"},
        {name: "--sds--palette--main-color--400", color: "var(--sds--color--gray--500)"},
        {name: "--sds--palette--main-color--500", color: "var(--sds--color--black)"},
        {name: "--sds--palette--support-color--100", color: "var(--sds--color--green--100)"},
        {name: "--sds--palette--support-color--400", color: "var(--sds--color--green--400)"},
        {name: "--sds--palette--support-color--500", color: "var(--sds--color--green--500)"}
    ],
};

export const ColorPalletOrange = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorPalletOrange.args = {
    name: "Neutral",
    colors: [
        {name: "--sds--palette--main-color--100", color: "var(--sds--color--orange--100)"},
        {name: "--sds--palette--main-color--200", color: "var(--sds--color--orange--200)"},
        {name: "--sds--palette--main-color--300", color: "var(--sds--color--orange--300)"},
        {name: "--sds--palette--main-color--400", color: "var(--sds--color--orange--400)"},
        {name: "--sds--palette--main-color--500", color: "var(--sds--color--orange--500)"},
        {name: "--sds--palette--support-color--100", color: "var(--sds--color--blue--100)"},
        {name: "--sds--palette--support-color--400", color: "var(--sds--color--blue--400)"},
        {name: "--sds--palette--support-color--500", color: "var(--sds--color--blue--500)"}
    ],
};
