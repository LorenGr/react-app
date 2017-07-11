import React from 'react';
import {PageHeader, Form, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import _ from 'lodash';
import {find} from 'lodash';

import EmailEditField from '../components/EmailEditField';

export class EmailEdit extends React.Component {

    form_type;

    constructor(props) {
        super(props);
        this.form_type = (props.initialValues.id > 0 ? 'edit' : 'add');
        this.submit = this.submit.bind(this);
    }

    render() {

        const isEditMode = this.form_type == 'edit';

        return (
            <div>
                <PageHeader>{isEditMode ? 'Edit' : 'Create'} Email</PageHeader>

                <Form onSubmit={this.props.handleSubmit(this.submit) } horizontal>
                    <Field glyph="user" name="recipient" label="Recipient" component={EmailEditField}/>
                    <Field glyph="pencil" name="subject" label="Subject" component={EmailEditField}/>

                    <FormGroup>
                        <Col smOffset={2} sm={8}>

                            <Button type="submit" disabled={this.props.invalid || this.props.submitting}>
                                {isEditMode ? 'Save' : 'Create'}
                            </Button>

                            <Button type="button"
                                    disabled={this.props.pristine || this.props.submitting}
                                    onClick={this.props.reset}>Reset</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }

    submit(values) {
        this.props.dispatch({
            type: "EMAILS_" + this.form_type.toUpperCase(),
            id: values.id,
            recipient: values.recipient,
            subject: values.subject
        });

        this.props.dispatch(goBack());
    }
}


const EmailEditForm = reduxForm({
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

export default connect(mapEditStateToProps)(EmailEditForm);