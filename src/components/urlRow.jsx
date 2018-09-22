import React, { Component } from 'react';
import { ModalExample } from './RowDelete';
import { ModalEx } from './RowDelete';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <th>-></th>
                <td>{this.props.rowData.LongUrl}</td>
                <td>{this.props.rowData.ShortUrl}</td>
                <td>
                    <row>
                        <ModalExample buttonLabel="Delete" />
                        <ModalEx buttonLabel="View" long={this.props.rowData.LongUrl} short={this.props.rowData.ShortUrl} />
                    </row>
                </td>
            </tr>
        );
    }
}

export default TableRow;