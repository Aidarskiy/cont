import { useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import EditContacts from "./components/EditContacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  let [contacts, setContacts] = useState([])
  let [editContact, setEditContact] = useState({})
  let [isEdit, setIsEdit] = useState(false)

  function handleNewContact(newContact){
    let newContactsArray = [...contacts]
   newContactsArray.push(newContact)

   setContacts(newContactsArray)
  }


  function handleDeleteContact(id){
   let newContactsArray = contacts.filter(item => {
     return item.id !== id
   })
   setContacts(newContactsArray)
  }

  function handleEditIndex(index){
    setIsEdit(true)
    setEditContact(contacts[index])
  }

  function handleSaveEditedContact(newContact){
  let newContactsArray = contacts.map(item => {
    if(item.id === newContact.id){
      return newContact
    }
    return item
  })
  setContacts(newContactsArray)
  setIsEdit(false)
  }

  return (
    <div className="App">
      <Header />
      <AddContact
      handleNewContact={handleNewContact}
      />
      {isEdit ? <EditContacts
      editContact={editContact}
      handleSaveEditedContact={handleSaveEditedContact}
      /> : null}
      <ContactList
      contacts={contacts}
      handleDeleteContact={handleDeleteContact}
      handleEditIndex={handleEditIndex}
      />
      <Footer />
    </div>
  );
}

export default App;
