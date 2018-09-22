import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Long-Url</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter Url" />
        </FormGroup>
        <Button>Shorten</Button>
      </Form>
    );
  }
}