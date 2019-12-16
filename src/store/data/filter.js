import { Record } from 'immutable';

export const Filter = new Record({
    type: undefined,
    title: undefined,
    small_size: undefined,
    medium_size: undefined,
    large_size: undefined,
    params: undefined
});

export const Param = new Record({
    id: undefined,
    name: undefined,
    value: undefined,
    type: undefined,
    options: undefined
});

export const Option = new Record({
    value: undefined,
    label: undefined
});