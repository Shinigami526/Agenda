import React,{ Component } from 'react'
import ItemEdit from './ItemEdit'
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree"
import { withStyles } from "@material-ui/core/styles";
// Add Materia ui
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import '../assets/styles.css'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class WishListItemView extends Component{
  constructor(props) {
       super(props)
       this.state = {
         isEditing: false,
         expanded: false
       }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render(){
    const { item, classes } = this.props;
    return this.state.isEditing ? (
            this.renderEditable()
    ) : ( 
    <div className="item">
    <Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar src={item.image} aria-label="Recipe" className={classes.avatar}>
          
        </Avatar>
      }
    
      title={item.name}
      subheader={item.number}
    />
    
    <CardContent>
      <Typography component="p">
        {item.summary}
      </Typography>
    </CardContent>
    <CardActions className={classes.actions} disableActionSpacing>

    <Button onClick={this.onToggleEdit} variant="contained" color="primary" className={classes.button}>
        Edit
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>

     <Button onClick={item.remove} variant="contained" color="secondary" className={classes.button}>
        Delete
       <DeleteIcon className={classes.rightIcon} />
     </Button>
      
      <IconButton
        className={classnames(classes.expand, {
          [classes.expandOpen]: this.state.expanded,
        })}
        onClick={this.handleExpandClick}
        aria-expanded={this.state.expanded}
        aria-label="Show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph variant="body2">
          Details:
        </Typography>
        <Typography paragraph>
          {item.text}
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
    </div>
    )
  }
  renderEditable() {
    return (
      <li>
      <ItemEdit item={this.state.clone} />
      <Button variant="outlined" onClick={this.onSave}>save</Button>
      <Button variant="outlined" onClick={this.onCancelEdit}>Cancel</Button>
      </li>
    )
  }
  onSave = () => {
    applySnapshot(this.props.item, getSnapshot(this.state.clone))
    this.setState({
          isEditing: false,
          clone: null
    })
  }
  onToggleEdit = () => {
    this.setState({ 
      isEditing: true,
      clone: clone(this.props.item)
     })
  }
  onCancelEdit = () => {
    this.setState({
      isEditing: false
    })
  }
}

WishListItemView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WishListItemView)