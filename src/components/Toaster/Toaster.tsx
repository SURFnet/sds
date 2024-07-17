import React from "react";
import "./Toaster.scss";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import {ReactComponent as SuccessIcon} from "../../icons/functional-icons/success.svg";
import {ReactComponent as AlertIcon} from "../../icons/functional-icons/alert-triangle.svg";
import {ReactComponent as CloseIcon} from "../../icons/functional-icons/close.svg";

import ToasterType from "./ToasterType";
import {sanitize} from "../../common/utils";

export interface ToasterProps {
    toasterType: ToasterType;
    message?: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
    actionLabel?: string;
    large?: boolean;
    close?: React.MouseEventHandler<HTMLButtonElement>;
}

const Toaster = (props: React.PropsWithChildren<ToasterProps>) => {
    const type = `${props.toasterType.toLowerCase()}`;
    const large = props.large ? "sds--toaster--full-width" : "";
    const action = props.action ? "sds--toaster--has-action" : "";
    const className = `sds--toaster ${type} ${action} ${large}`;
    return (
        <div className={className}>
            <div className="sds--toaster--visual">
                {[ToasterType.Error, ToasterType.Warning].includes(props.toasterType) && <AlertIcon/>}
                {[ToasterType.Default, ToasterType.Info].includes(props.toasterType) && <InfoIcon/>}
                {[ToasterType.Success].includes(props.toasterType) && <SuccessIcon/>}
            </div>
            <div className="sds--toaster--textual">
                {props.message && <p dangerouslySetInnerHTML={{__html: sanitize(props.message)}}/>}
                {props.children && props.children}
                {props.action &&
                    <button type="button"
                            onClick={props.action}
                            className="sds--btn sds--btn--ghost--dark sds--btn--small">{props.actionLabel}</button>}
            </div>
            {props.close && <button className="sds--alert--actions" onClick={props.close}>
                <span className="text sds--visually-hidden">Close alert</span>
                <CloseIcon/>
            </button>}
        </div>);

};

export default Toaster;
