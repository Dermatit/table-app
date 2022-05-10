import './index.scss'
import { ReactComponent as SearchIcon } from '../Assets/SearchIcon.svg';
import { searchFilter } from '../Redux/actions';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='search-box-container'>
            <input type='search' placeholder='Поиск' onChange={(e) => { dispatch(searchFilter(e.target.value)); navigate('/1'); }}/>
            <SearchIcon/>
        </div>
    );
};