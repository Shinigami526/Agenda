import React from 'react'
import ItemView from './ItemView'
import ItemAdd from './ItemAdd'
import { observer } from "mobx-react"
import '../assets/contact.css'

const View = ({ wishList }) => (
    <div>
    <section>
      <h1>Contacto</h1>
      {wishList.items.map((item, idx) => <ItemView key={idx} item={item} />)}
    </section>
      <ItemAdd wishList={wishList} />
      </div>
)

export default observer(View)