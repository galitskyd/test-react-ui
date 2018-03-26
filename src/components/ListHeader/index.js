import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './ListHeader.css';

import FA from '@fortawesome/react-fontawesome';
import faList from '@fortawesome/fontawesome-free-solid/faList';
import faTable from '@fortawesome/fontawesome-free-solid/faTable';
import faTh from '@fortawesome/fontawesome-free-solid/faTh';
import faSquare from '@fortawesome/fontawesome-free-regular/faSquare';
import faCheckSquare from '@fortawesome/fontawesome-free-regular/faCheckSquare';

import Button from '../Button';


export default class TopBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            breadcrumbs: '/ Home',
            view: 'list',
            selectAll: false
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
            'folder-actions': true,
        });
        return (
            <div className={classNames} style={{padding: '10px 20px'}}>
                <div className="folder-breadcrumbs" style={{display: 'inline-block'}}>
                    <h2 style={{'margin-top': 0, 'margin-bottom': 0, color: '#F90'}}>
                        <Button 
                            iconOnly 
                            onClick={this.toggleSelectAll}>
                            <FA icon={this.state.selectAll ? faCheckSquare : faSquare} />
                        </Button>
                        <span style={{'margin-left': 5}}>{this.state.breadcrumbs}</span>
                    </h2>
                </div>
                <div class="filter-sort-controls display-btns" style={{display: 'inline-block', position: 'absolute', right: 20}}>
                    <Button iconOnly><FA icon={faList} /></Button>
                    <Button iconOnly><FA icon={faTable} /></Button>
                    <Button iconOnly><FA icon={faTh} /></Button>
                </div>
            </div>
        );
    }
}