export function getLocalStorage(key: string, prefix?: string) {
    if (prefix === undefined) {
        prefix = `${window.location.pathname}_`;
    }
    try {
        return localStorage[prefix + key];
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}

export function getLocalStorageNoPrefix(key: string) {
    return getLocalStorage(key, '');
}

export function setLocalStorage(key: string, val: string, prefix?: string) {
    if (prefix === undefined) {
        prefix = `${window.location.pathname}_`;
    }
    try {
        localStorage[prefix + key] = val;
    }
    catch (err) {
        console.error(err);
    }
}

export function setLocalStorageNoPrefix(key: string, val: string) {
    setLocalStorage(key, val, '');
}

export function iconURL(relpath: string) {
    return `/eggs/${relpath}`;
}
