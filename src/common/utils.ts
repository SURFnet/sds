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
    if (obj && obj.getTime) {
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
    return (crypto.randomUUID && crypto.randomUUID()) || Math.round((new Date().getTime() * Math.random() * 1000)).toString()
}
