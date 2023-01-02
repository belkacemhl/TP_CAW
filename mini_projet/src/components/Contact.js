import React from 'react'

export default function Contact(props) {

    const { contact } = props;

    return (
        <div className='bc-content' >
            <div className='bc-post contact-box'>
                <p id='contact-name'>Name : {contact.name}</p>
                <p id='contact-pn'>Phone Number : {contact.pn}</p>
                <p id='contact-email'>Email : {contact.email}</p>
            </div>
        </div>
    )
}
