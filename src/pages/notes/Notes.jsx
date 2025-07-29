import { useEffect  } from "react"
import  styles  from './Notes.module.css'
import {  Outlet, useNavigate, Link, } from "react-router-dom"
import { FaStickyNote , FaRegEnvelopeOpen    } from "react-icons/fa";
import { AddNoteButton } from "../../buttons/AddNoteButton";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { fetchNotes } from "../../actions/notes-loading-action";
import { getNotes } from "../../selectors/notes";
import { updateNotesSelector } from '../../selectors/update-notes';
import { deleteNote } from "../../actions/delete-note";
import { Loader } from "../../components/Loader";

export const Notes = ( ) => {

    
 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const notes = useSelector(getNotes)
    const updateNotes = useSelector(updateNotesSelector)
    const loading = useSelector(state => state.loading)
    


    useEffect(()=>{
    dispatch(fetchNotes())
    },[updateNotes])

    

   const deleteCurrentNote = (id)=> {
    dispatch(deleteNote(id))
    dispatch({ type: "UPDATE_NOTES", payload: !updateNotes });
   }
   
   
   if(loading) return <Loader />
    

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
                    <button onClick={()=>{deleteCurrentNote(id)}}><MdDeleteOutline /></button>
                    </div>
                    <input className={styles.checkbox} type="checkbox"  />

                </div>
            )
           })}
            </div>
        </div>
    )
}