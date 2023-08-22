import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {useCollapse} from 'react-collapsed';
import {MdUnfoldMore, MdUnfoldLess} from 'react-icons/md';
const itemVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hidden: { opacity: 0.1, scale: 0}
};

export default function WorkListItem(params) {

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

    return(
        <motion.div ref={ref} variants={itemVariant} initial="hidden" animate={control} key='container' className={`flex flex-row justify-between items-start ${params.mode ? 'bg-gray-800 border-8 border-gray-300' : 'bg-slate-300 border-8 border-gray-800' } rounded-md my-2 w-80 sm:w-96 md:w-custom-medium-width lg:w-custom-large-width h-100`}>
            <div key='job-details' className="flex flex-col ms-5 w-custom-large-width-width" >
                <div  className=""><p key='company-name' className=" mt-5 dark:text-gray-200 text-gray-800 text-lg font-minecraft line">{params.companyName}</p>
                <p className="dark:text-gray-200 text-gray-800 mb-5 font-minecraft">{params.startDate} - {params.endDate}</p></div>
                <ul {...getCollapseProps()} key='company-details' className=" dark:text-gray-200 mx-10 mb-8  text-gray-800 text-lg font-SF_Pro_Text_Regular w-100 break-word list-disc">
                    {params.content.map((item)=>{
                        return(
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </div>
            {isExpanded ? <MdUnfoldLess className="w-7 h-5 m-3 text-slate-800 dark:text-slate-200 focus:outline-none duration-200" {...getToggleProps({onClick: handleOnClick})}/> : <MdUnfoldMore className="w-7 h-5 m-3 text-slate-800 dark:text-slate-200 focus:outline-none duration-200" {...getToggleProps({onClick: handleOnClick})}/>}
        </motion.div>
    )
}