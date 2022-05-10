import { useCallback, useState } from "react";
import { ColumnTitle } from "./ColumnTitle";
import { ColumnTitleId } from "./ColumnTitleId";
import './index.scss'

export const Header = () => {
    const [columnTitlesClicked, setColumnTitlesClicked] = useState(false);
    const columnTitleClick = useCallback((bool) => setColumnTitlesClicked(bool), []);

    return (
        <header>
            <ColumnTitleId columnTitlesClicked={columnTitlesClicked} columnTitleClick={columnTitleClick} />
            <ColumnTitle elem={'title'} title={'Заголовок'} columnTitleClick={columnTitleClick}/>
            <ColumnTitle elem={'body'} title={'Описание'} columnTitleClick={columnTitleClick}/>
        </header>
    );
};