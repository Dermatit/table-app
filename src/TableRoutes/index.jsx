import { Table } from "../Table";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from "../Redux/actions";
import { Routes, Route } from 'react-router-dom';

export const TableRoutes = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector(state => state.filteredData);

    const pagesNumber = Array.from({length: Math.ceil(filteredData.length/10)}, (v, k) => k+1);

    useEffect(() => {
        dispatch(loadData())
    }, []);

    return (
        <Routes>
            {pagesNumber.map(page => <Route path={`/${page}`} key={page} element={<Table page={page}/>}/>)}
            <Route path='*' element={<Table page={1}/>}/>
        </Routes>
    );
};