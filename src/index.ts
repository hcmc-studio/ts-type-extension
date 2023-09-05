export function unwrapUndefined<T, R>(o: T | undefined | null, block: (o: T) => R): R | undefined {
    if (o === undefined || o === null) {
        return undefined
    } else {
        return block(o)
    }
}

export function unwrapNull<T, R>(o: T | undefined | null, block: (o: T) => R): R | null {
    if (o === undefined || o === null) {
        return null
    } else {
        return block(o)
    }
}