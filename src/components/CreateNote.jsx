import styles from './CreateNote.module.css'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setInputTextSelector } from '../selectors/set-input-text'
import { updateNotesSelector } from '../selectors/update-notes';
import { addNotes } from '../actions/add-note-action';
import { useGoBack } from '../functions/bo-back-navigate';

export const CreateNote = () => {
   
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inputText = useSelector(setInputTextSelector)
    const updateNotes = useSelector(updateNotesSelector)
    const goBack = useGoBack()
   
  const addNotesInList = () => {
    if (!inputText.trim()) {
      alert('Пожалуйста, введите текст заметки');
      return;
    }
    dispatch(addNotes(inputText))
    dispatch({ type: "UPDATE_NOTES", payload: !updateNotes });
    navigate("/notes");
  }

  const inputOnChange =  ({target}) => {
    dispatch({type:"INPUT_TEXT" , payload:target.value}) 
  }


    return(
        <div className={styles.createPage}>
            <div className={styles.create}>
                <button className={styles.buttonOut} onClick={goBack}><FaArrowLeft /></button>
                <h3>Создайте новую заметку</h3>
                <div className={styles.addMenu}>
                <input className={styles.addInput} type="text"  onChange={inputOnChange} />
                <button className={styles.addButton} onClick={addNotesInList}>Добавить</button>
                </div>
            </div>
        </div>
    )
}