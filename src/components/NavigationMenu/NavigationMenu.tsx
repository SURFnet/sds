import React, {useState} from "react";
import "./NavigationMenu.scss";
import Logo from "../Logo/Logo";
import LogoType from "../Logo/LogoType";
import {ReactComponent as MenuCloseIcon} from "../../icons/menu-close.svg";
import {ReactComponent as SettingsIcon} from "../../icons/settings.svg";
import {stopEvent} from "../../common/utils";
import LogoColor from "../Logo/LogoColor";
import Tooltip from "../Tooltip";


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
    settingToolTip?: string;
    active?: string;
}

const NavigationMenu = (props: React.PropsWithChildren<NavigationMenuProps>) => {

    const [activeItem, setActiveItem] = useState(props.active || props.items[0].label);
    const [collapsed, setCollapsed] = useState(false);

    const onClick = (e: any, href: string, label: string) => {
        stopEvent(e);
        props.navigate(href);
        setActiveItem(label)
    }

    return (
        <div className={`sds--navigation-menu ${collapsed && "collapsed"}`}>
            <div className="sds--navigation-menu-header">
                {!collapsed && <Logo label={props.logoLabel} position={LogoType.Bottom} color={LogoColor.White}/>}
                <div className={`close-container ${collapsed && "collapsed"}`}
                     onClick={() => setCollapsed(!collapsed)}>
                    <MenuCloseIcon/>
                </div>
            </div>
            {!collapsed &&
                <div className="sds--navigation-menu-inner">
                    <div className="sds--navigation-menu-title">
                        <h2>{props.title}</h2>
                        <Tooltip tip={props.settingToolTip || ""}
                                 place={"bottom-start"}
                                 children={<SettingsIcon/>}/>
                    </div>
                    <div className="sds--navigation-menu-items">
                        {props.items.map((item, index) =>
                            <div className={`sds--navigation-menu-item ${activeItem === item.label ? "active" : ""}`}>
                                <item.Logo/>
                                <a key={index}
                                   href={`/${item.href}`}
                                   onClick={e => onClick(e, item.href, item.label)}>
                                    {item.label}
                                </a>
                            </div>)}
                    </div>
                </div>}
            <div className={`sds--navigation-menu-children ${collapsed && "collapsed"}`}>
                {props.children && props.children}
            </div>
        </div>
    );
};

export default NavigationMenu;
