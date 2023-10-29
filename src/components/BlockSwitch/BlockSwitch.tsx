import React from "react";
import {pseudoGuid, sanitize, stopEvent} from "../../common/utils";
import BlockSwitchType from "./BlockSwitchType";
import "./BlockSwitch.scss";

export interface BlockSwitchProps {
    active: boolean;
    value: string;
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
            props.setValue(props.value);
        }
    }

    const innerBlockHorizontal = () => {
        return (
            <>
                <span className={`sds--block-switch--title  ${props.icon ? "" : "no-icon"}`} key={pseudoGuid()}>
                    <span
                        className={`icon ${props.active ? "is-active" : ""} ${props.icon ? "" : "no-icon"}`}>{props.icon && props.icon}</span>
                    <span className="text sds--text--h3">{props.title && sanitize(props.title)}</span>
                </span>
                <span className="sds--text--body--small">{props.txt && sanitize(props.txt)}</span>
            </>
        );
    }

    const innerBlockVertical = () => {
        return (
            <>
                <span className={`sds--block-switch--visual ${props.icon ? "" : "no-icon"}`}>
                    <span
                        className={`icon ${props.active ? "is-active" : ""}`}>{props.icon && props.icon}</span>
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
    const disabled = `${props.disabled ? "is-disabled" : ""}`
    const className = `sds--block-switch  ${type.toLowerCase()} ${active} ${disabled}`

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
