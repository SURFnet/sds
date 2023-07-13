import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import {ReactComponent as PlaceHolderIcon} from "../../icons/placeholder-image.svg";
import ContentCard from './ContentCard';
import Chip from "../Chip/Chip";
import ChipType from "../Chip/ChipType";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/ContentCard',
    component: ContentCard,
    args: {}
} as Meta<typeof ContentCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ContentCard> = (args) => <ContentCard {...args} />;

export const ContentCardDefault = Template.bind({});
ContentCardDefault.args = {
    buttonAction: () => alert("onClick"),
    buttonLabel: "Action",
    description: "Some description",
    icon: <PlaceHolderIcon/>,
    title: "Title",
    links: ["Hyperlink", "Hyperlink"]
};

export const ContentCardLongDescription = Template.bind({});
ContentCardLongDescription.args = {
    buttonAction: () => alert("onClick"),
    buttonLabel: "Action",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nisi at tortor tincidunt, ut rutrum turpis pulvinar. Suspendisse potenti. Nullam aliquam feugiat tortor, a eleifend elit maximus in. Donec aliquam finibus molestie. Sed sodales, eros sit amet condimentum imperdiet, ex elit porta lectus, a ultricies quam libero eu tellus. Suspendisse vehicula dapibus urna, nec elementum neque pharetra vel. Fusce quis dictum turpis, vitae suscipit ex. Etiam tincidunt laoreet arcu a fermentum. Aenean imperdiet massa vel bibendum vestibulum. Integer eu erat a nunc fermentum accumsan vitae id velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
        "Maecenas tempus, lectus eget volutpat vehicula, tortor nisi lacinia nisi, sed tristique nisi nisi in diam. Vivamus at malesuada felis. Nulla in velit blandit, gravida nibh id, molestie elit. Maecenas vitae commodo nisl. Suspendisse eleifend dolor at justo condimentum efficitur. Pellentesque risus augue, placerat id justo quis, luctus tempus dolor. Ut vel diam tincidunt, varius neque a, pharetra lacus. Maecenas eu tristique nulla, vel volutpat leo. Nam quis rhoncus augue. Pellentesque nec magna quis orci interdum consequat lobortis non orci." +
        "Pellentesque placerat lacus augue, quis imperdiet sapien maximus vel. Integer finibus ante sit amet pellentesque dapibus. Nulla blandit vehicula magna in pretium. Proin sed orci vitae enim accumsan semper. Donec nec sapien convallis, consequat felis id, pulvinar sapien. Vestibulum a diam lorem. Aliquam posuere egestas luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus." +
        "Praesent maximus metus non mi dignissim tincidunt. Nam semper mattis posuere. Donec malesuada non risus semper facilisis. Sed venenatis molestie nibh eu tincidunt. Curabitur feugiat faucibus rhoncus. Aliquam erat volutpat. In facilisis neque orci, ac accumsan mi lobortis eget. Maecenas iaculis, ligula sed semper feugiat, velit ipsum viverra turpis, ut iaculis odio odio id risus." +
        "Nullam dignissim mattis lacus eu pharetra. Fusce imperdiet blandit tempor. Ut sem mauris, molestie eget metus eget, efficitur gravida dui. Aliquam libero odio, ultrices non turpis vel, luctus aliquet risus. Etiam nunc eros, gravida vel convallis quis, molestie in dolor. Donec id eleifend tortor, id tincidunt nunc. Aliquam nec ex risus. Curabitur eleifend sodales tempor. Integer sollicitudin arcu sed elit semper, vitae interdum magna elementum. Etiam neque neque, scelerisque et sapien eget, convallis rhoncus justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    icon: <PlaceHolderIcon/>,
    title: "Title",
    links: ["Hyperlink", "Hyperlink"]
};

export const ContentCardChildren = Template.bind({});
ContentCardChildren.args = {
    children: <>
        <div className="sds--content-card--main">
            <div className="sds--content-card--visual">
                <span className="sds--placeholder-image">
                <PlaceHolderIcon/>
            </span>
            </div>
            <div className="sds--content-card--textual">
                <h4 className="sds--space--bottom--1">Title or product name</h4>
                <div className="sds--content-card--text-and-actions">
                    <p>Example text for description. Lorem ipsum lorem ipsum</p>
                    <div className="sds--content-card--actions">
                        <Chip label={"Active"} type={ChipType.Main_300}/>
                        <button type="button" className="sds--btn sds--btn--primary">Default</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="sds--content-card--bottom">
            <nav>
                <ul>
                    <li>
                        <a href="#">Hyperlink</a>
                    </li>
                    <li>
                        <a href="#">Hyperlink</a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
};


