import styles from './MainPage.module.css'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {

    const navigate = useNavigate()
    const features = [
        'Создавайте новые заметки',
        'Редактируйте и удаляйте заметки',
        'Ищите заметки по тексту',
        'Удобная навигация и современный дизайн',
    ];

    return(
        <div className={styles.mainPageContent}>
            <div className={styles.mainPage__card}>
                <h1 className={styles.mainPage__title}>Добро пожаловать!</h1>
                <p className={styles.mainPage__subtitle}>Ваш личный менеджер заметок на React</p>
                <ul className={styles.mainPage__features}>
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
                <a href="/notes/create-note" className={styles.mainPage__addBtn} onClick={()=>{navigate('/notes')}}>+ Создать заметку</a>
              
            </div>
        </div>
    )
}