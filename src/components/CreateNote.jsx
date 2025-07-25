import styles from './CreateNote.module.css'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setInputTextSelector } from '../selectors/set-input-text'
import { updateNotesSelector } from '../selectors/update-notes';
import { useAddNote } from './hooks/use-add-note';



export const CreateNote = () => {
   
    

    const navigate = useNavigate()
    const {addNote} = useAddNote()
    const dispatch = useDispatch()
    const inputText = useSelector(setInputTextSelector)
    const updateNotes = useSelector(updateNotesSelector)
   



    return(
        <div className={styles.createPage}>
            <div className={styles.create}>
                <button className={styles.buttonOut} onClick={()=>{navigate(-1)}}><FaArrowLeft /></button>
                <h3>Создайте новую заметку</h3>
                <div className={styles.addMenu}>
                <input className={styles.addInput} type="text"  onChange={({target}) => {dispatch({type:"INPUT_TEXT" , payload:target.value}) }} />
                <button className={styles.addButton} onClick={()=>{addNote(inputText,updateNotes,navigate,dispatch)}}>Добавить</button>
                </div>
            </div>
        </div>
    )
}