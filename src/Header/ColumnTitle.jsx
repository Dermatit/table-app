import { ReactComponent as DownArrow } from '../Assets/DownArrow.svg';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useState, memo } from 'react';
import { sortedData } from '../Redux/actions';

export const ColumnTitle = memo(({elem, columnTitleClick, title}) => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.filteredData, shallowEqual);
    const localData = [...data];
    const sortedLocalData = localData.sort((a, b) => {
        if (a[elem].toLowerCase() < b[elem].toLowerCase()) {
            return -1;
        }
        if (a[elem].toLowerCase() > b[elem].toLowerCase()) {
            return 1;
        }
        return 0;
    });

    const [toggleSort, setToggleSort] = useState(true);

    const sortOrder = () => {
        if (toggleSort) {
            columnTitleClick(true);
            dispatch(sortedData(sortedLocalData));
            setToggleSort(prev => !prev);
        }
        else {
            dispatch(sortedData(localData.reverse()));
            setToggleSort(prev => !prev);
        }
    };
    
    return (
        <div className='column-title' onClick={()=>sortOrder()}>
            <p>{title}</p>
            <div className={toggleSort? 'rotate' : 'rotate-none'}><DownArrow/></div>
        </div>
    );
});