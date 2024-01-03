import React from "react";
import "./IconButton.scss";

export interface IconButtonProps {
    onClick: Function;
}

const IconButton = (props: React.PropsWithChildren<IconButtonProps>) => {

    return (
        <button type="button"
                className="sds--icon-button"
                onClick={() => props.onClick()}>
            {props.children && props.children}
        </button>
    );
};

export default IconButton;
