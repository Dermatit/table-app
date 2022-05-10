import { ReactComponent as DownArrow } from '../Assets/DownArrow.svg';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useState, memo } from 'react';
import { sortedData } from '../Redux/actions';

export const ColumnTitleId = memo(({columnTitlesClicked, columnTitleClick}) => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.filteredData, shallowEqual);
    const localData = [...data];
    const sortedLocalData = localData.sort((a, b) => {
        return a.id - b.id;
    });
    
    const [toggleSort, setToggleSort] = useState(true);

    const sortOrder = () => {
        if (columnTitlesClicked) {
            columnTitleClick(false);
            dispatch(sortedData(sortedLocalData));
            return;
        }
        else if (toggleSort) {
            dispatch(sortedData(localData.reverse()));
            setToggleSort(prev => !prev);
        }
        else {
            dispatch(sortedData(sortedLocalData));
            setToggleSort(prev => !prev);
        }
    };

    return (
        <div className='column-title' onClick={()=>sortOrder()}>
            <p>Id</p>
            <div className={toggleSort? 'rotate' : 'rotate-none'}><DownArrow/></div>
        </div>
    );
});