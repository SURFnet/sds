import React, {ReactNode, useEffect, useRef, useState} from "react";
import "./Table.scss";
import {ReactComponent as SearchIcon} from "../../icons/functional-icons/search.svg";
import {isEmpty, sortObjects, valueForSort} from "../../common/utils";

import Button from "../Button/Button";
import Tooltip from "../Tooltip";

import {ReactComponent as ArrowDown} from "../../icons/functional-icons/arrow-down-2.svg";
import {ReactComponent as ArrowUp} from "../../icons/functional-icons/arrow-up-2.svg";
import {Pagination} from "../index";
import Loader from "../Loader";

export interface Column {
    key: string,
    hasLink: boolean,
    header?: string,
    nonSortable?: boolean,
    className?: string,
    showHeader: boolean,
    toolTip?: string,
    mapper?: Function
}

export interface TableProps {
    modelName?: string,
    showNew?: boolean,
    newLabel?: string,
    columns: Array<Column>,
    loading?: boolean,
    actions?: ReactNode,
    title?: string,
    filters?: ReactNode,
    rowLinkMapper?: Function,
    tableClassName?: string,
    className?: string,
    noEntitiesLabel?: string,
    searchPlaceHolder?: string,
    hideTitle?: boolean,
    onHover?: boolean,
    actionHeader?: string,
    pagination?: boolean,
    showActionsAlways?: boolean,
    displaySearch?: boolean,
    searchCallback?: Function | null,
    customSearch?: Function | null,
    entities: Array<Object>,
    searchAttributes?: Array<string>,
    newEntityFunc?: Function | null,
    defaultSort: string,
    rowClassNameResolver?: Function | null,
    searchAutoFocus?: boolean,
    busy?: boolean,
}

export const defaultTableProps: TableProps = {
    modelName: "",
    showNew: false,
    newLabel: "New",
    columns: [],
    loading: false,
    actions: null,
    title: "",
    filters: null,
    rowLinkMapper: () => true,
    tableClassName: "",
    className: "",
    noEntitiesLabel: "",
    searchPlaceHolder: "",
    hideTitle: false,
    onHover: false,
    actionHeader: "",
    pagination: true,
    showActionsAlways: false,
    displaySearch: true,
    searchCallback: null,
    customSearch: null,
    entities: [],
    searchAttributes: [],
    newEntityFunc: null,
    defaultSort: "",
    rowClassNameResolver: null,
    searchAutoFocus: false,
    busy: false,
}

const pageCount = 25;

const headerIcon = (column: Column, sorted: string, reverse: boolean) => {
    if (column.nonSortable) {
        return null;
    }
    if (column.key === sorted) {
        return reverse ? <ArrowDown/> : <ArrowUp/>
    }
    return null;
}

const Table = (props: React.PropsWithChildren<TableProps>) => {
    const [initial, setInitial] = useState(!isEmpty(props.customSearch));
    const [query, setQuery] = useState("");
    const [sorted, setSorted] = useState(props.defaultSort);
    const [reverse, setReverse] = useState(false);
    const [page, setPage] = useState(1);

    const searchRef = useRef();


    useEffect(() => {
        if (props.displaySearch && searchRef && searchRef.current) {
            // @ts-ignore
            searchRef.current.focus();
        }
    }, [props.displaySearch])

    const newEntity = () => {
        if (props.newEntityFunc && typeof props.newEntityFunc === "function") {
            props.newEntityFunc();
        }
    };

    const queryChanged = (e: any) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        if (props.customSearch) {
            props.customSearch(newQuery);
            setInitial(false);
        }
        if (props.searchCallback) {
            const searchResult = filterEntities(newQuery);
            props.searchCallback(searchResult);
        }
    }

    const renderSearch = () => {
        const filterClassName = (!props.hideTitle && props.filters) ? "filters-with-title" : `${props.modelName}-search-filters`;
        return (
            <section className="entities-search">
                {!props.hideTitle && <h2>{`${props.title} (${props.entities.length})`}</h2>}
                <div className={`${filterClassName} search-filter`}>{props.filters}</div>
                <div className={`search ${props.showNew ? "" : "standalone"}`}>
                    {(!isEmpty(props.searchAttributes) || props.customSearch) &&
                        <div className={"sds--text-field sds--text-field--has-icon"}>
                            <div className="sds--text-field--shape">
                                <div className="sds--text-field--input-and-icon">
                                    <input className={"sds--text-field--input"}
                                           type="search"
                                            // @ts-ignore
                                           ref={searchRef}
                                           onChange={queryChanged}
                                           value={query}
                                           placeholder={props.searchPlaceHolder}/>
                                    <span className="sds--text-field--icon">
                                    <SearchIcon/>
                                </span>
                                </div>
                            </div>
                        </div>}
                </div>
                {props.showNew &&
                    <Button onClick={newEntity}
                            txt={props.newLabel}/>
                }
            </section>
        );
    };

    const filterEntities = (newQuery: string) => {
        if (isEmpty(newQuery) || props.customSearch) {
            return props.entities;
        }
        const queryLower = newQuery.toLowerCase();
        return props.entities.filter(entity => (props.searchAttributes || []).some(attr => {
            const val = valueForSort(attr, entity);
            //When the application is unknown in Manage then the val is a React span child object
            return (isEmpty(val) || typeof val !== "string" || val.toLowerCase === undefined) ? false : val.toLowerCase().indexOf(queryLower) > -1;
        }));
    };

    const setSortedKey = (key: string) => {
        const reversed = (sorted === key ? !reverse : false);
        setSorted(key);
        setReverse(reversed)
    }

    const getEntityValue = (entity: Object, column: Column) => {
        if (column.mapper) {
            return column.mapper(entity);
        }
        // @ts-ignore
        return entity[column.key];
    }

    const onRowClick = (e: any, entity: Object) => {
        if (typeof props.rowLinkMapper === "function") {
            props.rowLinkMapper(e, entity);
        }
    }

    const entityRow = (entity: Object, index: number) => {
        // @ts-ignore
        const additionalClassName = isEmpty(props.rowClassNameResolver) ? "" : props.rowClassNameResolver(entity);
        // @ts-ignore
        return <tr key={`tr_${entity.id}_${index}`}
                   className={`${typeof props.rowLinkMapper === "function" ? "clickable" : ""} ${props.onHover ? "hoverable" : ""} ${additionalClassName}`}>
            {props.columns.map((column, i) =>
                <td key={`td_${column.key}_${i}`}
                    onClick={e => (column.key !== "check" && !column.hasLink) ?
                        onRowClick(e, entity) : undefined}
                    data-label={column.header}
                    className={`${column.key} ${column.nonSortable ? "" : "sortable"} ${column.className ? column.className : ""}`}>
                    {getEntityValue(entity, column)}
                </td>)}
        </tr>;
    }

    const renderEntities = (sortedEntities: Array<Object>) => {
        const hasEntities = !isEmpty(sortedEntities);
        const customEmptySearch = props.customSearch && (isEmpty(query) || query.trim().length < 3);
        const total = sortedEntities.length;
        if (props.pagination) {
            const minimalPage = Math.min(page, Math.ceil(sortedEntities.length / pageCount));
            sortedEntities = sortedEntities.slice((minimalPage - 1) * pageCount, minimalPage * pageCount);
        }
        return (
            <section className="entities-list">
                {(props.actions && (props.showActionsAlways || hasEntities)) &&
                    <div className={`actions-header ${props.actionHeader}`}>
                        {props.actions}
                    </div>}
                {hasEntities &&
                    <div className={"sds--table"}>
                        <table className={props.tableClassName || props.modelName}>
                            <thead>
                            <tr>
                                {props.columns.map((column, i) => {
                                    const showHeader = !props.actions || i < 1 || column.showHeader;
                                    return <th key={`th_${column.key}_${i}`}
                                               className={`${column.key} ${column.className || ""} ${column.nonSortable ? "" : "sortable"} ${showHeader ? "" : "hide"}`}
                                               onClick={() => !column.nonSortable && setSortedKey(column.key)}>
                                        {column.header}
                                        {column.toolTip && <Tooltip tip={column.toolTip}/>}
                                        {headerIcon(column, sorted, reverse)}
                                    </th>
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {sortedEntities.map((entity, index) =>
                                entityRow(entity, index)
                            )}
                            </tbody>
                        </table>
                    </div>}
                {(!hasEntities && !props.children && !initial && !customEmptySearch) &&
                    <p className="no-entities">{props.noEntitiesLabel}</p>}
                {props.pagination && <Pagination currentPage={page}
                                                 onChange={(nbr: number) => setPage(nbr)}
                                                 total={total}
                                                 pageCount={pageCount}/>}
            </section>
        );
    };

    if (props.loading) {
        return <Loader/>;
    }
    const filteredEntities = filterEntities(query);
    const sortedEntities = sortObjects(filteredEntities, sorted || props.defaultSort || props.columns[0].key, reverse);
    return (
        <div className={`sds--entities ${props.className}`}>
            {props.displaySearch && renderSearch()}
            {!props.loading && renderEntities(sortedEntities)}
            {props.busy && <Loader/>}
            <div>{props.children}</div>
        </div>);

};

export default Table;
