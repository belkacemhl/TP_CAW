import React, { useEffect, useState } from 'react'
import Header from "../components/header";
import './Blog-Contacts.css'
import Contact from '../components/Contact';
import NewContactForm from '../components/NewContactForm';
import { mycontacts } from '../components/mycontacts';
import ContactSearchBar from '../components/ContactSearchBar';

function Contacts() {
    useEffect(() => {
        document.getElementById('contacts-nav-btn').style.color = '#D6A7F5';
    }, []);

    const [isContactsShown, setIsContactShown] = useState(false);
    const [isFormShown, setIsFormShown] = useState(false);
    const showContacts = event => {
        setIsContactShown(current => !current);
        setIsFormShown(false);
    };
    const showForm = event => {
        setIsFormShown(current => !current);
        setIsContactShown(false);
    };

    const [contacts, setContacts] = useState({ mycontacts }.mycontacts);
    const [searchContacts, setSearchContacts] = useState([]);
    const [search, setSearch] = useState(false);


    const addContact = (nameInput, pnInput, emailInput) => {
        let id = 1;
        if (contacts.length > 0) {
            id = contacts[0].id + 1;
        }
        let contact = { id: id, name: nameInput, pn: pnInput, email: emailInput };
        contacts.push(contact);
        setContacts(contacts.sort((a, b) => b.id - a.id));
    }

    const cSearch = (value, type, search) => {
        setSearchContacts(contacts)
        setSearch(true)
        if (!search) {
            setSearch(false)
        } else {
            if (type === "pn") setSearchContacts(contacts.filter((contact) => { return contact.pn === value }))
            if (type === "fa") setSearchContacts(contacts.filter((contact) => { return Array.from(contact.name)[0].toLowerCase() === value.toLowerCase() }))
            if (type === "name") setSearchContacts(contacts.filter((contact) => { return contact.name.toLowerCase() === value.toLowerCase() }))
        }

    }




    return (
        <>
            <Header />
            <h1 className='bc-title'>Contacts</h1>
            <div className='bc-btns'>
                <button id='display-btn' onClick={showContacts}>Display Contacts</button>
                <button id='create-btn' onClick={showForm}>Create Contact</button>
            </div>

            {isContactsShown && (
                <ContactSearchBar cSearch={cSearch} />
            )}

            {isContactsShown && search && (

                searchContacts.map((contact) => {
                    return (
                        <Contact contact={contact} key={contact.id} />
                    )
                })

            )}

            {isContactsShown && !search && (

                contacts.map((contact) => {
                    return (
                        <Contact contact={contact} key={contact.id} />
                    )
                })

            )}

            {isFormShown && (
                <NewContactForm addContact={addContact} />
            )}

        </>)

}

export default Contacts;