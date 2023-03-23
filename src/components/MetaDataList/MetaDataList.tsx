import React, {ChangeEvent, useEffect, useState} from "react";
import "./MetaDataList.scss";
import {stopEvent} from "../../common/utils";

export interface MetaDataListItem {
    label: string;
    values: Array<any>
    index? : number;
}

export interface MetaDataListProps {
    items: Array<MetaDataListItem>;
    moreLabel?: string;
    lessLabel?: string;
    cutOffNumber?: number
}

const MetaDataList = (props: MetaDataListProps) => {
    const [showMoreLess, setShowMoreOrLess] = useState<Record<number, boolean>> ({})

    useEffect(() => {
        setShowMoreOrLess(Object.fromEntries([props.items.map((item, index) => [index, false])]))
    }, [props]);

    const cutOffNumber = props.cutOffNumber || 2;

    const toggleMoreLess = (event: ChangeEvent, index: number) => {
        stopEvent(event);
        showMoreLess[index] = !showMoreLess[index];
        setShowMoreOrLess({...showMoreLess});
    }

    const cutOffItems = props.moreLabel && props.lessLabel;

    return (
        <dl className="sds--metadata-list">
            {props.items.map((item, index) =>
                <div key={index} className="sds--metadata-list--item">
                    <dt>{item.label}</dt>
                    {item.values.slice(0, showMoreLess[index] || !cutOffItems ? item.values.length : cutOffNumber)
                        .map((val,i )=> <dd key={i}>{val}</dd>)}
                    {(!showMoreLess[index] && item.values.length === (cutOffNumber + 1) && cutOffItems) &&
                        <dd key={cutOffNumber + 1}>{item.values[cutOffNumber + 1]}</dd>}
                    {(item.values.length > (cutOffNumber + 1) && cutOffItems) &&
                    <a href={`#${showMoreLess[index] ? props.lessLabel : props.moreLabel}`}
                        onClick={(e: any) => toggleMoreLess(e, index)}>
                        {showMoreLess[index] ? props.lessLabel : props.moreLabel}
                    </a>}
                </div>
            )}
        </dl>
    );
};

export default MetaDataList;
