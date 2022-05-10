import './index.scss'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PageNumber } from './PageNumber';

export const Footer = () => {
    const filteredData = useSelector(state => state.filteredData);
    const pagesNumber = Array.from({length: Math.ceil(filteredData.length/10)}, (v, k) => k+1);

    const [pagesLimit, setPagesLimit] = useState([0, 5]);
    
    const lengthCheck = filteredData.length > 5;
    const prevPages = () => lengthCheck && pagesLimit[0] > 0 && setPagesLimit(prev => prev.map(elem => elem - 5));
    const nextPages = () => lengthCheck && pagesLimit[1] < filteredData.length/10 && setPagesLimit(prev => prev.map(elem => elem + 5));

    return (
        <footer>
            <p onClick={()=>prevPages()}>Назад</p>
            {pagesNumber.slice(...pagesLimit).map(page => <PageNumber key={page} page={page}/>)}
            <p onClick={()=>nextPages()}>Далее</p>
        </footer>
    );
};