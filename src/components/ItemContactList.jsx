import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
export function ItemContactForm(props) {
    const dispatch = useDispatch();
    return (
        <li>
            <p>{props.children}</p>
            <button onClick={()=>{dispatch(deleteContact(props.id))}}  type="button">Delete</button>
        </li>
    );
}

ItemContactForm.propTypes = {
  id: PropTypes.string.isRequired ,
    children: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}