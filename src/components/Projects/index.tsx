import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../config";
import ProjectListItem from "../ProjectListItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleProjectModal, setProject } from "../../global_store/slices/projectModalSlice";
import { iconsPathMap } from '../../config'
import Icon from "@mdi/react";
export default function Projects(props:any) {
	// console.log(projects);
	const dispatch = useDispatch();
	const projectModal = useSelector((state:any) => state.projectModal.value);
	const currentProject = useSelector((state:any) => state.projectModal.project);
	return (
		<div key="container" className="relative">
		{	projectModal ? <div className="absolute z-[9] w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70">
			<div className="relative bg-white dark:bg-violet-950 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-between items-center h-[460px] sm:h-[950px] md:w-[650px] lg:h-[500px] lg:w-[1000px]">
			<span className="absolute font-minecraft cursor-pointer text-violet-900 dark:text-violet-200 right-3 top-2 text-lg"  onClick={()=>{dispatch(toggleProjectModal(false))}}>X</span>
				<div key={'project-images-section'} className="flex flex-col justify-center mx-5 lg:ms-[25px] lg:me-2 w-[300px] h-[200px] sm:w-[600px] sm:h-[440px] rounded-xl bg-violet-300 dark:bg-indigo-950 drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]">
					<img src={window.location.origin + "/" + currentProject.image}></img>
				</div>
				<div key={'project-details-section'} className="lg:me-[25px] lg:ms-2 w-[300px] h-[200px] lg:w-[380px] sm:w-[600px] sm:h-[440px] rounded-xl bg-violet-400 dark:bg-violet-900 text-violet-950 dark:text-violet-200 drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)] flex flex-col items-center">
					<h1 key={'project-title'} className="text-center font-minecraft mt-[8px] text-xl">{currentProject.name}</h1>
					<div key={'stack-grid'} className="w-[200px] h-[40px] grid grid-cols-5 m-2">

					{currentProject.stack.map((item:string) => {
						return (
				<div className="flex flex-row justify-center items-center">
							<div className="">
							
								{(typeof iconsPathMap[item] == typeof "")  ? <Icon
									className="m-1"
									path={iconsPathMap[item].toString()}
									size={1}
								/> : iconsPathMap[item]}
							
								
							</div>
				</div>
						);
					})}
			</div>
			<div key={'description-container'} className="relative w-[350px] h-[300px] m-10 overflow-y-scroll no-scrollbar">
					<p key={'description-text'} className="font-minecraft">{currentProject.description}</p>
			</div>
			{currentProject.github ? <div className="w-10 mb-4" onClick={()=>{window.open(currentProject.github)}}>
						<FaExternalLinkAlt className="m-1 hover:scale-125 hover:shadow-md duration-150"/>
					</div> : <></>}
			
				</div>
			</div>
		</div> : <></> }
		<div className={`h-full flex flex-col bg-gradient-to-r from-cyan-950 via-cyan-800 to-cyan-950 dark:bg-gradient-to-r dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950 items-center`}>
			<h1 className=" dark:text-slate-200 text-slate-200 flex mt-20 font-minecraft text-2xl w-full justify-center">PROJECTS</h1>
			<div className="grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 mb-10">
                
					{projects.map((item)=>{
						return(<ProjectListItem project={item}/>)

					})}
                
            </div>
		</div>
		
		</div>
	);
}
