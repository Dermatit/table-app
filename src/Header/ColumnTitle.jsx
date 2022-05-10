import { ReactComponent as DownArrow } from '../Assets/DownArrow.svg';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useState, memo, useEffect } from 'react';
import { sortedData } from '../Redux/actions';

export const ColumnTitle = memo(({elem, columnTitleClick}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.filteredData, shallowEqual);

    const [localData, setLocalData] = useState();
    const [sort, setSort] = useState(true);

    useEffect(() => setLocalData([...data]),[data]);

    const sortOrder = () => {
        if (sort) {
            dispatch(sortedData(localData.sort((a, b) => {
                if (a[elem].toLowerCase() < b[elem].toLowerCase()) {
                    return -1;
                }
                if (a[elem].toLowerCase() > b[elem].toLowerCase()) {
                    return 1;
                }
                return 0;
            })));
            columnTitleClick(true);
            setSort(prev => !prev);
        }
        else {
            dispatch(sortedData(localData.reverse()));
            setSort(prev => !prev);
        }
    }

    return (
        <div className='column-title' onClick={() => sortOrder()}>
            <p>Заголовок</p>
            <div><DownArrow/></div>
        </div>
    );
});