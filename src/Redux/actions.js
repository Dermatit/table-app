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


// export const sortData = (value, column, order, page) => {
//     return async dispatch => {
//         await fetch(`https://jsonplaceholder.typicode.com/posts?q=${value}&_sort=${column}&_order=${order}&_page=${page}`)
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: SORT_DATA,
//             data: data,
//         }));
//     };
// };

// export const searchFilter = (value) => {
//     return async dispatch => {
//         await fetch(`https://jsonplaceholder.typicode.com/posts?q=${value}&_page=1`)
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: SEARCH_FILTER,
//             data: data,
//             value: value
//         }));
//     };
// };

// export const currentPage = (page) => {
//     return {
//         type: CURRENT_PAGE,
//         page: page
//     }
// }