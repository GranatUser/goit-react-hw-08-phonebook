import PropTypes from 'prop-types';

export function Filter(props) {
    return (
        <div className="contacts-finder">
            <label >
                <b>Find contacts by name</b>
                <br />
                <input name="filter" type="text" value={props.filter} onChange={props.handleOnChange}></input>
            </label>
        </div>
    );
}
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired
}