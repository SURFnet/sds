import React from "react";
import "./UserInfo.scss";
import {ReactComponent as ArrowDownIcon} from "../../icons/functional-icons/arrow-down-2.svg";

export interface UserInfoProps {
    userName: string;
    organisationName: string;
    isOpen: boolean;
    toggle: any;
}

const UserInfo = (props: React.PropsWithChildren<UserInfoProps>) => {

    return (
        <nav className={`sds--user-info ${props.isOpen ? "is-open" : ""}`}>
            <div className="sds--user-info--textual">
                <p className="name">{props.userName}</p>
                <p className="role sds--text--body--small">{props.organisationName}</p>
            </div>
            <button type="button" className="sds--user-info--button" onClick={props.toggle}>
                <ArrowDownIcon/>
            </button>
            <div className="sds--user-info--dropdown">
                {props.children && props.children}
            </div>
        </nav>
    );
};

export default UserInfo;
