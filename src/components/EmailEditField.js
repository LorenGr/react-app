import React from 'react';
import {Col, FormGroup, FormControl, InputGroup, Glyphicon, HelpBlock} from 'react-bootstrap';

export default class EmailEditField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormGroup>
                <Col sm={2}>{this.props.label}</Col>
                <Col sm={8}>
                    <InputGroup>
                        <InputGroup.Addon>
                            <Glyphicon glyph={this.props.glyph} />
                        </InputGroup.Addon>
                        <FormControl {...this.props.input}
                                     id={this.props.label}
                                     type="text"
                                     placeholder={this.props.label} />
                    </InputGroup>
                    <HelpBlock>{this.props.meta.touched && this.props.meta.error && <span>{this.props.meta.error}</span>}</HelpBlock>
                </Col>
            </FormGroup>
        );
    }
}