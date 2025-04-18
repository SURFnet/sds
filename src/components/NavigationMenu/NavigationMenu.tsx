import React, {useState} from "react";
import "./NavigationMenu.scss";
import Logo from "../Logo/Logo";
import LogoType from "../Logo/LogoType";
import {ReactComponent as MenuCloseIcon} from "../../icons/menu-close.svg";
import {ReactComponent as SettingsIcon} from "../../icons/settings.svg";
import {stopEvent} from "../../common/utils";


export interface NavigationMenuItem {
    Logo: React.ComponentType;
    label: string;
    href: string;
}

export interface NavigationMenuProps {
    items: Array<NavigationMenuItem>;
    logoLabel: string;
    title: string;
    navigate: Function;
    active?: string;
}

const NavigationMenu = (props: NavigationMenuProps) => {

    const [activeItem, setActiveItem] = useState(props.active || props.items[0].label);

    const onClick = (e: any, href: string, label: string) => {
        stopEvent(e);
        props.navigate(href);
        setActiveItem(label)
    }

    return (
        <div className="sds--navigation-menu">
            <div className="sds--navigation-menu-header">
                <Logo label={props.logoLabel} position={LogoType.Up}/>
                <MenuCloseIcon/>
            </div>
            <div className="sds--navigation-menu-inner">
                <div className="sds--navigation-menu-title">
                    <h2>{props.title}</h2>
                    <SettingsIcon/>
                </div>
                <div className="sds--navigation-menu-items">
                {props.items.map((item, index) =>
                    <div className={`sds--navigation-menu-item ${activeItem === item.label ? "active" : ""}`}>
                        <item.Logo/>
                        <a href={`/${item.href}`}
                           onClick={e => onClick(e, item.href, item.label)}

                           key={index}>
                            {item.label}
                        </a>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;
