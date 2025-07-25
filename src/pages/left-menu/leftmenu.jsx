import { Routes,Route,NavLink, Navigate } from 'react-router-dom'
import { FaHome,FaSearch,FaStickyNote   } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MainPage } from '../main-page/MainPage';
import { CreateNote } from '../../components/CreateNote';
import { NoFound } from '../../pages/not-found/NoFound'
import { Search } from '../../pages/search/Search';
import { Notes } from '../../pages/notes/Notes';
import { Note } from '../../components/Note';

import styles from './LeftMenu.module.css'
import { useState } from 'react';


export const LeftMenu = () => {

   const [isMenuOpen , setIsMenuOpen] = useState(false)
    
   
     return (
       <>
       <div className={styles.mainPage}>
          <div className={`${isMenuOpen? styles.leftMenuOpen: styles.leftMenuClose}`}>
           <ul className={styles.menuList}>
             <li><NavLink to={'/'}>{isMenuOpen?'Главная':''} <FaHome className={isMenuOpen?styles.iconHome:styles.iconHomeClose}/></NavLink></li>
             <li><><NavLink to={'/notes'}>{isMenuOpen?'Заметки':''} <FaStickyNote className={isMenuOpen?styles.iconHome:styles.iconNoteClose}/></NavLink></></li>
             <li className={styles.search}><NavLink to={'/search'}>{isMenuOpen?'Поиск': ''} <FaSearch className={isMenuOpen?styles.iconSearch:styles.iconSearchClose} /></NavLink></li>
             <li></li>
           </ul>
           <button className={`${isMenuOpen? styles.buttonOpenMenu: styles.buttonCloseMenu}`} onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><RxHamburgerMenu/></button>
         </div>
         <Routes>
           <Route path='/' element={<MainPage/>}></Route>
           <Route path='/notes' element={<Notes/>}>
             <Route path={'create-note'} element={<CreateNote/>}/>
             <Route path={'note/:id'} element={<Note/>}/>
           </Route>
           <Route path='/404' element = {<NoFound/>}></Route>
           <Route path='*' element={<Navigate to={'/404'}/>}></Route>
           <Route path='/search' element={<Search/>}></Route> 
         </Routes>
         </div>
       </>
     )
}