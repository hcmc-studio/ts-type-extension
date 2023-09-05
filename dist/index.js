export function unwrapUndefined(o, block) {
    if (o === undefined || o === null) {
        return undefined;
    }
    else {
        return block(o);
    }
}
export function unwrapNull(o, block) {
    if (o === undefined || o === null) {
        return null;
    }
    else {
        return block(o);
    }
}
