import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class Row extends React.Component {
    render() {
        return (
            <div 
                {...css(
                    this.props.styles.row,
                    this.props.table && this.props.styles.row_table,
                    this.props.table && this.props.styles.row_full_height,
                    this.props.condensed && this.props.styles.row_condensed
                )}>
                {this.props.children}
            </div>
        )
    }
}

Row.propTypes = {
    table: PropTypes.bool,
    fullHeight: PropTypes.bool,
    condensed: PropTypes.bool
}

Row.defaultTypes = {
    table: false,
    fullHeight: false,
    condensed: false
}

export default withStyles(({ unit }) => ({
    row: {
        marginLeft: -1.5 * unit,
        marginRight: -1.5 * unit,
        ":before": {
            content: '" "',
            display: "table"
        },
        ":after": {
            content: '" "',
            display: "table",
            clear: "both"
        }
    },
    row_table: {
        display: "table",
        tableLayout: "fixed",
        width: "calc(100% + " + 3 * unit + ")"
    },    
    row_full_height: {
        height: "100%"
    },
    row_condensed: {
        marginLeft: (-1.5 * unit) / 2,
        marginRight: (-1.5 * unit) / 2
    }
}))(Row);

