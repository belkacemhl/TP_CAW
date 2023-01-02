import React, { useState } from 'react'

export default function BlogFilter(props) {

    const [edateIsDisabled, setEdateIsDisabled] = useState(true);

    const [sdateInput, setSdateInputs] = useState("");
    const [edateInput, setEdateInputs] = useState("");
    const [filter, setFilter] = useState(true);

    const options = [
        { value: '', text: '--Select Filter Type --' },
        { value: 'sd', text: 'Specific Date' },
        { value: 'dr', text: 'Date Range' },
        { value: 'bfd', text: 'Before A Specific Date' },
        { value: 'afd', text: 'After A Specific Date' }
    ];
    const [rerender, setRerender] = useState(false);

    const [selected, setSelected] = useState("");
    let x = null;


    const handleChange = event => {
        x = event.target.value
        setSelected(event.target.value);
        if (x === "dr") setEdateIsDisabled(false)
        else setEdateIsDisabled(true)
    };

    const Filter = (e) => {

        e.preventDefault()
        setRerender(!rerender);
        if (selected === "sd" || selected === "bfd" || selected === "afd") props.filterFn(selected, sdateInput, "null", filter)
        else if (selected === "dr") props.filterFn(selected.toString(), sdateInput, edateInput, filter)
        else props.filterFn("null", "null", "null", filter)
    }

    const eFilter = () => {
        setFilter(true)
    };
    const dFilter = () => {
        setFilter(false)
        setEdateInputs("")
        setSdateInputs("")
        setSelected("")
    };

    return (
        <div className='bc-search'>
            <form onSubmit={Filter} className='bc-post bc-search-form'>
                <div>
                    <select className='filter-types' value={selected} onChange={(e) => handleChange(e)}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <input name='s-date' value={sdateInput} onChange={(e) => { setSdateInputs(e.target.value) }} type="date" />
                </div>
                <div>
                    <input name='e-date' value={edateInput} onChange={(e) => setEdateInputs(e.target.value)} disabled={edateIsDisabled} type="date" />
                </div>
                <button type='submit' onClick={eFilter} className="add-comment-btn">Search</button>
                <button type='submit' onClick={dFilter} className="clear-btn"> Clear Search</button>
            </form>
        </div>
    )
}
