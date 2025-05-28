
    export type RemoteKeys = 'analytics';
    type PackageType<T> = T extends 'analytics' ? typeof import('analytics') :any;