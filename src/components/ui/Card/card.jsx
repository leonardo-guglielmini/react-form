/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import placeholderImg from "../../../assets/placeholder.webp"
import style from "./card.module.css"



export default function Card({title ="", image, content="",tags=""}){
    return(
        <div className={style.card}>
            <div className={style.col12}>
                <img className={style.thumb} src={image || placeholderImg}/>
            </div>
            <div className={style.col12}>
                <div className={style.cardBody}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    {tags.map((tag,index) => <p className={`tag ${tag}Tag`} key={index}>{tag}</p>)}
                    <button><a href="#">Leggi di più</a></button>
                    <button><FontAwesomeIcon icon={faTrash}/></button>
                </div>
            </div>
        </div>
    )
}