import { Routes,Route,NavLink, Navigate } from 'react-router-dom'
import { FaHome,FaSearch,FaStickyNote   } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MainPage } from './components/MainPage';
import { Notes } from './components/Notes';
import { Note } from './components/Note';
import './App.css'
import { useState } from 'react';
import { CreateNote } from './components/CreateNote';
import { NoFound } from './components/NoFound';
import { Search } from './components/Search';



function App() {

  const [isMenuOpen , setIsMenuOpen] = useState(false)
 

  return (
    <>
    <div className='mainPage'>
       <div className={`${isMenuOpen? 'leftMenuOpen': 'leftMenuClose'}`}>
        <ul className='menuList'>
          <li><NavLink to={'/'}>{isMenuOpen?'Главная':''} <FaHome className={isMenuOpen?'iconHome':'iconHomeClose'}/></NavLink></li>
          <li><><NavLink to={'/notes'}>{isMenuOpen?'Заметки':''} <FaStickyNote className={isMenuOpen?'iconNote':'iconNoteClose'}/></NavLink></></li>
          <li className='search'><NavLink to={'/search'}>{isMenuOpen?'Поиск': ''} <FaSearch className={isMenuOpen?'iconSearch':'iconSearchClose'} /></NavLink></li>
          <li></li>
        </ul>
        <button className={`${isMenuOpen? 'buttonOpenMenu': 'buttonCloseMenu'}`} onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><RxHamburgerMenu/></button>
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

export default App
