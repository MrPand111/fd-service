export interface Data {
    [key: string]: any;
}

export interface Interface {
    name: string;
    params: Param[];
}

export interface Param {
    name: string;
    type: string | ObjectType;
    required: boolean;
    items?: object;
}

export interface ObjectType {
    type: string;
    valueType: string;
}

export interface Config {
    root: string;
    output: string;
    help?: boolean;
}