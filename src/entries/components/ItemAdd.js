import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ItemEdit from './ItemEdit'
import { WishListItem } from '../../models/WishList'
// Materia ui
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import '../../assets/css/add.css'

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class ItemAdd extends Component {
	constructor(){
		super()
		this.state = {
			entry: WishListItem.create({
				name: "",
				number: "",
				image:"",
				summary: "",
				text: ""
			}),
			open: false
		}
	}
	handleClickOpen = () => {
		this.setState({ open: true });
	  };
	
	  handleClose = () => {
		this.setState({ open: false });
	  };

	render(){
		return(
	<div className="open">
	  <Button variant="fab" color="secondary" aria-label="Add" onClick={this.handleClickOpen}>
		 <AddIcon />
	  </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"ADDING A NEW CONTACT"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
			     CONTACT
			  <ItemEdit item={this.state.entry} />
			 
             <Button variant="outlined" onClick={this.onAdd}>Add</Button>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Exit
            </Button>
          </DialogActions>
        </Dialog>
			
            </div>
		)
	}
	onAdd = () => {
		this.props.wishList.add(this.state.entry)
		this.setState({
			entry: WishListItem.create({name: '', number: '', image: '', summary:'', text:''})
		})
	}
}

export default observer(ItemAdd)