import { projects } from "../constants";
export const getOneProjectFromNameHelper = (name) =>  {
    let project = null

    projects.forEach((item) => {
        if(item.name === name) {
            project = item
        }
    })

    return project
}

export const getProjectsFromTechHelper = (tech)=>{
    let tempList = [];
    projects.forEach(element => {
        if(element.stack.includes(tech)){
            tempList.push(element);
        }    
    });
    return tempList;
}