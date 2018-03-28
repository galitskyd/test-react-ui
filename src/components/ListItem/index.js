import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './ListHeader.css';

import Button from '../Button';
import ListItem from '../ListItem';


export default class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classNames = classnames({
            'file-list-item': true
        });
        return (
            <li className={classNames}>
                {this.props.name}
            </li>
        )
    }
}