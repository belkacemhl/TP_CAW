import React, { useState } from 'react'

function NewPostFrom(props) {

    const [subInput, setSubInputs] = useState("");
    const [descInput, setDescInputs] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addPost(subInput, descInput)
        setSubInputs("")
        setDescInputs("")
    }


    return (
        <div className='bc-content' >
            <div className='bc-post'>
                <p id='form-title'>Add new post</p>
                <form onSubmit={handleSubmit} className="add-post">
                    <div>
                        <label htmlFor="sub">Subject :</label>
                        <input className="sub-input" name='sub' value={subInput} onChange={(e) => setSubInputs(e.target.value)} type="text" placeholder='Post Subject ... ' />
                    </div>
                    <div className='post-desc'>
                        <label htmlFor="desc">Description :</label>
                        <textarea className="desc-input" name="desc" value={descInput} onChange={(e) => setDescInputs(e.target.value)} rows="10" cols="50" placeholder='Post Description ... '></textarea>
                    </div>
                    <br /><button type='submit' className="add-comment-btn">Add Post</button>
                </form>
            </div>
        </div>
    )

}

export default NewPostFrom;