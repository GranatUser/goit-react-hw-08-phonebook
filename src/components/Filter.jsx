import { selectFilter } from '../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filter/filterSlice';
import { TextField } from '@mui/material';
export function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch()
    return (
        <div className="contacts-finder">
            <TextField  fullWidth label="Find contacts by name" variant="standard" name="filter" type="text" value={filter} onChange={(event)=>{dispatch(setFilter(event.target.value))}} />
        </div>
    );
}
