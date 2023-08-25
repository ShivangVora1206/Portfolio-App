import { projects, colorCodes, techStackList } from "../../constants";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { toggleLoader } from "../../global_store/slices/loaderSlice";
import {toggleProjectModal,setProject} from "../../global_store/slices/projectModalSlice";
import { getOneProjectFromNameHelper, getProjectsFromTechHelper } from "../../Utils/projectUtils";
export default function Stack(props) {

    const [clicked, setClicked] = useState(false);
    const [projectList, setProjectList] = useState([]);
    const [selectedTech, setSelectedTech] = useState();
    const loader = useSelector((state)=>{return state.loader.value});
    const dispatch = useDispatch();


    const getProjectsFromTech = (tech)=>{
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

                {/* <div onClick={()=>{setSelectedTech("python".toUpperCase());getProjectsFromTech("python")}} className={`flex justify-center items-center h-100 w-100 dark:bg-red-500 bg-violet-800 hover:scale-90 hover:rounded-xl duration-200`}><Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['python']} size={3}/></div>
                <div onClick={()=>{setSelectedTech("vscode".toUpperCase());getProjectsFromTech("vscode")}} className={`flex justify-center items-center h-100 w-100 dark:bg-red-600 bg-violet-700 hover:scale-90 hover:rounded-xl duration-200`}><TbBrandVscode size={55} className="m-1 p-3 sm:p-1"/></div>
                <div onClick={()=>{setSelectedTech("javascript".toUpperCase());getProjectsFromTech("javascript")}} className={`flex justify-center items-center h-100 w-100 dark:bg-red-700 bg-violet-600 hover:scale-90 hover:rounded-xl duration-200`}><Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['javascript']} size={3}/></div>
                <div onClick={()=>{setSelectedTech("docker".toUpperCase());getProjectsFromTech("docker")}} className={`flex justify-center items-center h-100 w-100 dark:bg-red-800 bg-violet-500 hover:scale-90 hover:rounded-xl duration-200`}><BiLogoDocker size={55} className="m-1 p-3 sm:p-1"/></div>
                <div onClick={()=>{setSelectedTech("html".toUpperCase());getProjectsFromTech("html")}} className={`flex justify-center items-center h-100 w-100 dark:bg-pink-500 bg-purple-800 hover:scale-90 hover:rounded-xl duration-200`}><Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['html']} size={3}/></div>
                <div onClick={()=>{setSelectedTech("git".toUpperCase());getProjectsFromTech("git")}} className={`flex justify-center items-center h-100 w-100 dark:bg-pink-600 bg-purple-700 hover:scale-90 hover:rounded-xl duration-200`}><Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['git']} size={3}/></div>
                <div onClick={()=>{setSelectedTech("node".toUpperCase());getProjectsFromTech("node")}} className={`flex justify-center items-center h-100 w-100 dark:bg-pink-700 bg-purple-600 hover:scale-90 hover:rounded-xl duration-200`}><Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['node']} size={3}/></div>
                <div onClick={()=>{setSelectedTech("mongodb".toUpperCase());getProjectsFromTech("mongodb")}} className={`flex justify-center items-center h-100 w-100 dark:bg-pink-800 bg-purple-500 hover:scale-90 hover:rounded-xl duration-200`}><BiLogoMongodb size={55} className="m-1 p-3 sm:p-1"/></div>
                <div onClick={()=>{setSelectedTech("css".toUpperCase());getProjectsFromTech("css")}} className={`flex justify-center items-center h-100 w-100 dark:bg-purple-500 bg-pink-800 hover:scale-90 hover:rounded-xl duration-200`}><Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['css']} size={3}/></div>
                <div onClick={()=>{setSelectedTech("react".toUpperCase());getProjectsFromTech("react")}} className={`flex justify-center items-center h-100 w-100 dark:bg-purple-600 bg-pink-700 hover:scale-90 hover:rounded-xl duration-200`}><BiLogoReact size={55} className="m-1 p-3 sm:p-1"/></div>
                <div onClick={()=>{setSelectedTech("mysql".toUpperCase());getProjectsFromTech("mysql")}} className={`flex justify-center items-center h-100 w-100 dark:bg-purple-700 bg-pink-600 hover:scale-90 hover:rounded-xl duration-200`}><SiMysql size={55} className="m-1 p-3 sm:p-1"/></div>
                <div onClick={()=>{setSelectedTech("android".toUpperCase());getProjectsFromTech("android")}} className={`flex justify-center items-center h-100 w-100 dark:bg-purple-800 bg-pink-500 hover:scale-90 hover:rounded-xl duration-200`}><SiAndroid size={50} className="m-1 p-3 sm:p-1"/></div>
                <div onClick={()=>{setSelectedTech("androidstudio".toUpperCase());getProjectsFromTech("androidstudio")}} className={`flex justify-center items-center h-100 w-100 dark:bg-violet-500 bg-red-800 hover:scale-90 hover:rounded-xl duration-200`}><SiAndroidstudio size={55} className="m-1 p-3 sm:p-1"/></div>
                <div onClick={()=>{setSelectedTech("redux".toUpperCase());getProjectsFromTech("redux")}} className={`flex justify-center items-center h-100 w-100 dark:bg-violet-600 bg-red-700 hover:scale-90 hover:rounded-xl duration-200`}><TbBrandRedux size={52} className="m-1 p-3 sm:p-1"/></div>
                <div onClick={()=>{setSelectedTech("java".toUpperCase());getProjectsFromTech("java")}} className={`flex justify-center items-center h-100 w-100 dark:bg-violet-700 bg-red-600 hover:scale-90 hover:rounded-xl duration-200`}><Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['java']} size={3}/></div>
                <div onClick={()=>{setSelectedTech("tailwind".toUpperCase());getProjectsFromTech("tailwind")}} className={`flex justify-center items-center h-100 w-100 dark:bg-violet-800 bg-red-500 hover:scale-90 hover:rounded-xl duration-200`}><BiLogoTailwindCss size={55} className="m-1 p-3 sm:p-1"/></div> */}
            </div>
            {/* <div className="absolute w-full h-[7px] bg-slate-900 bottom-0"/>
            <div className="absolute w-full h-[6px] bg-slate-900 bottom-[12px]"/>
            <div className="absolute w-full h-[4px] bg-slate-900 bottom-[24px]"/>
            <div className="absolute w-full h-[3px] bg-slate-900 bottom-[34px]"/>
            <div className="absolute w-full h-[2px] bg-slate-900 bottom-[44px]"/>
            <div className="absolute w-full h-[1px] bg-slate-900 bottom-[52px]"/> */}
        </div>
    )
}