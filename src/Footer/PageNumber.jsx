import { useDispatch } from 'react-redux';
import { chosenPage } from '../Redux/actions';

export const PageNumber = ({page}) => {
    const dispatch = useDispatch();
    return <p onClick={()=>dispatch(chosenPage(page))}>{page}</p>
};