import { LOAD_DATA, SORTED_DATA, SEARCH_FILTER, CHOSEN_PAGE } from "./types";

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

export const chosenPage = (page) => {
    return {
        type: CHOSEN_PAGE,
        page: page
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