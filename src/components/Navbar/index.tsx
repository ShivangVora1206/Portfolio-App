import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '../../global_store/slices/navbarSlice';
import { MdWbSunny } from 'react-icons/md';
import {FaMoon} from 'react-icons/fa';
import { NavbarProps } from '../../config';
import React from 'react';



export default function Navbar(props: NavbarProps) {
	const mode = useSelector((state:any) => {return state.navbar.value.mode});
	const visibility = useSelector((state:any) => {return state.navbar.value.visibility});
    const dispatch = useDispatch()
	
	return (
		<div key={"container"} className="fixed z-10 top-0 w-full">
			<div key={"navbar"} className= {`${visibility ? ' backdrop-blur-sm bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20 border-b border-b-slate-500 border-opacity-50 dark:border-opacity-50 dark:border-b-slate-400' : 'bg-transparent'} text-white flex flex-row items-center justify-between p-2 ease-in-out transition delay-100`}>
				<img src={window.location.origin + '/svlogowhite-no-bg.png'} key={"navbar-logo"}  className=' w-100  h-6 mx-2 md:w-100 md:h-10 md:mx-3 text-gray-700 dark:text-white pointer-events-none'/>
					
				<div key={"navbar-menu"} className='flex flex-row items-center font-minecraft text-xs md:text-[13px] text-gray-200 dark:text-gray-200 '>
					<p key={"navbar-title-home"} onClick={()=>{props.onHomeClick()}} className='me-2 md:mx-4 hover:-translate-y-1 duration-100 cursor-pointer'>HOME</p>
					<p key={"navbar-title-work"} onClick={()=>{props.onWorkClick()}} className='me-2 md:mx-4 hover:-translate-y-1 duration-100 cursor-pointer'>WORK</p>
					{/* <p key={"navbar-title-resume"} onClick={()=>{props.onResumeClick()}} className='me-2 md:mx-4 hover:-translate-y-1 duration-100 cursor-pointer'>RESUME</p> */}
					<p key={"navbar-title-projects"} onClick={()=>{props.onProjectsClick()}} className='me-2 md:mx-4 hover:-translate-y-1 duration-100 cursor-pointer'>PROJECTS</p>
					<p key={"navbar-title-stack"} onClick={()=>{props.onStackClick()}} className='me-2 md:mx-4 hover:-translate-y-1 duration-100 cursor-pointer'>STACK</p>
					{/* <p key={"navbar-title-puzzle"} onClick={()=>{props.onPuzzleClick()}} className='me-2 md:mx-4 hover:-translate-y-1 duration-100 cursor-pointer'>PUZZLE</p> */}
					{mode ? <MdWbSunny size={'22px'} onClick={()=>{dispatch(toggleMode())}} className='mx-4 mr-5 pb-1 motion-safe:animate-bounce '/> : <FaMoon size={'16px'} className='mx-4 mr-5 pb-1 animate-bounce' onClick={()=>{dispatch(toggleMode())}}/>}
					
				</div>
			</div>
		</div>
	);
}
