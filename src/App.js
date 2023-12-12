
import './App.css';
// import io from 'socket.io-client';
import { useSelector, useDispatch } from "react-redux";
import { toggleMode, toggleVisibility } from './global_store/slices/navbarSlice';
import { updatePointerCoords } from './global_store/slices/mousePointerSlice';
import { toggleLoader } from './global_store/slices/loaderSlice';
import {toggleImageModal} from './global_store/slices/imageModalSlice';
import { useEffect, useState, useRef } from 'react';
import {motion} from 'framer-motion';
import Navbar from './components/Navbar/';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Resume from './components/Resume';
import PathMatrix from './components/PathMatrix';
import Spinner from './components/Spinner';
import CustomToast from './components/CustomToast';
import { showCustomToast } from './global_store/slices/customToastSlice';

// const socket = io.connect("http://localhost:8000");
// socket.on("from-server", m => {console.log("from server",m);})

// socket.emit("from-client", "From client");
// console.log(socket);
function App() {

  const mode = useSelector((state) => {return state.navbar.value.mode})
  const pointerCoords = useSelector((state) => {return state.mousePointerCoord.value})
  const cursorVariant = useSelector((state)=>{return state.cursorVariant.value})
  const loader = useSelector((state)=>{return state.loader.value})
  const imageUploadModal = useSelector((state)=>{return state.imageModal.value})
  const blackBar = useSelector((state)=>{return state.blackBar.value})
  const dispatch = useDispatch()
  const homeRef = useRef(null)
  const workRef = useRef(null)
  const projectsRef = useRef(null)
  const stackRef = useRef(null)
  const resumeRef = useRef(null)
  const puzzleRef = useRef(null)
  // // console.log(homeRef);
  // socket.on("new-connection-alert", m => {
  //   console.log("new connection",m);
  //   dispatch(showCustomToast({message:"New user has opened this portfolio!", type:"info"}))
  // })

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

  useEffect(()=>{
      dispatch(toggleLoader(true))
      let timer = setTimeout(() => dispatch(toggleLoader(false)), 2000);
      return () => {
        clearTimeout(timer);
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
    <>
    
    {loader ? <div key="loader" className={`z-10 bg-black bg-opacity-40 h-full w-full fixed flex flex-col justify-center items-center `}>
      <Spinner/>
    </div> : <></>}
    <div key={'App'} className={``} class={ mode ? 'dark' : '' }>
    
      
      <motion.div 
          className='bg-slate-800 dark:bg-gray-200 h-7 w-7 rounded-full fixed z-10 top-0 left-0 pointer-events-none'
          variants={variants}
          animate={cursorVariant}
      />
        { loader ? <></> : <Navbar onHomeClick={scrollToHome} onWorkClick={scrollToWork} onProjectsClick={scrollToProjects} onStackClick={scrollToStack} onResumeClick={scrollToResume} onPuzzleClick={scrollToPuzzle}/>}
      
      {/* <div className={`absolute z-10 bg-black w-full h-[100px] duration-300  ${blackBar ? 'top-[0px]' : '-top-[100px]'}`}></div> */}
      
      <div key={'container'} className={`flex flex-col`}>
        <div ref={homeRef} className=''><Home/></div>
        {/* <div className='bg-black bg-cover w-100 h-[770px]'><div className='flex flex-col font-minecraft justify-center items-center h-full text-gray-200 text-2xl'> Keep Scrolling Down To Continue...</div></div> */}
        <div ref={workRef}><Work/></div>
        <div ref={resumeRef}><Resume/></div>
        <div ref={projectsRef}><Projects/></div>
        <div ref={stackRef}><Stack onProjectsClick={scrollToProjects}/></div>
        <div ref={puzzleRef}><PathMatrix/></div>
        <div className='fixed z-[100] bottom-1 w-full'><CustomToast/></div>
        </div>
    </div></>
  );
}

export default App;

//responsive status
// navbar - done
// home - done
// work 
// project
