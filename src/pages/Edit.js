import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import _ from 'lodash';
import {find} from 'lodash';

import EditField from '../components/EditField';

export class Edit extends React.Component {

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
                <PageHeader>
                    <span>{isEditMode ? 'Edit' : 'Create'}</span> Photo
                </PageHeader>

                <Form onSubmit={this.props.handleSubmit(this.submit) } horizontal>
                    <Field glyph="user" name="recipient" label="Recipient" component={EditField}/>
                    <Field glyph="pencil" name="subject" label="Subject" component={EditField}/>

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
            type: "ITEM_" + this.form_type.toUpperCase(),
            id: values.id,
            recipient: values.recipient,
            subject: values.subject
        });

        this.props.dispatch(goBack());
    }
}


const EditForm = reduxForm({
    form: 'email_edit',
    validate: function (values) {
        let errors = {};
        if (!values.recipient) {
            errors.recipient = "Please add a recipient to your email.";
        }
        return errors;

    }
})(Edit);

function mapEditStateToProps(state, own_props) {

    let form_data = _.find(
            state.items.list,
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

export default connect(mapEditStateToProps)(EditForm);