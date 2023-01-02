import React, { useEffect, useState } from 'react'
import Header from "../components/header";
import './Blog-Contacts.css'
import { myposts } from '../components/myposts';
import Post from '../components/Post';
import NewPostFrom from '../components/NewPostForm';
import BlogFilter from '../components/BlogFilter';

function Blog() {
    useEffect(() => {
        document.getElementById('blog-nav-btn').style.color = '#D6A7F5';
    }, []);
    const [isFormShown, setIsFormShown] = useState(false);
    const [isPostsShown, setIsPostsShown] = useState(false);
    const showForm = event => {
        setIsFormShown(current => !current);
        setIsPostsShown(false);
    };
    const showPosts = event => {
        setIsPostsShown(current => !current);
        setIsFormShown(false);
    };

    const [posts, setPosts] = useState({ myposts }.myposts);

    const addPost = (subInput, descInput) => {
        let id = 1;
        let likes = 0;
        var MyDate = new Date();
        var MyDateString;
        MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
        const comments = [];
        if (posts.length > 0) {
            id = posts[0].id + 1;
        }
        let post = { id: id, sub: subInput, date: MyDateString, desc: descInput, comments: comments, likes: likes, liked: false };
        posts.push(post);
        setPosts(posts.sort((a, b) => b.id - a.id));
    }

    const addComment = (comment, id) => {
        for (let i = 0; i <= posts.length - 1; i++) {
            if (posts[i].id === id) posts[i].comments.push(comment);
        }
    }

    const Like = (id) => {
        for (let i = 0; i <= posts.length - 1; i++) {
            if (posts[i].id === id) {
                posts[i].likes = posts[i].likes + 1;
                posts[i].liked = true;
            }
        }
    }

    const unLike = (id) => {
        for (let i = 0; i <= posts.length - 1; i++) {
            if (posts[i].id === id) {
                posts[i].likes = posts[i].likes - 1;
                posts[i].liked = false;
            }
        }
    }

    const [filterdPosts, setFilterdPosts] = useState([]);
    const [filter, setFilter] = useState(false);

    const filterFn = (type, sdate, edate, filter) => {
        setFilterdPosts(posts)
        setFilter(true)
        if (!filter) {
            setFilter(false)
        } else {
            if (type === "sd") setFilterdPosts(posts.filter((post) => { return post.date === sdate }))
            if (type === "dr") {
                const sd = new Date(sdate)
                const ed = new Date(edate)
                setFilterdPosts(posts.filter((post) => {
                    const date = new Date(post.date)
                    return date <= ed && date >= sd
                }))
            }
            if (type === "bfd") {
                const sd = new Date(sdate)
                setFilterdPosts(posts.filter((post) => {
                    const date = new Date(post.date)
                    return date <= sd
                }))
            }
            if (type === "afd") {
                const sd = new Date(sdate)
                setFilterdPosts(posts.filter((post) => {
                    const date = new Date(post.date)
                    return date >= sd
                }))
            }
        }
    }


    return (
        <>
            <Header />
            <h1 className='bc-title'>Blog</h1>
            <div className='bc-btns'>
                <button id='display-btn' onClick={showPosts}>Display All Posts</button>
                <button id='create-btn' onClick={showForm}>Create Post</button>
            </div>

            {isPostsShown && (
                <BlogFilter filterFn={filterFn} />
            )}

            {isPostsShown && filter && (
                filterdPosts.map((post) => {
                    return (
                        <Post post={post} addComment={addComment} Like={Like} unLike={unLike} comments={post.comments} key={post.id} />
                    )
                })
            )}

            {isPostsShown && !filter && (
                posts.map((post) => {
                    return (
                        <Post post={post} addComment={addComment} Like={Like} unLike={unLike} comments={post.comments} key={post.id} />
                    )
                })
            )}

            {isFormShown && (
                <NewPostFrom addPost={addPost} />
            )}
        </>

    )

}

export default Blog;