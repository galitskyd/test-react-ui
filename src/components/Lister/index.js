import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './ListHeader.css';

import Button from '../Button';
import ListItem from '../ListItem';


export default class TopBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            breadcrumbs: '/ Home',
            view: 'list',
            selectAll: false,
            files: []
        }
    }

    static propTypes = {

    }

    toggleSelectAll = () => {
        this.setState(prevState => ({
            selectAll: !prevState.selectAll
        }));
    }

    render() {
        const classNames = classnames({
            'main-content': true,
        });
        files.push({name: 'test.txt'});
        const fileItems = files.maps(() => {
            return (
                <ListItem name={this.name} />
            );
        });


        return (
            <div className={classNames}>
                <div className="file-list">
                    <ul className="file-list-containers">
                        {fileItems}
                    </ul>
                </div>
            </div>
        );
    }
}