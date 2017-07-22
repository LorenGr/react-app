import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import _ from 'lodash';
import {find} from 'lodash';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FormGroup from 'material-ui/Form/FormGroup';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui-icons/Done';
import ClearIcon from 'material-ui-icons/Clear';


const styleSheet = createStyleSheet('Edit', theme => ({

    title: {
        flex: 1
    },
    form: {
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 5,
        paddingRight: theme.spacing.unit * 5
    },
    field: {
        marginTop: theme.spacing.unit * 3
    },
    avatar: {
        margin: '0 auto',
        width: 128,
        height: 128
    }
}));

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField helperText={label} placeholder={label}
               label={touched && error} fullWidth
               {...input}
               {...custom}
    />
);

const renderImageUpload = ({input, label, meta: {touched, error}, ...custom}) => (
    <Avatar src={input.value} {...custom} />
);


const ProfileBar = ({cancel, pristine, reset, submitting, invalid, classes}) => (
    <AppBar color="default" position="static">
        <Toolbar>
            <IconButton type="button" onClick={cancel} aria-label="Cancel">
                <ClearIcon/>
            </IconButton>
            <Typography className={classes.title} type="title">
                Edit Profile
            </Typography>
            <IconButton className={classes.icon}
                        type="submit"
                        disabled={invalid || submitting || pristine}
                        aria-label="Save">
                <DoneIcon />
            </IconButton>
        </Toolbar>

    </AppBar>

);
const ProfileView = ({classes}) => (
    <FormGroup className={classes.form}>
        <Field className={classes.avatar} name="photo" label="Avatar" component={renderImageUpload}/>
        <Field className={classes.field} name="full_name" label="Full Name" component={renderTextField}/>
        <Field className={classes.field} name="location" label="Location" component={renderTextField}/>
        <Field className={classes.field} name="email" label="Email" component={renderTextField}/>
        <Field className={classes.field} name="telephone" label="Telephone / Mobile" component={renderTextField}/>
        <Field className={classes.field} name="age" label="Age" component={renderTextField}/>
    </FormGroup>
);


class Edit extends React.Component {

    form_type;

    constructor(props) {
        super(props);
        this.form_type = (props.initialValues.id > 0 ? 'edit' : 'add');
        this.submit = this.submit.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    submit(values) {
        this.props.dispatch({
            type: "ITEM_" + this.form_type.toUpperCase(),
            id: values.id,
            values
        });
        this.props.dispatch(goBack());
    }

    cancel() {
        this.props.dispatch(goBack());
    }

    render() {
        return (
            <Paper className="container" elevation={0} square={true}>
                <form onSubmit={this.props.handleSubmit(this.submit)}>
                    <ProfileBar {...this.props} cancel={this.cancel}/>
                    <ProfileView elevation={0} square={true} {...this.props} />
                </form>
            </Paper>
        );
    }
}

const EditForm = reduxForm({
    form: 'item_edit',
    validate: function (values) {
        let errors = {};
        if (!values.recipient) {
            errors.recipient = "Please add a recipient to your email.";
        }
        return errors;
    }

})(withStyles(styleSheet)(Edit));

function mapEditStateToProps(state, own_props) {

    let form_data = _.find(
        state.items.list && state.items.list.data,
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