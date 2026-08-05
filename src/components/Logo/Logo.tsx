import React from "react";
import "./Logo.scss";
import {ReactComponent as LogoIcon} from "../../icons/logo-surf.svg";
import LogoType from "./LogoType";
import LogoColor from "./LogoColor";

export interface LogoProps {
    label: string,
    position: LogoType,
    color?: LogoColor,
    action?: Function,
    CustomLogo?: React.ComponentType;
}

const Logo = (props: LogoProps) => {
    const colorClassName = (props.color || LogoColor.Black) === LogoColor.White ? "sds--branding--negative" : "";
    const className = `sds--logo sds--branding sds--branding--name-${props.position.toLowerCase()} ${colorClassName} ${props.action ? "link" :""} `;

    const logoClicked = () => {
        if (props.action) {
            props.action();
        }
    }


    return (
        <div className={className} onClick={logoClicked}>
                <span className="sds--branding--visual">
                   {props.CustomLogo ? <props.CustomLogo/> :<LogoIcon/>}
                </span>
            <span className="sds--branding--textual">{props.label}</span>
        </div>
    );
};

export default Logo;
