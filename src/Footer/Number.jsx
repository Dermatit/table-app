import { useState, useEffect } from 'react';

export const Number = ({page, numbersRef, setCurrentNumberProps}) => {

    useEffect(() => {
        if (numbersRef.current.children[0] !== undefined) {
            setCurrentNumberProps(numbersRef.current.children[0]);
            numbersRef.current.children[0].style.color = '#7EBC3C';
        }
    }, []);

    const setColor = (e) => {
        e.target.style.color = '#7EBC3C';
        setCurrentNumberProps(prev => {
            prev.style.color = '#474955';
            return e.target;
        });
    }

    return <p onClick={(e) => setColor(e)}>{page}</p>
};