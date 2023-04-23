import React, {useEffect, useState} from "react";
import "./Accordion.scss";
import {ReactComponent as ArrowDownIcon} from "../../icons/functional-icons/arrow-down-2.svg";

export interface AccordionItem {
    headerText: string;
    contentText: string;
    open?: boolean;
}

export interface AccordionProps {
    items: Array<AccordionItem>;
}

const Accordion = (props: AccordionProps) => {

    const [items, setItems] = useState<Record<string, boolean>>({});

    useEffect(() => {
        setItems(Object.fromEntries(
            props.items.map((item, index) => [index.toString(10), item.open || false])
        ));
    }, [props]);

    const toggleItem = (index: number) => {
        items[index] = !items[index];
        setItems({...items});
    }

    return (
        <div className="sds--accordion sds--text--body--large">
            {props.items.map((item, index) =>
                <div key={index} className={`sds--accordion--item ${items[index] ? "is-open" : ""}`}>
                    <button className="sds--accordion--trigger sds--btn-reset" onClick={() => toggleItem(index)}>
                        <span className="icon">
                            <ArrowDownIcon/>
                        </span>
                        <span className="text">{item.headerText}</span>
                    </button>
                    <div className="sds--accordion--content">
                        <p>{item.contentText}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accordion;
