import React from "react";
import {sanitize, stopEvent} from "../../common/utils";
import BlockSwitchType from "./BlockSwitchType";
import "./BlockSwitch.scss";

export interface BlockSwitchProps {
    active: boolean;
    disabled?: boolean;
    icon?: any;
    setValue?: Function;
    title?: string;
    txt?: string;
    type?: BlockSwitchType;
}

const BlockSwitch = (props: React.PropsWithChildren<BlockSwitchProps>) => {

    const setValueInternal = (e: any) => {
        stopEvent(e);
        if (!props.disabled && props.setValue) {
            props.setValue(!props.active);
        }
    }

    const innerBlockHorizontal = () => {
        return (
            <>
                <span className="sds--block-switch--title">
                    <span className={`icon ${props.active ? "is-active" : ""}`}>{props.icon && props.icon}</span>
                    <span className="text sds--text--h3">{props.title && sanitize(props.title)}</span>
                </span>
                <span className="sds--text--body--small">{props.txt && sanitize(props.txt)}</span>
            </>
        );
    }

    const innerBlockVertical = () => {
        return (
            <>
                <span className="sds--block-switch--visual">
                    <span className={`icon ${props.active ? "is-active" : ""}`}>{props.icon && props.icon}</span>
                </span>
                <span className="sds--block-switch--textual">
                    <span
                        className="sds--block-switch--title sds--text--h3">{props.title && sanitize(props.title)}</span>
                    <span className="sds--text--body--small">{props.txt && sanitize(props.txt)}</span>
                </span>
            </>
        );
    }

    const type = props.type || BlockSwitchType.Horizontal;
    const active = `${props.active ? "is-active" : ""}`
    const className = `sds--block-switch  ${type.toLowerCase()} ${active}`

    return (
        <>
            {props.active && <button className={className}>
                {type === BlockSwitchType.Horizontal ? innerBlockHorizontal() : innerBlockVertical()}
            </button>}
            {!props.active && <a href="/#" onClick={setValueInternal} className={className}>
                {type === BlockSwitchType.Horizontal ? innerBlockHorizontal() : innerBlockVertical()}
            </a>}
        </>
    );
};

export default BlockSwitch;
