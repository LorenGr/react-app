import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import _ from 'lodash';
import {find} from 'lodash';
import Paper from 'material-ui/Paper';
import FormGroup from 'material-ui/Form/FormGroup';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField helperText={label} placeholder={label}
               label={touched && error} fullWidth
               {...input}
               {...custom}
    />
);


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
            <Paper elevation={0} square={true} >
                <span>{isEditMode ? 'Edit' : 'Create'}</span> Photo
                <form onSubmit={this.props.handleSubmit(this.submit)}>
                    <Field name="fullname" label="Full Name" component={renderTextField}/>
                    <FormGroup>
                        <Button type="submit" disabled={this.props.invalid || this.props.submitting}>
                            {isEditMode ? 'Save' : 'Create'}
                        </Button>
                        <Button type="button"
                                disabled={this.props.pristine || this.props.submitting}
                                onClick={this.props.reset}>Reset</Button>
                    </FormGroup>
                </form>
            </Paper>
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