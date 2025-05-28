
    export type RemoteKeys = 'inventory';
    type PackageType<T> = T extends 'inventory' ? typeof import('inventory') :any;