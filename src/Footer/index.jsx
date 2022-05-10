import './index.scss'
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Number } from './Number';


export const Footer = () => {
    const navigate = useNavigate();

    const filteredData = useSelector(state => state.filteredData);
    useEffect(() => {
        setPagesLimit([0, 5]);
    }, [filteredData]);

    const pagesNumber = Array.from({length: Math.ceil(filteredData.length/10)}, (v, k) => k+1);

    const [pagesLimit, setPagesLimit] = useState([0, 5]);
    
    const lengthCheck = filteredData.length > 5;
    const prevPages = () => {
        if (lengthCheck && pagesLimit[0] > 0) {
            navigate(`/${pagesLimit[0] - 4}`);
            setPagesLimit(prev => prev.map(elem => elem - 5));
        }
    };
    const nextPages = () => {
        if (lengthCheck && pagesLimit[1] < filteredData.length/10) {
            navigate(`/${pagesLimit[1] + 1}`);
            setPagesLimit(prev => prev.map(elem => elem + 5));
        }
    };

    const numbersRef = useRef();
    const [currentNumber, setCurrentNumber] = useState();
    const setCurrentNumberProps = (number) => setCurrentNumber(number);

    return (
        <footer>
            <p className='prev' onClick={()=>prevPages()}>Назад</p>
            <div ref={numbersRef}>{pagesNumber.slice(...pagesLimit).map(page => 
                <Link to={`/${page}`} key={page}>
                    <Number page={page} numbersRef={numbersRef} setCurrentNumberProps={setCurrentNumberProps}/>
                </Link>
            )}</div>
            <p className='next' onClick={()=>nextPages()}>Далее</p>
        </footer>
    );
};