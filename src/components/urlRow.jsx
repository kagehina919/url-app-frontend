import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        var {
            LongUrl,
            ShortUrl,
        } = this.props.rowData;
        return (
            <tr>
                <th>-></th>
                <td>{LongUrl}</td>
                <td>{ShortUrl}</td>
            </tr>
        );
    }
}

export default TableRow;