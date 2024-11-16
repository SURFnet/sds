import React, {useEffect, useRef, useState} from "react";
import "./CodeValidation.scss";
import {isEmpty, sanitize} from "../../common/utils";

export interface CodeValidationProps {
    size: number,
    verify: Function,
    disabled?: boolean,
    error?: string,
    validate?: Function,
    transformer?: Function,
    focusFirst?: boolean,
    info?: string
}

const timeout = 35;
const delKeys = ["Delete", "Backspace"];

const CodeValidation = (props: CodeValidationProps) => {

    const [values, setValues] = useState(Array(props.size).fill(""));
    const inputRefs: React.MutableRefObject<any[]> = useRef([]);
    const disabled = props.disabled || false;

    useEffect(() => {
        if ((props.focusFirst || true) && !props.disabled) {
            const firstElement = inputRefs.current[0];
            setTimeout(() => firstElement.focus(), timeout);
        }
    }, [props]);

    const onChange = (index: number, e: any) => {
        const val = e.target.value;
        if (props.validate && !props.validate(val)) {
            return;
        }
        const newValues = [...values];
        newValues[index] = props.transformer ? props.transformer(val) : val;
        setValues(newValues);
        if (index !== (props.size - 1) && !isEmpty(val)) {
            const nextElement = inputRefs.current[index + 1];
            setTimeout(() => nextElement.focus(), timeout);
        } else if (!isEmpty(val)) {
            setTimeout(() => props.verify(newValues.join("")), timeout);
        }
    }

    const onKeyDown = (index: number, e: any) => {
        if (delKeys.includes(e.key) && index > 0 && e.target.value === "") {
            const previousElement = inputRefs.current[index - 1];
            previousElement.focus();
        }
        return true;
    }

    const onPaste = (index: number, e: any) => {
        if (index !== 0) {
            return false;
        }
        const data = e.clipboardData.getData('text/plain');
        const newValues = data.split("");
        //Only act if data is exactly the expected size
        if (newValues.length !== props.size) {
            return false;
        }
        //Every character needs to pass validate
        if (props.validate && newValues
            // @ts-ignore
            .map((val: string) => props.validate(val))
            .some((val: string) => !Boolean(val))) {
            return false;
        }
        // @ts-ignore
        setValues(props.transformer ? newValues.map((val: string) => props.transformer(val)) : newValues);
        const lastElement = inputRefs.current[props.size - 1];
        lastElement.focus();
        setTimeout(() => props.verify(newValues.join("")), timeout);
        return true;
    }

    return (
        <div className="sds--code-validation-container">
            <div className="sds--code-validation">
                {Array(props.size).fill("").map((_, index) =>
                    <input type="text"
                           key={`input_${index}`}
                           disabled={disabled ||
                               (isEmpty(values[index]) && index !== 0 && isEmpty(values[index - 1]))}
                           value={values[index] || ""}
                           onChange={e => onChange(index, e)}
                           onKeyDown={e => onKeyDown(index, e)}
                           onPaste={e => onPaste(index, e)}
                           maxLength={1}
                           ref={ref => inputRefs.current[index] = ref}
                           className={`value index_${index}`}/>
                )}
            </div>
            {props.info && <p className="info" dangerouslySetInnerHTML={{__html: sanitize(props.info)}}/>}
        </div>
    );
};

export default CodeValidation;
