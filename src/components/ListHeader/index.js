import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './ListHeader.css';

export default class TopBar extends Component {

    static propTypes = {
        
    }
    
    render() {
        const classNames = classnames({
            'folder-actions': true,
        });
        return (
            <div className={classNames}>
                <h2>/ Home</h2>
            </div>
        );
    }
}