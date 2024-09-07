import React from "react";
import "./Tooltip.scss";
import {PlacesType, Tooltip as ReactTooltip} from "react-tooltip";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import {pseudoGuid, sanitize} from "../../common/utils";

export interface TooltipProps {
    tip: string;
    clickable?: boolean;
    standalone?: boolean;
    place?: PlacesType;
}

const Tooltip = (props: React.PropsWithChildren<TooltipProps>) => {
    const uniqueAnchorId = "A" + pseudoGuid();
    return (
        <div data-tooltip-id={uniqueAnchorId}
             className={`sds--tooltip-container ${props.standalone ? "" : "sibbling"}`}
             data-tooltip-html={sanitize(props.tip)}>
            {props.children ? React.Children.map(props.children, (child: any) => child) : <InfoIcon/>}
            <ReactTooltip id={uniqueAnchorId}
                          place={props.place}
                          clickable={props.clickable || false}
                          disableStyleInjection={'core'}
            />
        </div>
    );
};

export default Tooltip;
