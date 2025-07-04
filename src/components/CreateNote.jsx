import styles from './CreateNote.module.css'
import { useContext } from 'react';
import { NotesContext } from './NotesContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


export const CreateNote = () => {
    const navigate = useNavigate()
const { addNote, setInputText } = useContext(NotesContext);
    return(
        <div className={styles.createPage}>
            <div className={styles.create}>
                <button className={styles.buttonOut} onClick={()=>{navigate(-1)}}><FaArrowLeft /></button>
                <h3>Создайте новую заметку</h3>
                <div className={styles.addMenu}>
                <input className={styles.addInput} type="text"  onChange={({target}) => {setInputText(target.value)}} />
                <button className={styles.addButton} onClick={addNote}>Добавить</button>
                </div>
            </div>
        </div>
    )
}