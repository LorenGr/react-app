import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import find from 'lodash.find';
import Paper from 'material-ui/Paper';
import ListDelete from '../components/ListDelete';
import Avatar from 'material-ui/Avatar';
import FormGroup from 'material-ui/Form/FormGroup';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui-icons/Done';
import ClearIcon from 'material-ui-icons/Clear';
import DeleteForeverIcon from 'material-ui-icons/DeleteForever';


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

const ProfileBar = ({editMode, onCancel, onDelete, pristine, reset, submitting, invalid, classes, title}) => (
    <AppBar color="default" position="static">
        <Toolbar>
            <IconButton type="button"
                        onClick={onCancel}
                        aria-label="Cancel">
                <ClearIcon/>
            </IconButton>
            <Typography className={classes.title} type="title">
                {editMode ? 'Edit' : 'Create'} Profile
            </Typography>
            {editMode ? <IconButton onClick={onDelete}
                                    className={classes.icon}
                                    type="button"
                                    aria-label="Delete">
                <DeleteForeverIcon/>
            </IconButton> : null}

            <IconButton className={classes.icon}
                        type="submit"
                        disabled={invalid || submitting || pristine}
                        aria-label="Save">
                <DoneIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>

);

const ProfileView = ({classes, editMode}) => (
    <FormGroup className={classes.form}>
        {editMode ?
            <Field className={classes.avatar} name="photo" label="Avatar" component={renderImageUpload}/> : null}
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
        this.form_type = ( props.initialValues['_id'] ? 'edit' : 'add');
        this.submitHandler = this.submitHandler.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    submitHandler(values) {
        this.props.dispatch({
            type: "ITEM_" + this.form_type.toUpperCase(),
            values
        });
        this.props.dispatch(goBack());
    }

    cancelHandler() {
        this.props.dispatch(goBack());
    }

    deleteHandler() {
        this.props.dispatch({
            type: "ITEM_DELETE_MODAL_SHOW",
            id: this.props.initialValues['_id']
        });
    }

    render() {
        const isEditMode = this.form_type === 'edit';
        return (
            <Paper className="container" elevation={0} square={true}>
                <ListDelete/>
                <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
                    <ProfileBar editMode={isEditMode}
                                {...this.props}
                                onDelete={this.deleteHandler}
                                onCancel={this.cancelHandler}/>
                    <ProfileView editMode={isEditMode} {...this.props} />
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

    let form_data = find(
        state.items.list && state.items.list.data,
        {'_id': own_props.params.id}
    ) || {};
    return {
        initialValues: form_data
    }
}

export default connect(mapEditStateToProps)(EditForm);