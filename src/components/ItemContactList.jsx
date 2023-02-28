import React from "react";
import PropTypes from 'prop-types';
export class ItemContactForm extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.children}</p>
                <button id={this.props.id} onClick={this.props.onClick} type="button">Delete</button>
            </li>
        );
    }
}

ItemContactForm.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}