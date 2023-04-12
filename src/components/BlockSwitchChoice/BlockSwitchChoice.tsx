import React from "react";
import "./BlockSwitchChoice.scss";
import BlockSwitch from "../BlockSwitch/BlockSwitch";

export interface BlockSwitchChoiceProps {
    firstActive: boolean;
    firstIcon?: any;
    secondIcon?: any;
    setValue?: Function;
    disabled?: boolean;
    firstTitle?: string;
    secondTitle?: string;
    firstTxt?: string;
    secondTxt?: string;
}


const BlockSwitchChoice = (props: BlockSwitchChoiceProps) => {

    return (
        <div className="sds--block-switch-container">
            <BlockSwitch active={props.firstActive}
                         setValue={props.setValue}
                         disabled={props.disabled}
                         txt={props.firstTxt}
                         title={props.firstTitle}
                         icon={props.firstIcon}
            />
            <BlockSwitch active={!props.firstActive}
                         setValue={(b: boolean) => props.setValue && props.setValue(!b)}
                         disabled={props.disabled}
                         txt={props.secondTxt}
                         title={props.secondTitle}
                         icon={props.secondIcon}
            />
        </div>);

};

export default BlockSwitchChoice;
