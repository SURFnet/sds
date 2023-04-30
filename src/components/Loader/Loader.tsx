import React from "react";
import "./Loader.scss";

export interface LoaderProps {}

const Loader = (props: React.PropsWithChildren<LoaderProps>) => {

    return (
        <div className="sds--loading-container">
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
