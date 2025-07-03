
import { useNavigate, useParams } from "react-router-dom"
import styles from './Note.module.css'
import { useEffect, useState,useContext } from "react"
import { FaArrowLeft } from "react-icons/fa6";
import { useDeleteNote } from "./hooks/use-delete-note";
import { MdDeleteOutline } from "react-icons/md";
import { NotesContext } from "./NotesContext";
import { RiExchangeLine } from "react-icons/ri";
import { useChangeNote } from "./hooks/use-chage-note";

export const Note = () => {

    const {id} = useParams()
    const [note , setNote] = useState([])
    const [noteChange , setNoteChange] = useState(false)
    const [changeInput , setChangeInput] = useState('')
    const { setUpdateNotes } = useContext(NotesContext)
    const { changeNote } = useChangeNote()
    const navigate = useNavigate()
    
    useEffect(()=>{
        fetch("http://localhost:3000/notes")
        .then((loadedNotes)=> loadedNotes.json())
        .then((result) => {
            result.map((el) => Number(el.id) === Number(id)? setNote(el) : '')
        } )
    },[])
         
   const { delNote } = useDeleteNote()
   console.log(changeInput);
   
        

    return(
        <div className={styles.notePage}>
            <div className={styles.note}>
                <button className={styles.buttonOut} onClick={()=>{navigate(-1)}}><FaArrowLeft /></button>
             <span className={styles.date}>{`Дата создания заметки: ${note.date}`}</span>
             <div className={styles.noteText}>
             <span className={styles.text}>{note.text}</span>
             </div>
             {noteChange && <div className={styles.change}>
                <input className={styles.changeInput} value={changeInput} type="text" onChange={({target})=>{setChangeInput(target.value)}} />
                <button className={styles.changeButton} onClick={()=>{
                    changeNote(changeInput, setUpdateNotes,id)
                    navigate('/notes')
                    }}>Изменить</button>
             </div>}
             <div className={styles.buttons}>
                <button onClick={()=>{
                    delNote(id,setUpdateNotes)
                    navigate('/notes')
                    }}><MdDeleteOutline /></button>
                    <button onClick={()=>{setNoteChange(!noteChange)}}><RiExchangeLine /></button>
             </div>
            </div>
        </div>
    )
}