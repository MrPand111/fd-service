import { Data } from './types';

export const transFirstLetterUpperCase = (string: string) => {
    const upper = string[0].toUpperCase();
    return upper + string.slice(1);
};

export const get = (obj: Data, keys: string, defaultValue?: any) => {
    const keyList = keys.split('.');
    let res = obj;
    while(keyList.length) {
        try {
            res = res[`${keyList.shift()}`];
        } catch(e) {
            return defaultValue;
        }
    }
    return res;
};
