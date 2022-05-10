import { useCallback, useState } from "react";
import { ColumnTitle } from "./ColumnTitle";
import { ColumnTitleId } from "./ColumnTitleId";
import './index.scss'

export const Header = () => {
    const columns = ['id', 'title', 'body'];
    const [columnTitlesClicked, setColumnTitlesClicked] = useState(false);

    const columnTitleClick = useCallback((bool) => setColumnTitlesClicked(bool), []);
    return (
        <header>
            {columns.map(elem => elem === 'id' ? <ColumnTitleId columnTitlesClicked={columnTitlesClicked} columnTitleClick={columnTitleClick} /> : <ColumnTitle elem={elem} columnTitleClick={columnTitleClick}/>)}
        </header>
    );
};