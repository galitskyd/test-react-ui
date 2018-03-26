import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './button.css';

export default class Button extends Component {

    static propTypes = {
        primary: PropTypes.bool,
        warning: PropTypes.bool,
        error: PropTypes.bool,
        space: PropTypes.bool,
        size: PropTypes.string,
        children: PropTypes.node.isRequired
    }
    
    render() {
        const children = this.props.children;
        const classNames = classnames({
            btn: true,
            'btn-default': !(this.props.primary || this.props.warning || this.props.error),
            'btn-primary': this.props.primary,
            'btn-warning': this.props.warning,
            'btn-error': this.props.error,
            'btn-block': this.props.block,
            'btn-space': this.props.space,
            'btn-icon': this.props.iconOnly,
            ['btn-' + this.props.size]: this.props.size,
            'hidden': this.props.hidden
        });

        return (
            <a className={classNames} href={this.props.href || false} {...this.props}>
                {children}
            </a>
        );
    }
}