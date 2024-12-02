import style from "./main.module.css"
import Card from "./ui/Card/card"
import basePosts from "../data/posts"

import { useState } from 'react'
const tags = []

export default function Main(){


    const [posts, setPosts] = useState(basePosts)
    const [newPostTitle, setNewPostTitle] = useState("")

    function onSubmit(event){
        event.preventDefault()

        if(newPostTitle === "") return

        const newPost ={
            id: posts.at(-1).id+1,
            title: newPostTitle,
            image: undefined,
            content: "",
            tags:[],
            published:true
        }

        setPosts([...posts, newPost])
        setNewPostTitle("")

        console.log("post aggiunto correttamente")
        //console.log(posts)
    }


    return(
        <main className={style.mainContent}>
            <div className="container">
                <form onSubmit={onSubmit} action="">
                        <input  onChange={(e)=>setNewPostTitle(e.target.value)} type="text" placeholder="Titolo del post" value={newPostTitle}/>
                        <input type="submit" value="Invia"/>
                </form>

                <section className={style.row}>
                    {posts.map((post)=>
                        post.published===true ?
                        <div className={style.col3} key={post.id}>
                            <Card title={post.title} image={post.image} content={post.content} tags={post.tags} published={post.    published}/>
                            {post.tags.forEach(tag => !tags.find((tagEl) => tagEl === tag) ? tags.push(tag) : null)}
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