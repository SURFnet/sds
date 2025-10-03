import React from "react";
import "./Chip.scss";
import ChipType from "./ChipType";
import Tooltip from "../Tooltip/Tooltip";

export interface ChipProps {
    label: string;
    type?: ChipType;
    toolTip?: string;
    className?: string;
}

const Chip = (props: React.PropsWithChildren<ChipProps>) => {

    const chipType = props.type ? props.type : ChipType.Main_100;
    const className = props.className || "";
    return (
        <button className={`sds--chips ${chipType} ${className}`}>
            {props.children &&
                <span className="sds--chips--visual">
                    {props.children}
                </span>}
            <span className="sds--chips--textual sds--text--body--small">{props.label}</span>
            {props.toolTip && <Tooltip tip={props.toolTip} />}
        </button>
    );
};

export default Chip;
