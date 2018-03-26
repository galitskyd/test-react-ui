import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FA from '@fortawesome/react-fontawesome';
import faUpload from '@fortawesome/fontawesome-free-solid/faUpload';
import faFolder from '@fortawesome/fontawesome-free-solid/faFolder';
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';

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
                    <Button warning space size="large">
                        <FA icon={faUpload} />
                        Upload
                    </Button>
                    <Button space size="large">
                        <FA icon={faFolder} />
                        Add Folder
                    </Button>
                    <Button space size="large">
                        <FA icon={faExclamationTriangle} />
                        Notify
                    </Button>
                </div>
            </div>
        );
    }
}