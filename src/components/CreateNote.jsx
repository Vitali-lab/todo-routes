import styles from './CreateNote.module.css'
import { useContext } from 'react';
import { NotesContext } from './NotesContext';
import { useNavigate } from 'react-router-dom';


export const CreateNote = () => {
    const navigate = useNavigate()
const { addNote, setInputText } = useContext(NotesContext);
    return(
        <div className={styles.createPage}>
            <div className={styles.create}>
                <button onClick={()=>{navigate(-1)}}>Назад</button>
                <h3>Создайте новую заметку</h3>
                <input type="text"  onChange={({target}) => {setInputText(target.value)}} />
                <button onClick={addNote}>Добавить</button>
            </div>
        </div>
    )
}