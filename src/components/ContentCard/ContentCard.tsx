import React, {JSX, useState} from "react";
import "./ContentCard.scss";
import {stopEvent} from "../../common/utils";

export interface ContentCardProps {
    title: string,
    description?: string,
    icon?: JSX.Element,
    buttonAction?: React.MouseEventHandler<HTMLButtonElement>;
    buttonLabel?: string,
    links?: Array<string>

}

const ContentCard = (props: React.PropsWithChildren<ContentCardProps>) => {

    const [showMore, setShowMore] = useState(props.description && props.description.length > 190
        && props.description.substring(190).indexOf(" ") > 0);

    if (props.children) {
        return (
            <div className="sds--content-card">
                {props.children}
            </div>
        )
    }

    const toggleShowMore = (e:any) => {
        stopEvent(e);
        setShowMore(!showMore);
    }

    const description = props.description ? props.description.substring(0, 190 + props.description.substring(190).indexOf(" ")) : null;

    return (
        <div className="sds--content-card">
            <div className="sds--content-card--main">
                {props.icon && <div className="sds--content-card--visual">
                    <span className="sds--placeholder-image">
                        {props.icon}
                    </span>
                </div>}
                <div className="sds--content-card--textual">
                    <h4 className="sds--space--bottom--1">{props.title}</h4>
                    {description && <div className="sds--content-card--text-and-actions">
                        <p>{showMore ? description : props.description}
                        {showMore && <a className={"show-more"} href="#" onClick={toggleShowMore}>
                            More
                        </a>}
                        {(!showMore && props.description !== description) &&
                        <a className={"show-more"} href="#" onClick={toggleShowMore}>
                            Less
                        </a>}</p>
                        {props.buttonAction && <div className="sds--content-card--actions">
                            <button type="button"
                                    className="sds--btn sds--btn--primary"
                                    onClick={props.buttonAction}>
                                {props.buttonLabel}
                            </button>
                        </div>}
                    </div>}
                </div>
            </div>
            {props.links &&
            <div className="sds--content-card--bottom">
                <nav>
                    <ul>
                        {props.links.map((link, index) =>
                            <li key={index}>
                                <a href={link}
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    {link}
                                </a>
                            </li>)}
                    </ul>
                </nav>
            </div>}
        </div>
    );

};

export default ContentCard;
