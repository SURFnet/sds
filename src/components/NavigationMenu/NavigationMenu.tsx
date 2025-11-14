import React, {Fragment, useState} from "react";
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
    active: boolean;
    tooltip?: string;
}

export interface NavigationMenuGroup {
    items: Array<NavigationMenuItem>;
    label?: string;
    className?: string;
}

export interface NavigationMenuProps {
    groups: Array<NavigationMenuGroup>;
    logoLabel: string;
    title?: string;
    settingToolTip?: string;
    SettingLogo?: React.ComponentType;
    setActiveMenuItem: Function;
}

const NavigationMenu = (props: React.PropsWithChildren<NavigationMenuProps>) => {

    const [collapsed, setCollapsed] = useState(false);

    const onClick = (e: any, item: NavigationMenuItem) => {
        stopEvent(e);
        props.setActiveMenuItem(item);
    }

    const itemElement = (item: NavigationMenuItem, index: number) => {
        return (
            <div key={index}
                 onClick={e => onClick(e, item)}
                 className={`sds--navigation-menu-item ${item.active ? "active" : ""}`}>
                <item.Logo/>
                <span className="link">{item.label}</span>
            </div>
        );
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
                    {props.title &&
                        <div className="sds--navigation-menu-title">
                            <h2>{props.title}</h2>
                            {props.settingToolTip &&
                                <Tooltip tip={props.settingToolTip || ""}
                                         place={"bottom-start"}
                                         children={props.SettingLogo ? <props.SettingLogo/> : <SettingsIcon/>}/>}
                        </div>}
                    <div className="sds--navigation-menu-items">
                        {props.groups.map((group, index) =>
                            <div key={index} className={`sds--navigation-group-item ${group.className || ""}`}>
                                {group.label && <p className="group-label">{group.label}</p>}
                                {group.items.map((item, innerIndex) => {
                                    const itemDiv = itemElement(item, innerIndex);
                                    return item.tooltip ? <Fragment key={innerIndex}>
                                        <Tooltip tip={item.tooltip} place={"right-end"} children={itemDiv}/>
                                    </Fragment> : itemDiv;
                                })}
                            </div>
                        )}
                    </div>
                </div>}
            <div className={`sds--navigation-menu-children ${collapsed && "collapsed"}`}>
                {props.children && props.children}
            </div>
        </div>
    );
};

export default NavigationMenu;
