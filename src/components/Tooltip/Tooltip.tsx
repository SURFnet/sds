import React from "react";
import "./Tooltip.scss";
import {PlacesType, Tooltip as ReactTooltip} from "react-tooltip";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import {sanitize} from "../../common/utils";

export interface TooltipProps {
    tip: string;
    clickable?: boolean;
    standalone?: boolean;
    place?: PlacesType;
}

const Tooltip = (props: React.PropsWithChildren<TooltipProps>) => {
    const uniqueAnchorId = "A" + crypto.randomUUID();
    return (
        <div  id={uniqueAnchorId} className={`sds--tooltip-container ${props.standalone ? "" : "sibbling"}`}>
            {props.children ? React.Children.map(props.children, (child: any) => child) : <InfoIcon/>}
            <ReactTooltip anchorSelect={"#" + uniqueAnchorId}
                          place={props.place}
                          clickable={props.clickable || false}
                          disableStyleInjection={'core'}
                          html={sanitize(props.tip)}/>
        </div>
    );
};

export default Tooltip;
