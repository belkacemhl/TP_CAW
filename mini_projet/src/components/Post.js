import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';



function Post(props) {

    const { post, comments } = props;
    const [comment, setComment] = useState("");
    const commentSubmit = (e) => {
        e.preventDefault()
        props.addComment(comment, post.id)
        setComment("")
    }

    const [liked, setLiked] = useState(post.liked ? true : false);

    const likefn = (event) => {
        if (post.liked) {
            props.unLike(post.id)
            setLiked(false)
        } else {
            props.Like(post.id)
            setLiked(true)
        }
    }

    return (
        <div className='bc-content' >
            <div className='bc-post'>
                <p id='post-sub'>Subject : {post.sub}</p>
                <p id='post-date'>Date : {post.date}</p>
                <p id='post-desc'>Description : {post.desc}</p>
                <div id='post-line'></div>
                <span className='likes-container'><AiFillHeart onClick={likefn} className={liked ? 'liked-btn' : 'like-btn'} /> {post.likes} likes</span> <br />
                {comments.map((c) => {
                    return (
                        <span className='comment' key={uuidv4()}>{c}</span>
                    )
                })}

                <form onSubmit={commentSubmit} className="add-comment">
                    <input className="comment-input" type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Add Comment ... ' />
                    <button type='submit' className="add-comment-btn">Add</button>
                </form>
            </div>
        </div>
    )

}

export default Post;