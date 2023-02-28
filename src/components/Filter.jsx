import React from "react";
import PropTypes from 'prop-types';

export class Filter extends React.Component {
    render() {
        return (
            <div className="contacts-finder">
                <label >
                    <b>Find contacts by name</b>
                    <br />
                    <input name="filter" type="text" value={this.props.filter} onChange={this.props.handleOnChange}></input>
                </label>
            </div>
        );
    }
}
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired
}