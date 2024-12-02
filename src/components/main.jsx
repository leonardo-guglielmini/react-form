import style from "./main.module.css"
import Card from "./ui/Card/card"
import basePosts from "../data/posts"

import { useState } from 'react'

export default function Main(){

    let tags=[]
    const [posts, setPosts] = useState(basePosts)
    const [newPostTitle, setNewPostTitle] = useState("")
    const [newPostContent, setNewPostContent] = useState("")
    const [newPostTags, setNewPostTags] = useState("")

    function onSubmit(event){
        event.preventDefault()

        if(newPostTitle === "") return

        const newPost ={
            id: posts.at(-1).id+1,
            title: newPostTitle,
            image: undefined,
            content: newPostContent,
            tags:[...newPostTags.split(" ")],
            published:true
        }

        setPosts([...posts, newPost])
        setNewPostTitle("")

        console.log("post aggiunto correttamente")
        //console.log(posts)
    }

    function deletePost(id){
        setPosts(posts.filter(post=> post.id!=id))
    }

    return(
        <main className={style.mainContent}>
            <div className="container">
                <form onSubmit={onSubmit} action="">
                        <input  onChange={(e)=>setNewPostTitle(e.target.value)} type="text" placeholder="Titolo del post" value={newPostTitle}/>
                        <input  onChange={(e)=>setNewPostContent(e.target.value)} type="text" placeholder="Descrizione del post" value={newPostContent}/>
                        <input  onChange={(e)=>setNewPostTags(e.target.value)} type="text" placeholder="Tags del post" value={newPostTags}/>
                        <input type="submit" value="Invia"/>
                </form>

                <section className={style.row}>
                    {posts.map((post)=>
                        post.published===true ?
                        <div className={style.col3} key={post.id}>
                            <Card callback={()=>deletePost(post.id)} title={post.title} image={post.image} content={post.content} tags={post.tags} published={post.published}/>
                            {post.tags.forEach(tag => !tags.find((el) => el === tag) ? tags.push(tag) : null)}
                        </div> : null
                    )}
                </section>
                <section className={style.tagList}>
                    <h3>Tag presenti</h3>
                    <ul>
                        {tags.map((tag, index) => <li className={`tag ${tag}Tag`} key={index}>{tag}</li> )}
                    </ul>
                </section>
            </div>
        </main>
    )
}