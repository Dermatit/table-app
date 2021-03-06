import { memo } from "react";

export const TableString = memo(({id, title, body}) => {
    return (
        <div className='table-string'>
            <p className='table-cell'>{id}</p>
            <p className='table-cell'>{title}</p>
            <p className='table-cell'>{body}</p>
        </div>
    );
});