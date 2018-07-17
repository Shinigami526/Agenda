import React,{ Component } from "react"
import { observer } from 'mobx-react'
import "../assets/form.css"

class ItemEdit extends Component {
    render () {
      const { item } = this.props;
        return (
                <div id="form-main">

                    <input className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="name" value={item.name} onChange={this.onNameChange} />
                 <br />
                     <input className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="number" value={item.price} onChange={this.onNumberChange} />
                 <br />
                      <input className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="link-image" value={item.image} onChange={this.onImageChange} />
                 <br />
                       <textarea className="validate[required,length[6,300]] feedback-input"  class="validate[required,length[6,300]] feedback-input" placeholder="summary" value={item.summary} onChange={this.onSummaryChange} />
                 <br />
                       <textarea className="validate[required,length[6,300]] feedback-input"  class="validate[required,length[6,300]] feedback-input" placeholder="text" value={item.text} onChange={this.onTextChange} />
                </div>
        )
    }

    onNameChange = event => {
        this.props.item.changeName(event.target.value)
    }
    onNumberChange = event => {
            this.props.item.changeNumber(event.target.value)
    }
    onImageChange = event => {
              this.props.item.changeImage(event.target.value)
    }
    onSummaryChange = event => {
            this.props.item.changeSummary(event.target.value)
    }
    onTextChange = event => {
            this.props.item.changeText(event.target.value)
    }
}

export default observer(ItemEdit)