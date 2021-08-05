import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from "./postsSlice"
import { Button } from 'reactstrap';

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content,setContent] = useState('')

    const dispatch = useDispatch()

    const SavePost =  post => {
        if(title && content) {
            dispatch(postAdded({
                id: nanoid(),
                title,
                content
            }))

            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
            <h2>Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
            type="text"
            id="postTitle"
            name="postTitle"
        value={title}
        onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="postContent">Post:</label>
            <textarea
            id="postContent"
            name="postContent"
         value={content}
         onChange={(e) => setContent(e.target.value)}
            />
            <button color="danger" type="button" onClick={SavePost}>Edit</button>
        
        </form>
        </section>
    )
}