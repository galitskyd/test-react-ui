import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import ListHeader from '../../components/ListHeader'
import Topper from '../../components/Topper';

export default class Browse extends Component {

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