import React, { useState } from 'react'

function EditPost({  user, post, updatePost, setEdit }) {
    const [title, setTitle] = useState(post.title)
    const [subtitle, setSubtitle] = useState(post.subtitle)
    const [body, setBody] = useState(post.body)

    function handleSubmit(e){
        e.preventDefault();
        const updatedPost = {
            "title": title,
            "subtitle": subtitle,
            "body": body,
        }
        fetch(`http://localhost:3004/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost)
        })
        .then((r) => r.json())
        .then((updatedPost) => updatePost(updatedPost))
        setEdit(false)
    }

  return (
    <div>
        <h1>Edit Post:</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label><br></br>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="title" name="title"></input><br></br>
            <label htmlFor="subtitle">Subtitle</label><br></br>
            <input value={subtitle} onChange={(e)=>setSubtitle(e.target.value)} type="text" id="subtitle" name="subtitle"></input><br></br>
            <label htmlFor="body">Body</label><br></br>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} className="body-input" type="textarea" id="body" name="body"></textarea><br></br>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default EditPost