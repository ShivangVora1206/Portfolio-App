import Icon from "@mdi/react";
import { mdiGithub } from '@mdi/js'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {useCollapse} from 'react-collapsed';
import { useAnimation } from "framer-motion";
import { iconsPathMap } from '../../constants'

export default function ProjectListItem(params) {
	// console.log(params.project.stack);

	
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	;

	return (
		<div className=" dark:text-slate-200 text-zinc-800 mx-6 my-4 w-80 xl:w-70 h-48 flex flex-col rounded-lg">
			<img className="rounded-lg h-52" src={process.env.PUBLIC_URL + params.project.image}/>
			<div className="absolute  bg-zinc-300 dark:bg-zinc-800 w-80 h-100 mt-0 rounded-lg opacity-0 p-0 hover:p-3 hover:opacity-100  duration-200"
			{...getToggleProps({onClick: handleOnClick})}
			>
			<h1 className="font-SF_Pro_Display_Black text-center mt-2">
				
				{params.project.name}
			</h1>
			<div className=" grid grid-cols-5 mx-5 mb-8 my-2">
					

					{params.project.stack.map((item) => {
						return (
				<div className="flex flex-row justify-center items-center">
							<div className="">
							
								{(typeof iconsPathMap[item] == typeof "")  ? <Icon
									className="m-1"
									path={iconsPathMap[item]}
									size={1}
								/> : iconsPathMap[item]}
							
								
							</div>
				</div>
						);
					})}
			</div>
					{/* <div className="h-2"></div> */}

					<div className="w-10 hover:scale-125 duration-150" onClick={()=>{window.open(params.project.github)}}>
						<Icon
							className="m-1"
							path={mdiGithub}
							size={1}/>
					</div>
					<p className="mx-2 mb-2" {...getCollapseProps()} > {params.project.description} </p>

			</div>
		</div>
	);
}
