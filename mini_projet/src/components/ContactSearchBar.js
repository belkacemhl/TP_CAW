import React, { useState } from 'react'

export default function ContactSearchBar(props) {

    const [faIsDisabled, setFaIsDisabled] = useState(false);
    const [nameIsDisabled, setNameIsDisabled] = useState(false);
    const [pnIsDisabled, setPnIsDisabled] = useState(false);
    const [search, setSearch] = useState(true);

    const [faInput, setFaInputs] = useState("");
    const [nameInput, setNameInputs] = useState("");
    const [pnInput, setPnInputs] = useState("");

    const faHandleClick = (e) => {
        setNameIsDisabled(true)
        setPnIsDisabled(true)
        setFaInputs(e.target.value)
    };
    const nameHandleClick = (e) => {
        setFaIsDisabled(true)
        setPnIsDisabled(true)
        setNameInputs(e.target.value)
    };
    const pnHandleClick = (e) => {
        setNameIsDisabled(true)
        setFaIsDisabled(true)
        setPnInputs(e.target.value)
    };


    const contactSearch = (e) => {
        e.preventDefault()
        if (faInput.length > 0) props.cSearch(faInput, "fa", search);
        else if (nameInput.length > 0) props.cSearch(nameInput, "name", search);
        else if (pnInput.length > 0) props.cSearch(pnInput, "pn", search);
        else props.cSearch("null", "null", search);
        setNameInputs("")
        setPnInputs("")
        setFaInputs("")
    }

    const eSearch = () => {
        setSearch(true)
        setNameIsDisabled(false)
        setFaIsDisabled(false)
        setPnIsDisabled(false)
    };
    const dSearch = () => {
        setSearch(false)
        setNameIsDisabled(false)
        setFaIsDisabled(false)
        setPnIsDisabled(false)
    };


    return (
        <div className='bc-search'>
            <form onSubmit={contactSearch} className='bc-post bc-search-form'>
                <div>
                    <input name='fa' type="text" value={faInput} onChange={faHandleClick} pattern="[A-Za-z]{1}" disabled={faIsDisabled} placeholder='By First Alphabet ... ' />
                </div>
                <div>
                    <input name='name' type="text" value={nameInput} onChange={nameHandleClick} disabled={nameIsDisabled} placeholder='By Name ... ' />
                </div>
                <div>
                    <input name='pn' type="tel" value={pnInput} onChange={pnHandleClick} pattern="[0-9]{10}" disabled={pnIsDisabled} placeholder='By Phone Number ... ' />
                </div>
                <button type='submit' onClick={eSearch} className="add-comment-btn">Search</button>
                <button type='submit' onClick={dSearch} className="clear-btn"> Clear Search</button>
            </form>
        </div>
    )
}
