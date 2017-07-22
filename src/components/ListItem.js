import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('ListItem', theme => ({

    root: {
        padding: 0,
        maxWidth: 128,
        display: 'inline-block',
        margin: theme.spacing.unit,
        verticalAlign: 'top'
    },
    caption: {
        marginTop: theme.spacing.unit,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    content: {
        height: 58,
        overflow: 'hidden',
        textAlign: 'left',
        textTransform: 'none',

    },
    link: {
        textDecoration: 'none'
    },
    photo: {
        width: 128,
        height: 128
    },
    title: {
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical'
    }
}));

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.modalDeleteShow = this.modalDeleteShow.bind(this);
    }

    render() {
        const item = this.props.item;
        const classes = this.props.classes;
        return (
            <Button className={classes.root}>
                <Link className={classes.link} to={'edit/' + item['_id']}>
                    <Card>
                        <CardMedia className={classes.photo}>
                            <img src={item.photo}/>
                        </CardMedia>
                        <CardContent className={classes.content}>
                            <Typography type="title" className={classes.title}>
                                {item.full_name}
                            </Typography>
                            <Typography type="caption" className={classes.caption}>
                                {item.location}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Button>
        );
    }

    modalDeleteShow(event) {

        const emailId = Number(event.target.dataset.id);
        const itemName = event.target.dataset.itemname;

        this.props.dispatch({
            type: "ITEM_DELETE_MODAL_SHOW",
            id: emailId,
            name: itemName
        });
    }
}

ListItem.propTypes = {
    item: React.PropTypes.object.isRequired
};

export default connect()(
    withStyles(styleSheet)(ListItem)
);
