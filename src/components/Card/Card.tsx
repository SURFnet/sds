import React from "react";

import CardType from "./CardType";

export interface CardProps {
    cardType?: CardType;
}

const Card = (props: React.PropsWithChildren<CardProps>) => {
    const className = props.cardType || CardType.Default;
    return (
        <div className={className}>
            <div className="sds--card--inner">
                {props.children}
            </div>
        </div>);

};

export default Card;
