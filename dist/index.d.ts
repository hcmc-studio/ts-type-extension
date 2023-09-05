export declare function unwrapUndefined<T, R>(o: T | undefined | null, block: (o: T) => R): R | undefined;
export declare function unwrapNull<T, R>(o: T | undefined | null, block: (o: T) => R): R | null;
