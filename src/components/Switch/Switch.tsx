import React from "react";
import "../Tooltip/TooltipParent.scss";
import Tooltip from "../Tooltip/index";
import "./Switch.scss";

export interface SwitchProps {
    name: string;
    value: boolean;
    onChange: Function;
    disabled?: boolean;
    tooltip?: string;
}

const Switch = (props: SwitchProps) => {

    const className = `sds--switch ${props.value ? "sds--switch--active" : ""} ${props.disabled ? "sds--switch--disabled" : ""}`
    return (
        <div className={"sds--tooltip-parent"} onClick={() => !props.disabled && props.onChange(!props.value)}>
            <span className={className} role="switch" aria-checked={props.value}/>
            {props.tooltip && <Tooltip tip={props.tooltip}/>}
        </div>
    );
};

export default Switch;
