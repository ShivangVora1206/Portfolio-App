import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { toggleMode, toggleVisibility } from './global_store/slices/navbarSlice';
import { updatePointerCoords } from './global_store/slices/mousePointerSlice';
import { updateScrollPosition } from './global_store/slices/scrollPositionSlice';
import { useEffect, useState, useRef } from 'react';
import {motion} from 'framer-motion';
import Navbar from './components/Navbar/';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Resume from './components/Resume';
import PathMatrix from './components/PathMatrix';
function App() {

  const mode = useSelector((state) => {return state.navbar.value.mode})
  const pointerCoords = useSelector((state) => {return state.mousePointerCoord.value})
  const cursorVariant = useSelector((state)=>{return state.cursorVariant.value})
  const scrollPosition = useSelector((state) => {return state.scrollPosition.value})
  const dispatch = useDispatch()
  const homeRef = useRef(null)
  const workRef = useRef(null)
  const projectsRef = useRef(null)
  const stackRef = useRef(null)
  const resumeRef = useRef(null)
  const puzzleRef = useRef(null)
  // console.log(pointerCoords);
  // console.log(homeRef);

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollToWork = () => {
    workRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollToStack = () => {
    stackRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollToResume = () => {
    resumeRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollToPuzzle = () => {
    puzzleRef.current.scrollIntoView({behavior:'smooth'})
  }

  useEffect(()=>{
    
    const updateMousePosition = (e) => {
      // console.log(e);
      let payload = {
        x: e.clientX,
        y: e.clientY
      }
      dispatch(updatePointerCoords(payload))
    }

    const scrollListener = (e)=>{
      // 716 for work section
      // console.log(e.target.defaultView.pageYOffset);
      
      if(e.target.defaultView.pageYOffset === 0){
        dispatch(toggleVisibility(false))
      }else{
        dispatch(toggleVisibility(true))
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("scroll", scrollListener)

    return ()=>{
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("scroll", scrollListener)
    }
    
  }, [])

  const variants = {
    default:{
      x:pointerCoords.x - 14,
      y:pointerCoords.y - 14,
      background:"transparent"
    },
    larger:{
      height: 150,
      width:150,
      x:pointerCoords.x - 75,
      y:pointerCoords.y - 75,
      backgroundColor:"white",
      mixBlendMode:"difference"
    }
  }

  return (
    <div key={'App'} className="" class={ mode ? 'dark' : '' }>
      
      <motion.div 
          className='bg-slate-800 dark:bg-gray-200 h-7 w-7 rounded-full fixed z-10 top-0 left-0 pointer-events-none'
          variants={variants}
          animate={cursorVariant}
      />
        <Navbar onHomeClick={scrollToHome} onWorkClick={scrollToWork} onProjectsClick={scrollToProjects} onStackClick={scrollToStack} onResumeClick={scrollToResume} onPuzzleClick={scrollToPuzzle}/>
      <div key={'container'} className={`flex flex-col`}>
        <div ref={homeRef}><Home/></div>
        <div ref={workRef}><Work/></div>
        <div ref={resumeRef}><Resume/></div>
        <div ref={projectsRef}><Projects/></div>
        <div ref={stackRef}><Stack/></div>
        <div ref={puzzleRef}><PathMatrix/></div>
        </div>
    </div>
  );
}

export default App;

//responsive status
// navbar - done
// home - done
// work 
// project
