
    export type RemoteKeys = 'sales';
    type PackageType<T> = T extends 'sales' ? typeof import('sales') :any;