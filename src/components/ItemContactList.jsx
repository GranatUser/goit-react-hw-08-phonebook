import PropTypes from 'prop-types';
export function ItemContactForm(props) {
    return (
        <li>
            <p>{props.children}</p>
            <button id={props.id} onClick={props.onClick} type="button">Delete</button>
        </li>
    );
}

ItemContactForm.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}