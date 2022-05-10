import './index.scss'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chosenPage } from '../Redux/actions';

export const Footer = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector(state => state.filteredData);
    const [pagesNumber, setPagesNumber] = useState([]);
    const [pagesLimit, setPagesLimit] = useState([0, 5]);

    useEffect(() => {
        setPagesNumber(Array.from({length: Math.ceil(filteredData.length/10)}, (v, k) => k+1));
    }, [filteredData]);

    const choosePage = (page) => dispatch(chosenPage(page));

    const prevPages = () => {
        if (filteredData.length > 5) {
            pagesLimit[0] > 0 && setPagesLimit(prev => prev.map(elem => elem - 5));
        }
    }
    const nextPages = () => {
        if (filteredData.length > 5) {
            pagesLimit[1] < filteredData.length/10 && setPagesLimit(prev => prev.map(elem => elem + 5));
        }
    }

    return (
        <footer>
            <p onClick={() => prevPages()}>Назад</p>
            {pagesNumber.slice(...pagesLimit).map(page => <p onClick={()=>choosePage(page)} key={page}>{page}</p>)}
            <p onClick={() => nextPages()}>Далее</p>
        </footer>
    );
};