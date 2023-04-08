import { selectFilter } from '../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filter/filterSlice';
export function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch()
    return (
        <div className="contacts-finder">
            <label >
                <b>Find contacts by name</b>
                <br />
                <input name="filter" type="text" value={filter} onChange={(event)=>{dispatch(setFilter(event.target.value))}}></input>
            </label>
        </div>
    );
}
