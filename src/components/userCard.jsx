import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

class Cards extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
              <Card>
                <CardImg top width="100%" src="https://otakukart.com/wp-content/uploads/2018/08/Haikyuu-season-4.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>URL Shortener</CardTitle>
                  <CardText>URL shortener for haikyuu fans only !!!!!</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          );
    }
}
export default Cards;