import { useState,useEffect } from 'react'
import styles from './Search.module.css'
import {  Outlet, useNavigate, } from "react-router-dom"
import { FaStickyNote } from "react-icons/fa";


export const Search = () => {

    const [searchNotes , setSearchNotes] = useState([])
    const [searchInput , setSearchInput] = useState('')
    const [result , serResult] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
            fetch("http://localhost:3000/notes")
            .then((loadedNotes)=> loadedNotes.json())
            .then((result) => {
                setSearchNotes(result)
            })},[])

    useEffect(()=>{
        const value = searchInput.toLowerCase()

        const searchResult = searchNotes.filter(el => {
            const match = el.text?.toLowerCase().includes(value)
            return match
        })
        serResult(searchResult)
    },[searchInput])

    return(
        <>
        <Outlet />
        <h3 className={styles.title}>Поиск</h3>
        <div>
            <input className={styles.inputSearch} type="text" placeholder='Введите текст' onChange={({target})=>{setSearchInput(target.value)}} />
        </div>
        <div className={styles.notes}>
           {searchInput.length === 0?'':result.map(({id,text, date})=>{

            return (
                <div className={styles.note} key={id} >
            <FaStickyNote />
             <span className={styles.date}>{date}</span>
            <span onClick={()=>{navigate(`/notes/note/${id}`)}}>
                {text.length > 30? text.slice(0,30) : text }
                {text.length > 30 && <button className={styles.showMore}>...</button>}
            </span>
                
                 <input className={styles.checkbox} type="checkbox"  />
            </div>
                
            )
           })}
        </div>
        
        </>
    )
}