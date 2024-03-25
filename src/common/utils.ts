import DOMPurify from "isomorphic-dompurify";

export function stopEvent(e: any) {
    if (e !== undefined && e !== null) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    return true;
}

export function isEmpty(obj: any) {
    if (obj === undefined || obj === null) {
        return true;
    }
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    if (typeof obj === "string") {
        return obj.trim().length === 0;
    }
    if (obj && obj.getTime && typeof obj.getTime === "function") {
        return obj.getTime() !== obj.getTime();
    }
    if (typeof obj === "object") {
        return Object.keys(obj).length === 0;
    }
    return false;
}

export function sanitize(text: string) {
    return DOMPurify.sanitize(text, {ADD_ATTR: ["target"]})
}

export function pseudoGuid() {
    return (crypto.randomUUID && typeof crypto.randomUUID === "function" && crypto.randomUUID()) ||
        Math.round((new Date().getTime() * Math.random() * 1000)).toString()
}

export function sortObjects(objects: Array<Object>, attribute: string, reverse: boolean) {
    return [...objects].sort((a, b) => {
        const val1 = valueForSort(attribute, a);
        const val2 = valueForSort(attribute, b);
        if (typeof val1 === "number" && typeof val2 === "number") {
            return (val1 - val2) * (reverse ? -1 : 1);
        }
        const aS = val1.toString();
        const bS = val2.toString();
        if (aS.length === 0) {
            return (reverse ? -1 : 1);
        }
        if (bS.length === 0) {
            return (reverse ? 1 : -1);
        }
        return aS.localeCompare(bS) * (reverse ? -1 : 1);
    });
}

export function valueForSort(attribute: string, obj: Object) : any{
    if (attribute.endsWith("_date")) {
        // @ts-ignore
        return obj[attribute] || Number.MAX_SAFE_INTEGER;
    }
    // @ts-ignore
    const val = obj[attribute];
    if (val.getTime && typeof val.getTime === "function") {
        return val.getTime();
    }
    if (!isEmpty(val)) {
        return val;
    }
    const parts = attribute.replace(/__/g, ".").split(".");
    const res = parts.reduce((acc, e) => {
        if (isEmpty(acc)) {
            return "";
        }
        // @ts-ignore
        return acc[e];
    }, obj);
    return res || "";

}
