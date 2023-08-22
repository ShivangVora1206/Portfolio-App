import { projects } from "../../constants";
import ProjectListItem from "../ProjectListItem";

export default function Projects(props) {
	// console.log(projects);
	return (
		<div className={`h-full flex flex-col bg-gradient-to-r from-cyan-950 via-cyan-800 to-cyan-950 dark:bg-gradient-to-r dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950 items-center`}>
			<h1 className=" dark:text-slate-200 text-slate-200 flex mt-20 font-minecraft text-2xl w-full justify-center">PROJECTS</h1>
			<div className="grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 mb-10">
                
					{projects.map((item)=>{
						return(<ProjectListItem project={item}/>)

					})}
                
            </div>
		</div>
	);
}
