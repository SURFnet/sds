import React from "react";
import "./ErrorIndicator.scss";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import {ReactComponent as SuccessIcon} from "../../icons/functional-icons/success.svg";
import {ReactComponent as AlertIcon} from "../../icons/functional-icons/alert-triangle.svg";

import {ErrorIndicatorType} from "./ErrorIndicatorType";
import {sanitize} from "../../common/utils";

export interface ErrorIndicatorProps {
    errorIndicatorType?: ErrorIndicatorType;
    message?: string;
}

const ErrorIndicator = (props: React.PropsWithChildren<ErrorIndicatorProps>) => {
    const errorIndicatorType = props.errorIndicatorType || ErrorIndicatorType.Error;
    const type = `${errorIndicatorType.toLowerCase()}`;
    return (
        <div className={`sds--error-indicator ${type}`}>
            <div className="sds--error-indicator--visual">
                {[ErrorIndicatorType.Error, ErrorIndicatorType.Warning].includes(errorIndicatorType) &&
                    <AlertIcon/>}
                {[ErrorIndicatorType.Default, ErrorIndicatorType.Info].includes(errorIndicatorType) &&
                    <InfoIcon/>}
                {[ErrorIndicatorType.Success].includes(errorIndicatorType) && <SuccessIcon/>}
            </div>
            <div className="sds--error-indicator-textual">
                {props.message && <p dangerouslySetInnerHTML={{__html: sanitize(props.message)}}/>}
            </div>
        </div>);

};

export default ErrorIndicator;
