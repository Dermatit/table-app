import { LOAD_DATA, SEARCH_FILTER, CHOSEN_PAGE, SORTED_DATA } from "./types";

const initialState = {
    data: [],
    page: [0, 10],
    filteredData: []
};

const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DATA: {
            const newData = action.data.map(elem => ({
                id: elem.id,
                title: elem.title,
                body: elem.body
            }));
            return {
                ...state,
                data: newData,
                filteredData: newData
            };
        }
        case CHOSEN_PAGE: {
            if (state.page[0] >= 0 && state.page[1] <= state.data.length) {
                const page = initialState.page.map(elem => elem + action.page * 10 - 10);
                return {
                    ...state,
                    page: page
                };
            };
        };
        case SEARCH_FILTER: {
            const filteredData = state.data.filter(elem => 
                Object.values(elem).map(elem => 
                    elem.toString().toLowerCase().includes(action.value.toLowerCase())).some((elem => 
                        elem === true))
            );
            return {
                ...state,
                filteredData: filteredData,
                page: [0, 10]
            };
        };
        case SORTED_DATA: {
            return {
                ...state,
                filteredData: [...action.data],
            };
        };
        // case SORT_DATA:
        //     const sortedData = action.data.map(elem => elem);
        //     return {
        //         ...state,
        //         data: sortedData
        //     };
        // case CURRENT_PAGE:
        //     return {
        //         ...state,
        //         currentPage: action.page
        //     }
        // case SEARCH_FILTER:
        //     const filteredData = action.data.map(elem => elem);
        //     return {
        //         ...state,
        //         data: filteredData,
        //         value: action.value
        //     }  
        default: return state;
    }
}

export const rootReducer = tableReducer;