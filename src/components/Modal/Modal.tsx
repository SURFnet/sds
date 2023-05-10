import React from "react";
import "./Modal.scss";
import {ReactComponent as CloseIcon} from "../../icons/functional-icons/close.svg";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import AlertType from "../Alert/AlertType";
import ButtonType from "../Button/ButtonType";
import {sanitize} from "../../common/utils";

export interface ModalProps {
    confirm: Function;
    title: string;
    question?: string;
    cancel?: React.MouseEventHandler<HTMLButtonElement>;
    alertType?: AlertType;
    subTitle?: string;
    confirmDisabled?: boolean;
    confirmationButtonLabel?: string;
    cancelButtonLabel?: string;
    full?: boolean;
    className?: string;
}

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
    const alertType = props.alertType || AlertType.Info;
    const full = props.full ? "full" : "";
    const className = props.className || "";
    return (
        <div className="sds--modal sds--backdrop">
            <div className={`sds--modal--container ${full} ${className}`}>
                <div className="sds--modal--title">
                    <p className="sds--text--h4">{props.title}</p>
                    {props.cancel && <span onClick={props.cancel}><CloseIcon/></span>}
                </div>
                {props.alertType && <Alert alertType={alertType} message={props.subTitle || ""} asChild={true}/>}
                <div className="sds--modal--content">
                    <div className="sds--text--rich">
                        {props.question && <p dangerouslySetInnerHTML={{__html: sanitize(props.question)}}/>}
                        {props.children}
                    </div>
                    <div className="sds--modal--actions sds--actions--outer sds--space--top--5">
                        {props.cancel && <Button onClick={props.cancel}
                                                 type={ButtonType.Secondary}
                                                 txt={props.cancelButtonLabel}/>}
                        <Button onClick={props.confirm}
                                type={ButtonType.Primary}
                                disabled={props.confirmDisabled}
                                txt={props.confirmationButtonLabel}/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Modal;
