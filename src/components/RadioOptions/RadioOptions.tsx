import React, {ChangeEventHandler} from "react";
import "./RadioOptions.scss";
import "../Tooltip/TooltipParent.scss";
import Tooltip from "../Tooltip/index";
import RadioOptionsOrientation from "./RadioOptionsOrientation";

export interface RadioOptionsProps {
    trueLabel: string;
    falseLabel: string;
    label: string;
    name: string;
    onChange: ChangeEventHandler;
    value: boolean | string | null;
    tooltip?: string;
    disabled?: boolean;
    isMultiple?: boolean;
    reverse?: boolean;
    labels?: Array<string>;
    labelResolver?: Function;
    orientation?: RadioOptionsOrientation;
}

const RadioOptions = (props: RadioOptionsProps) => {

    const isChecked = (label: string) => {
        if (props.value === null) {
            return false;
        }
        return props.isMultiple ? label === props.value : (label === props.trueLabel ? props.value === true : !props.value);
    }
    const isMultiple = props.isMultiple || false;
    const orientation = props.orientation || RadioOptionsOrientation.row;
    const reverse = props.reverse || false;
    const labels = isMultiple ? (props.labels && props.labels) : reverse ? [props.trueLabel, props.falseLabel] : [props.falseLabel, props.trueLabel];
    return (
        <div className="sds--radio-options">
            <label htmlFor={`${props.name}`} className={"sds--tooltip-parent"}>
                <span>{props.label}</span>
                {props.tooltip && <Tooltip tip={props.tooltip}/>}
            </label>
            <div className={`sds--text-field-container ${orientation}`}>
                {(labels || []).map((label, index) => {
                    const id = `${props.name}_${label}`;
                    return (
                        <div key={id} className={`option-${index}`}>
                            <input id={id}
                                   type="radio"
                                   name={props.name}
                                   checked={isChecked(label)}
                                   disabled={props.disabled}
                                   onChange={props.onChange}/>
                            <label htmlFor={id}>
                                <span className="sds--radio--visual"/>
                                <span className="sds--radio--text">
                                    {props.labelResolver ? props.labelResolver(label) : label}
                                </span>
                            </label>
                        </div>
                    );
                })}
            </div>


        </div>
    );
};

export default RadioOptions;
