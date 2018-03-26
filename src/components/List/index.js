import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class List extends Component {

    static propTypes = {
        
    }
    
    render() {
        const classNames = classnames({
            'content': true,
        });
        return (
            <React.Fragment>
                <Topper />
                <div className={classNames}>
                    <ListHeader />
                    
                </div>
            </React.Fragment>
        );
    }
}