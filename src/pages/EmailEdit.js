import React from 'react';
import {PageHeader, Form, Col, FormGroup, FormControl, Button, InputGroup, Glyphicon} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import _ from 'lodash';
import {find} from 'lodash';

class EmailEdit extends React.Component {

    form_type;

    constructor(props) {
        super(props);
        this.form_type = (props.initialValues.id > 0 ? 'edit' : 'add');
    }


    render() {

        const isEditMode = this.form_type == 'edit';

        return (
            <div>
                <PageHeader>{isEditMode ? 'Edit' : 'Create'} Email</PageHeader>

                <Form onSubmit={this.props.handleSubmit(EmailEdit.submit) } horizontal>
                    <Field name="recipient"
                           component={EmailEdit.renderRecipient}/>
                    <Field name="subject"
                           component={EmailEdit.renderSubject}/>
                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button type="submit" disabled={this.props.submitting}>{isEditMode ? 'Save' : 'Create'}</Button>
                            <Button type="button" disabled={this.props.pristine || this.props.submitting}
                                    onClick={this.props.reset}>Reset</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }

    static submit() {

    }

    static renderRecipient({input, label, type, meta: {touched, error}}) {
        return (
            <FormGroup>
                <Col sm={2}>Recipient</Col>
                <Col sm={8}>
                    <InputGroup>
                        <InputGroup.Addon>
                            <Glyphicon glyph="user"/>
                        </InputGroup.Addon>
                        <FormControl {...input}
                                     id="recipient"
                                     type="text"
                                     placeholder="Recipient"/>
                    </InputGroup>
                    {touched && error && <span>{error}</span>}
                </Col>
            </FormGroup>
        );
    }

    static renderSubject(props) {
        return (
            <FormGroup>
                <Col sm={2}>Subject</Col>
                <Col sm={8}>
                    <FormControl {...props.input}
                                 id="subject"
                                 type="text"
                                 placeholder="Subject"/>

                </Col>
            </FormGroup>
        );
    }
}


EmailEdit = reduxForm({
    form: 'email_edit',
    validate: function (values) {
        let errors = {};
        if (!values.recipient) {
            errors.recipient = "Please add a recipient to your email.";
        }
        return errors;

    }
})(EmailEdit);

function mapEditStateToProps(state, own_props) {

    let form_data = _.find(
            state.emails.list,
            {id: Number(own_props.params.id)}
        ) || {
            id: 0,
            recipient: '',
            subject: ''
        };

    return {
        initialValues: form_data
    }
}

export default connect(mapEditStateToProps)(EmailEdit);