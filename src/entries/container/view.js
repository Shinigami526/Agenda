import React, { Component } from 'react'
import ItemView from '../components/ItemView'
import ItemAdd from '../components/ItemAdd'
import { observer } from "mobx-react"
import '../../assets/css/contact.css'
import Header from '../components/header';
import HandleError from '../../error/container/handle-error'

class View extends Component{
  render(){
    const { wishList } = this.props;
  return (
        <HandleError>
           <header>
             <Header />
           </header>
           <section>
             <h1>Contacto</h1>
             {wishList.items.map((item, idx) => <ItemView key={idx} item={item} />)}
             <ItemAdd wishList={wishList} />
            </section>
          </HandleError>
    )
  }
}

export default observer(View)