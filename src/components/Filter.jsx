import { getFilter } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
export function Filter() {
    const filter = useSelector(getFilter);
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
