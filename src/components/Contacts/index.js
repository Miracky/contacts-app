import {useEffect, useState} from 'react'
import './styles.css'
import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts,setContacts] = useState([
        {fullName:"Mirac", phoneNumber:"123123"},
        {fullName:"Mehmet", phoneNumber:"313131"},
        {fullName:"Aslan", phoneNumber:"456123"},

    ])
    useEffect(()=>{
        
    },[contacts])

  return (
    <div  id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
