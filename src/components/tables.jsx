import React from 'react';
import { Table } from 'reactstrap';
import TableRow from './urlRow';


class URLTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "LongUrl": 'google.Com',
          "ShortUrl":'a'
        },
        {
          "LongUrl":'fb.com',
          "ShortUrl":'b'
        },
        {
          "LongUrl":'gmail.com',
          "ShortUrl":'c'
        }
      ]
    };
  }
    
  render() {
    var tableRow = this.state.data.map((each_row) => 
    <TableRow rowData={each_row} />
    );
     
    return (
      <Table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Long-URL</th>
            <th>Short-URL</th>
          </tr>
        </thead>
        <tbody>
          {tableRow}
        </tbody>
      </Table>
    );
  }
}

export default URLTable;