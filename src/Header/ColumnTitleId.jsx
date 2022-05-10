import { ReactComponent as DownArrow } from '../Assets/DownArrow.svg';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useState, useEffect } from 'react';
import { sortedData } from '../Redux/actions';

export const ColumnTitleId = ({columnTitlesClicked, columnTitleClick}) => {
    const dispatch = useDispatch();
    // const data = useSelector(state => state.data, shallowEqual);
    const data = useSelector(state => state.filteredData, shallowEqual);

    const [localData, setLocalData] = useState();
    const [sort, setSort] = useState(true);

    useEffect(() => setLocalData([...data]),[data]);

    const sortOrder = () => {
        if (columnTitlesClicked) {
            columnTitleClick(false);
            dispatch(sortedData(localData.sort((a, b) => {
                return a.id - b.id;
            })));
        }
        else {
            if (sort) {
                dispatch(sortedData(localData.reverse()));
                setSort(prev => !prev);
            }
            else {
                dispatch(sortedData(localData.sort((a, b) => {
                    return a.id - b.id;
                })));
                setSort(prev => !prev);
            }
        }
    }

    return (
        <div className='column-title' onClick={() => sortOrder()}>
            <p>Заголовок</p>
            <div><DownArrow/></div>
        </div>
    );
};