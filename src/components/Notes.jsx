import { useEffect, useState,  } from "react"
import  styles  from './Notes.module.css'
import {  Outlet, useNavigate, Link, } from "react-router-dom"
import { NotesContext } from './NotesContext';
import { FaStickyNote , FaRegEnvelopeOpen    } from "react-icons/fa";
import { AddNoteButton } from "./buttons/AddNoteButton";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteNote } from "./hooks/use-delete-note";

export const Notes = ( ) => {

    
    const [notes , setNotes] = useState([])
    const [updateNotes, setUpdateNotes] = useState(false)
    const [inputText , setInputText] = useState('')
    const { delNote } = useDeleteNote()
    const navigate = useNavigate()
    


    useEffect(()=>{
        fetch("http://localhost:3000/notes")
        .then((loadedNotes)=> loadedNotes.json())
        .then((result) => {
            setNotes(result)
        })
    },[updateNotes])

   
    const addNote = ( ) => {
        if(inputText.length===0) {
            return
        }
          fetch("http://localhost:3000/notes",{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: String(new Date().getTime()),
                text: inputText,
                completed:false,
                date: new Date().toLocaleString() }),
        })
        .then((loadedNotes)=> loadedNotes.json())
        .then(()=>{
        setUpdateNotes(prev => !prev)
        navigate('/notes')
        
        
        }
        )
    }

   
   

   
    

    return(
        <div>
            
           <NotesContext.Provider value={{ addNote, setInputText,setUpdateNotes }}>
            <Outlet />
           </NotesContext.Provider>
            <div className={styles.pageName}>
                <h3>Заметки</h3>
            </div>
            <div className={styles.addNoteButton}>
                <AddNoteButton />
            </div>
            
            <div className={styles.notes}>
                {notes.map(({id,text,date})=> {
            return(
                <div className={styles.note} key={id}>
                    <FaStickyNote />
                    <span className={styles.date}>{date}</span>
                    <span onClick={()=>{navigate(`note/${id}`)}}>
                        {text.length > 30? text.slice(0,30) : text }
                        {text.length > 30 && <Link to={`note/${id}`}><button className={styles.showMore}>...</button></Link>}
                    </span>
                    <div className={styles.buttons}>
                    <Link to={`note/${id}`}><button><FaRegEnvelopeOpen /></button></Link>
                    <button onClick={()=>{
                        delNote(id,setUpdateNotes)
                        }}><MdDeleteOutline /></button>
                    </div>
                    <input className={styles.checkbox} type="checkbox"  />

                </div>
            )
           })}
            </div>
        </div>
    )
}