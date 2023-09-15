import React from "react";
import { techStackList, colorCodes } from "../../config";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {toggleProjectModal,setProject} from "../../global_store/slices/projectModalSlice";
import { getProjectsFromTechHelper } from "../../Utils/projectUtils";
export default function Stack(props:any) {

    const [clicked, setClicked] = useState(false);
    const [projectList, setProjectList] = useState(new Array());
    const [selectedTech, setSelectedTech] = useState("");
    const loader = useSelector((state:any)=>{return state.loader.value});
    const dispatch = useDispatch();


    const getProjectsFromTech = (tech:string)=>{
        setProjectList(getProjectsFromTechHelper(tech));
    }

    return (
        <div className="relative flex flex-col h-[900px] sm:h-[1200px] md:h-[1200px] lg:h-[800px] items-center bg-gradient-to-br bg-opacity-25 from-gray-800 via-zinc-600 to-zinc-600 dark:bg-gradient-to-tl dark:from-gray-950 dark:via-zinc-900 dark:to-gray-950">
            <h1 className=" dark:text-slate-100 text-zinc-100 flex mt-20 font-minecraft text-2xl w-full justify-center">MY TECH STACK</h1>
            <div className={`flex flex-col p-3 rounded-lg duration-200 ${clicked ? 'top-[500px] sm:top-[650px] md:top-[500px] lg:top-0 lg:translate-x-64 xl:translate-x-96 opacity-100' : ' opacity-0 translate-x-0'} h-[320px] w-[320px] sm:h-custom-xl-square-height sm:w-custom-xl-square-width md:w-custom-xl-square-width bg-slate-200 bg-opacity-30  absolute  md:mt-custom-top-margin  `}> {/*changes here added md*/}
                <div className="flex flex-row justify-between text-slate-100"><h1 className="text-center ms-2 font-minecraft">PROJECTS USING {selectedTech}</h1>
                <h1 onClick={()=>{setClicked(false);setProjectList([]);setSelectedTech("");}}  className="font-minecraft me-1 cursor-pointer">X</h1></div>
                <div className="overflow-y-scroll h-full scrollbar mt-2">
                {projectList.map((item, index)=>{
                    return(<div key={item.name} className={`h-20 w-full ${colorCodes[index%7]} bg-opacity-30 hover:bg-opacity-100 ms-0 my-1`} onClick={()=>{dispatch(setProject(item));dispatch(toggleProjectModal(true));props.onProjectsClick()}}>
                                <h1 className="flex h-full justify-center items-center font-minecraft text-slate-200 text-xl duration-200 hover:text-2xl">{item.name.toUpperCase()}</h1>
                            </div>)
                })}
                    
                    
                </div>
            </div>
            <div onClick={()=>{setClicked(true)}} className={`duration-200 ${clicked ? 'lg:-translate-x-64 xl:-translate-x-96' : 'translate-x-0'} sm:h-custom-xl-square-height sm:w-custom-xl-square-width grid grid-cols-4 text-slate-200 dark:text-slate-200 mt-10 mb-36`}>
                
                {
                    techStackList.map((tech)=>{
                        return (
                            <div key={tech.name} onClick={()=>{setSelectedTech(tech.name.toUpperCase());getProjectsFromTech(tech.name)}} className={`flex justify-center items-center h-100 w-100 ${tech.bgtailwind} hover:scale-90 hover:rounded-xl duration-200`}>{tech.icon}</div>
                        )
                    })
                
                }

            
            </div>
            
        </div>
    )
}