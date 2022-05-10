import { LOAD_DATA, SORTED_DATA, SEARCH_FILTER } from "./types";

export const loadData = () => {
    return async dispatch => {
        await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => dispatch({
            type: LOAD_DATA,
            data: data,
        }));
    };
};

export const searchFilter = (value) => {
    return {
        type: SEARCH_FILTER,
        value: value
    };
};

export const sortedData = (data) => {
    return {
        type: SORTED_DATA,
        data: data
    };
};