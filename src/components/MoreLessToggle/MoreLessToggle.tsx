import React, {useState} from "react";
import "./MoreLessToggle.scss";
import {isEmpty, stopEvent} from "../../common/utils";


export interface MoreLessToggleProps {
    txt: string;
    moreLabel?: string;
    lessLabel?: string;
}

const MoreLessToggle = (props: MoreLessToggleProps) => {
    const [showMore, setShowMore] = useState(!isEmpty(props.txt) && props.txt.length > 190
        && props.txt.substring(190).indexOf(" ") > -1);
    const [showLess, setShowLess] = useState(false);

    const toggleShowMore = (e: any) => {
        stopEvent(e);
        const isShowingMore = showMore;
        setShowMore(!isShowingMore);
        setShowLess(isShowingMore);
    }

    const txtToDisplay = isEmpty(props.txt) ? props.txt : props.txt.substring(0, 190 + props.txt.substring(190).indexOf(" "));
    return (
        <span className="sds--more-less-toggle">
            {showMore ? txtToDisplay : props.txt}
            {showMore && <a className={"show-more"} href="/more" onClick={toggleShowMore}>
                {props.moreLabel || "More"}
            </a>}
            {showLess &&
                <a className={"show-more"} href="/less" onClick={toggleShowMore}>
                    {props.lessLabel || "Less"}
                </a>}
        </span>
    )
};

export default MoreLessToggle;
