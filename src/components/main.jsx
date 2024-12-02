import style from "./main.module.css"
import Card from "./ui/Card/card"
import {posts} from "../data/posts"
const tags = []

export default function Main(){
    return(
        <main className={style.mainContent}>
            <div className="container">

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