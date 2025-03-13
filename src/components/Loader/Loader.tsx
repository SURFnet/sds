import React from "react";
import "./Loader.scss";
import LogoColor from "../Logo/LogoColor";

export interface LoaderProps {
    className?: string,
}

const Loader = (props: React.PropsWithChildren<LoaderProps>) => {
    const className = `sds--loading-container ${props.className || ""}`
    return (
        <div className={className}>
            <div className="sds--loading">
                <span className="sds--loading--dot"/>
                <span className="sds--loading--dot"/>
                <span className="sds--loading--dot"/>
            </div>
            {props.children && props.children}
        </div>
    );
};

export default Loader;
