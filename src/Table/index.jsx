import { TableString } from "./TableString";
import './index.scss'

import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { loadData } from "../Redux/actions";

export const Table = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector(state => state.filteredData);
    const page = useSelector(state => state.page);

    useEffect(() => {
        dispatch(loadData());
    }, []);
    
    return (
        <div className='table'>
            {filteredData.slice(...page).map(elem => <TableString {...elem}/>)}
        </div>
    );
};