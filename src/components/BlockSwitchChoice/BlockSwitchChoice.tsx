import React from "react";
import "./BlockSwitchChoice.scss";
import BlockSwitch from "../BlockSwitch/BlockSwitch";

export interface ChoiceItem {
    value: string;
    title?: string;
    text?: string;
    icon?: any;
}

export interface BlockSwitchChoiceProps {
    value: string;
    items: Array<ChoiceItem>;
    titleResolver?: Function;
    setValue?: Function;
    disabled?: boolean;
}

const BlockSwitchChoice = (props: BlockSwitchChoiceProps) => {

    return (
        <div className="sds--block-switch-container">
            {props.items.map(item =>
                <BlockSwitch active={props.value === item.value}
                             setValue={props.setValue}
                             disabled={props.disabled}
                             txt={item.text}
                             title={props.titleResolver ? props.titleResolver(item.value) : (item.title || "")}
                             icon={item.icon}
                />)}
        </div>);

};

export default BlockSwitchChoice;
