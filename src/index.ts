export function unwrapUndefined<T, R>(o: T | undefined | null, block: (o: T) => R): R | undefined {
    if (o === undefined || o === null) {
        return undefined
    } else {
        return block(o)
    }
}

export function unwrapUndefinedString(o: any | undefined | null): string | undefined {
    return unwrapUndefined(o, String)
}

export function unwrapUndefinedNumber(o: any | undefined | null): number | undefined {
    return unwrapUndefined(o, Number)
}

export function unwrapUndefinedBigint(o: any | undefined | null): bigint | undefined {
    return unwrapUndefined(o, BigInt)
}

export function unwrapUndefinedDate(o: any | undefined | null): Date | undefined {
    return unwrapUndefined(o, o => new Date(o))
}

export function unwrapNull<T, R>(o: T | undefined | null, block: (o: T) => R): R | null {
    if (o === undefined || o === null) {
        return null
    } else {
        return block(o)
    }
}