import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Button from '../Button';
import './topper.css';

export default class TopBar extends Component {

    static propTypes = {
        
    }
    
    render() {
        const classNames = classnames({
            'all-btns-container': true,
        });
        return (
            <div className={classNames}>
                <div className="all-btns">
                    <Button warning space size="large">Upload</Button>
                    <Button space size="large">Add Folder</Button>
                    <Button space size="large">Notify</Button>
                </div>
            </div>
        );
    }
}