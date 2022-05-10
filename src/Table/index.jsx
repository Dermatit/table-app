import { TableString } from "./TableString";
import './index.scss'
import { useSelector } from "react-redux/es/exports";

export const Table = ({page}) => {
    const filteredData = useSelector(state => state.filteredData);

    const initialPageLimit = [0, 10]
    const newPage = initialPageLimit.map(elem => elem + page * 10 - 10);
    
    return (
        <div className='table'>
            {filteredData.slice(...newPage).map(elem => <TableString key={elem.id} {...elem}/>)}
        </div>
    );
};