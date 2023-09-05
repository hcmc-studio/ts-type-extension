export function unwrapUndefined(o, block) {
    if (o === undefined || o === null) {
        return undefined;
    }
    else {
        return block(o);
    }
}
export function unwrapUndefinedString(o) {
    return unwrapUndefined(o, String);
}
export function unwrapUndefinedNumber(o) {
    return unwrapUndefined(o, Number);
}
export function unwrapUndefinedBigint(o) {
    return unwrapUndefined(o, BigInt);
}
export function unwrapUndefinedDate(o) {
    return unwrapUndefined(o, o => new Date(o));
}
export function unwrapNull(o, block) {
    if (o === undefined || o === null) {
        return null;
    }
    else {
        return block(o);
    }
}
