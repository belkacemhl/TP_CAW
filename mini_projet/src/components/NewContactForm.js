import React, { useState } from 'react'

export default function NewContactForm(props) {

    const [nameInput, setNameInputs] = useState("");
    const [pnInput, setPnInputs] = useState("");
    const [emailInput, setEmailInputs] = useState("");
    const contactSubmit = (e) => {
        e.preventDefault()
        props.addContact(nameInput, pnInput, emailInput)
        setNameInputs("")
        setPnInputs("")
        setEmailInputs("")
    }





    return (
        <div className='bc-content' >
            <div className='bc-post'>
                <p id='form-title'>Add new contact</p>
                <form onSubmit={contactSubmit} className="add-post">
                    <div>
                        <label htmlFor="name">Name :</label>
                        <input className="contact-input" value={nameInput} onChange={(e) => setNameInputs(e.target.value)} name='name' type="text" placeholder='Contact Name ... ' />
                    </div>
                    <div>
                        <label htmlFor="pn">Phone Number :</label>
                        <input className="contact-input" value={pnInput} onChange={(e) => setPnInputs(e.target.value)} name='pn' type="tel" pattern="[0-9]{10}" placeholder='Contact Phone Number ... ' />
                    </div>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input className="contact-input" value={emailInput} onChange={(e) => setEmailInputs(e.target.value)} name='email' type="email" placeholder='Contact Email ... ' />
                    </div>

                    <br /><button type='submit' className="add-comment-btn">Add Contact</button>
                </form>
            </div>
        </div>
    )
}
