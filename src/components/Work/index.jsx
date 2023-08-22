import { toggleMode } from "../../global_store/slices/navbarSlice"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import WorkListItem from "../WorkListItem";
import { companyDetails } from "../../constants";
export default function Work() {
    
    const mode = useSelector((state)=>{return state.navbar.value.mode})

    
    return (
        <div key={'container'} className={`flex flex-col ease-in duration-300 ${!mode ? 'bg-image-work-light' : 'bg-image-work-dark' } bg-no-repeat bg-cover bg-center h-100 w-100`}>
            
            
            <div key="title" className=" flex justify-center w-auto mt-20 mb-5 dark:text-gray-200 text-gray-200 text-2xl font-minecraft">
                <p>WORK</p>
            </div>
            <div key="item-list" className="flex flex-col items-center px-5 md:mx-40 mb-16 rounded-md">
                {companyDetails.map((item, index) => {
                    return (<WorkListItem companyName={item.name} mode={mode} startDate={item.startDate} endDate={item.endDate} content={item.content}/>)
                })}
            </div>
        </div>
    )
}