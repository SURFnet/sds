import React, {ReactElement} from "react";
import "./BreadCrumb.scss";
import {ReactComponent as ArrowRightIcon} from "../../icons/functional-icons/arrow-right-2.svg";

export interface BreadCrumbItem {
    component: ReactElement
}

export interface BreadCrumbProps {
    items: Array<BreadCrumbItem>;
}

const BreadCrumb = (props: BreadCrumbProps) => {
    return (
        <nav className="sds--breadcrumb sds--text--body--small" aria-label="breadcrumbs">
            <ol className="sds--breadcrumb--list">
                {props.items.map((item, index) =>
                    <li key={index}>
                        {item.component}
                        {(index + 1) !== props.items.length &&
                        <span className="sds--breadcrumb--sds--divider">
                            <ArrowRightIcon/>
                        </span>}
                    </li>
                )}
            </ol>
        </nav>
    );
};

export default BreadCrumb;
