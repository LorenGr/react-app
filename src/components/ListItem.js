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
    photo: {
        width: 128,
        height: 128
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
    title: {
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical'
    },
    [theme.breakpoints.down('sm') ]: {
        root: {
            margin: 3,
            width: '48%',
            maxWidth: 'none',

        },
        photo: {
            width: '100%',
            height:'initial',
            '& img': {
                width: '100%',
            }
        },
        content : {
            height : 35
        },
        title: {
            '-webkit-line-clamp': 1,
        },
    },
}));

export class ListItem extends React.Component {

    render() {
        const {item, classes} = this.props;

        return (
            <Button className={classes.root}>
                <Link className={classes.link} to={'edit/' + item['_id']}>
                    <Card className="cardContainer">
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
}

ListItem.propTypes = {
    item: React.PropTypes.object.isRequired
};

export default connect()(
    withStyles(styleSheet)(ListItem)
);
