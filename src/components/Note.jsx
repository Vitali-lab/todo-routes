
import { useNavigate, useParams } from "react-router-dom"
import styles from './Note.module.css'
import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { RiExchangeLine } from "react-icons/ri";
import { changeNote } from "../actions/change-note";
import { useDispatch , useSelector } from "react-redux";
import { updateNotesSelector } from "../selectors/update-notes";
import { getNotes } from "../selectors/notes";
import { getCurrentNote } from "../selectors/current-note";
import { deleteNote } from "../actions/delete-note";

export const Note = () => {

    const {id} = useParams()
    const [noteChange , setNoteChange] = useState(false)
    const [changeInput , setChangeInput] = useState('')
    const dispatch = useDispatch()
    const updateNotes = useSelector(updateNotesSelector)
    const navigate = useNavigate()
    const notes = useSelector(getNotes)
    const currentNote = useSelector(getCurrentNote)


    useEffect(()=>{   
    const foundNote = notes.find((el) => Number(el.id) === Number(id));
    if (foundNote) {
      dispatch({type:'CURRENT_NOTE',payload:foundNote});
    }
    },[notes, id, dispatch])


    const changeCurrentNote = ( ) => {
        dispatch(changeNote(changeInput,id))
        dispatch({ type: "UPDATE_NOTES", payload: !updateNotes });
        navigate('/notes')
    }     
  
  
     const deleteCurrentNote = ()=> {
      dispatch(deleteNote(id))
      dispatch({ type: "UPDATE_NOTES", payload: !updateNotes });
      navigate('/notes')
     }
   
        

    return(
        <div className={styles.notePage}>
            <div className={styles.note}>
                <button className={styles.buttonOut} onClick={()=>{navigate(-1)}}><FaArrowLeft /></button>
             <span className={styles.date}>{`Дата создания заметки: ${currentNote.date}`}</span>
             <div className={styles.noteText}>
             <span className={styles.text}>{currentNote.text}</span>
             </div>
             {noteChange && <div className={styles.change}>
                <input className={styles.changeInput} value={changeInput} type="text" onChange={({target})=>{setChangeInput(target.value)}} />
                <button className={styles.changeButton} onClick={changeCurrentNote}>Изменить</button>
             </div>}
             <div className={styles.buttons}>
                <button onClick={deleteCurrentNote}><MdDeleteOutline /> </button>
                    <button onClick={()=>{setNoteChange(!noteChange)}}><RiExchangeLine /></button>
             </div>
            </div>
        </div>
    )
}