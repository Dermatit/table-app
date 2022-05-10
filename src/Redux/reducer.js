import { LOAD_DATA, SEARCH_FILTER, SORTED_DATA } from "./types";

const initialState = {
    data: [],
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
        };
        case SEARCH_FILTER: {
            const filteredData = state.data.filter(elem => 
                Object.values(elem).map(elem => 
                    elem.toString().toLowerCase().includes(action.value.toLowerCase())).some((elem => 
                        elem === true))
            );
            return {
                ...state,
                filteredData: filteredData
            };
        };
        case SORTED_DATA: {
            return {
                ...state,
                filteredData: action.data
            };
        };
        default: return state;
    }
}

export const rootReducer = tableReducer;