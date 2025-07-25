import { useEffect, useState,  } from "react"
import  styles  from './Notes.module.css'
import {  Outlet, useNavigate, Link, } from "react-router-dom"
import { FaStickyNote , FaRegEnvelopeOpen    } from "react-icons/fa";
import { AddNoteButton } from "../../components/buttons/AddNoteButton";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteNote } from "../../components/hooks/use-delete-note";
import { useSelector } from "react-redux";
import { updateNotesSelector } from '../../selectors/update-notes';

export const Notes = ( ) => {

    
    const [notes , setNotes] = useState([])
 
   
    const { delNote } = useDeleteNote()
    const navigate = useNavigate()
    const updateNotes = useSelector(updateNotesSelector)


    useEffect(()=>{
        fetch("http://localhost:3000/notes")
        .then((loadedNotes)=> loadedNotes.json())
        .then((result) => {
            setNotes(result)
        })
    },[updateNotes])

   
   
   
    

    return(
        <div className={styles.container}>
            <Outlet />
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
                        delNote(id)
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