export declare function unwrapUndefined<T, R>(o: T | undefined | null, block: (o: T) => R): R | undefined;
export declare function unwrapUndefinedString(o: any | undefined | null): string | undefined;
export declare function unwrapUndefinedNumber(o: any | undefined | null): number | undefined;
export declare function unwrapUndefinedBigint(o: any | undefined | null): bigint | undefined;
export declare function unwrapUndefinedDate(o: any | undefined | null): Date | undefined;
export declare function unwrapNull<T, R>(o: T | undefined | null, block: (o: T) => R): R | null;
